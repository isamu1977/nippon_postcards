import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

/**
 * Create a Stripe Checkout Session (or a mock session if STRIPE key is not provided).
 *
 * Expects a POST body: { items: Array<{ id, title, price, quantity, description? }> }
 * - price is expected to be in cents (e.g. 1500 = $15.00). If the price looks like dollars
 *   (non-integer or < 100), it will be converted to cents by multiplying by 100.
 *
 * Returns: { url: "<checkout url>" }
 */
export const POST: RequestHandler = async ({ request, url }) => {
  try {
    const body = await request.json();
    const items = Array.isArray(body?.items) ? body.items : [];

    // Determine origin for success/cancel URLs
    const origin = url?.origin || request.headers.get("origin") || "";

    // Prefer STRIPE_SECRET_KEY, fall back to common env names
    const STRIPE_SECRET =
      process.env.STRIPE_SECRET_KEY || process.env.STRIPE_API_KEY || process.env.STRIPE_KEY;

    if (STRIPE_SECRET) {
      // Lazily import stripe so the app still works if the package is not installed
      const StripePkg = await import("stripe").then((m) => (m.default ? m.default : m));
      const stripe = new StripePkg(STRIPE_SECRET, { apiVersion: "2022-11-15" });

      const line_items = items
        .map((item: any) => {
          const quantity = Math.max(1, Number(item.quantity) || 1);

          // Determine unit_amount in cents.
          let unit_amount = Number(item.price) || 0;
          // If price looks like dollars (non-integer or less than 100), convert to cents.
          if (!Number.isInteger(unit_amount) || unit_amount < 100) {
            unit_amount = Math.round(unit_amount * 100);
          }

          // Fallback to $1.00 if unit_amount is invalid
          if (!Number.isInteger(unit_amount) || unit_amount <= 0) {
            unit_amount = 100;
          }

          return {
            price_data: {
              currency: "usd",
              unit_amount,
              product_data: {
                name: String(item.title ?? "Postcard"),
                ...(item.description ? { description: String(item.description) } : {}),
              },
            },
            quantity,
          };
        })
        .filter(Boolean);

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cart`,
        metadata: {
          cart: JSON.stringify(items),
        },
      });

      return json({ url: session.url });
    } else {
      // Fallback mock behavior when Stripe key is not configured.
      const sessionId = `mock_${Math.random().toString(36).slice(2, 10)}`;
      const fallbackUrl = `/order/success?session_id=${sessionId}`;
      return json({ url: fallbackUrl });
    }
  } catch (err) {
    console.error("create-checkout-session error:", err);
    return json({ error: "failed" }, { status: 500 });
  }
};
