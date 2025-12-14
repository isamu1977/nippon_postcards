import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

/**
 * Mock checkout session creator.
 * In production replace this with a real Stripe session creation using secret key.
 * For now we return a URL pointing to the local success page with a mock session id.
 */
export const POST: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();
    const items = body?.items ?? [];
    // Create a simple mock session id
    const sessionId = `mock_${Math.random().toString(36).slice(2, 10)}`;

    // In a real integration you'd call Stripe and return the stripe.checkout.url
    const url = `/order/success?session_id=${sessionId}`;

    return json({ url });
  } catch (err) {
    return json({ error: "failed" }, { status: 500 });
  }
};
