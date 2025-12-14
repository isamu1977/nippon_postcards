import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

/**
 * Create a Stripe Checkout Session (or a mock session if STRIPE key is not provided).
 *
 * Expects a POST body: { items: Array<{ id, title, price, quantity, recipientName?, recipientAddress?, message? }>, coupon?: string }
 * - price is expected to be in cents (e.g. 1500 = $15.00). If the price looks like dollars
 *   (non-integer or < 100), it will be converted to cents by multiplying by 100.
 *
 * Discount rules are recomputed server-side for safety:
 * - 10% if totalItems >= 2
 * - 10% if coupon is "NIPPON10"
 * - capped at 20%
 *
 * Returns: { url: "<checkout url>" }
 */
export const POST: RequestHandler = async ({ request, url }) => {
  try {
    const body = await request.json();
    const items = Array.isArray(body?.items) ? body.items : [];

    // Determine origin for success/cancel URLs
    const origin = url?.origin || request.headers.get("origin") || "";

    // Evaluate coupon & compute discountRate server-side (defensive)
    const coupon = String(body?.coupon ?? "").trim();
    const couponIsValid = coupon.toUpperCase() === "NIPPON10";

    const totalItemsCount = items.reduce((s: number, it: any) => s + (Number(it.quantity) || 0), 0);
    let computedRate = 0;
    if (totalItemsCount >= 2) computedRate += 0.1;
    if (couponIsValid) computedRate += 0.1;
    const discountRate = Math.min(computedRate, 0.2);

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

          // Apply computed discount rate (server-side) to unit_amount.
          const discounted = Math.max(1, Math.round(unit_amount * (1 - discountRate)));

          const productDescriptionParts: string[] = [];
          if (item.recipientName) productDescriptionParts.push(`To: ${String(item.recipientName)}`);
          if (item.recipientAddress) productDescriptionParts.push(String(item.recipientAddress));
          if (item.message) productDescriptionParts.push(`Msg: ${String(item.message).slice(0, 200)}`);

          return {
            price_data: {
              currency: "usd",
              unit_amount: discounted,
              product_data: {
                name: String(item.title ?? "Postcard"),
                ...(productDescriptionParts.length ? { description: productDescriptionParts.join(" — ") } : {}),
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
          coupon: couponIsValid ? coupon : "",
          discountRate: String(discountRate),
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
