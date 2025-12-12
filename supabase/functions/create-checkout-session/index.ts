import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14.11.0?target=deno'

// Stripe client
const stripeSecretKey = Deno.env.get('STRIPE_SECRET_KEY') || ''
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-10-16',
  httpClient: Stripe.createFetchHttpClient(),
})

// Supabase service client
const supabaseUrl = Deno.env.get('SUPABASE_URL')!
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!

const frontendUrl = Deno.env.get('FRONTEND_URL') || 'http://localhost:5173'

serve(async (req) => {
  // Basic CORS support
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    })
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    const body = await req.json()

    const {
      card_type_id,
      message,
      recipient_name,
      street,
      city,
      state,
      postal_code,
      country,
      buyer_email,
    } = body

    // Basic validation
    if (
      !card_type_id ||
      !message ||
      !recipient_name ||
      !street ||
      !city ||
      !postal_code ||
      !country ||
      !buyer_email
    ) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
    }

    // Fetch card type details (price, name)
    const { data: cardType, error: cardError } = await supabase
      .from('card_types')
      .select('*')
      .eq('id', card_type_id)
      .single()

    if (cardError || !cardType) {
      console.error('Card type error:', cardError)
      return new Response(
        JSON.stringify({ error: 'Invalid postcard type.' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
    }

    // Create order in DB with status "created"
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        card_type_id,
        message,
        recipient_name,
        street,
        city,
        state,
        postal_code,
        country,
        buyer_email,
        status: 'created',
      })
      .select()
      .single()

    if (orderError || !order) {
      console.error('Order creation error:', orderError)
      return new Response(
        JSON.stringify({ error: 'Failed to create order.' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        },
      )
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'jpy', // change if needed
            product_data: {
              name: `Postcard - ${cardType.name}`,
              description: cardType.description || undefined,
              images: cardType.image_url ? [cardType.image_url] : [],
            },
            unit_amount: cardType.price_cents,
          },
          quantity: 1,
        },
      ],
      customer_email: buyer_email,
      metadata: {
        order_id: order.id.toString(),
      },
      success_url: `${frontendUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${frontendUrl}/cancel`,
    })

    // Save Stripe session ID on the order
    const { error: updateError } = await supabase
      .from('orders')
      .update({
        stripe_session_id: session.id,
      })
      .eq('id', order.id)

    if (updateError) {
      console.error('Failed to update order with Stripe session ID:', updateError)
    }

    return new Response(
      JSON.stringify({
        checkout_url: session.url,
        order_id: order.id,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
  } catch (error) {
    console.error('Unexpected error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      },
    )
  }
})