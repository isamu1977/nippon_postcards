# Stripe Checkout Spec – Nippon Postcards

## 1. Context

This spec defines the Stripe Checkout integration for the Nippon Postcards e-commerce flow.

Goals:
- Create a secure payment flow using Stripe Checkout.
- Use the existing SvelteKit cart data.
- Redirect the user to Stripe and then back to the app after payment.
- Work together with the discounts and recipient details defined in `discounts-and-recipient.spec.md`.

This spec covers:
- API endpoint: `/api/create-checkout-session`
- Checkout page: `/checkout`
- Success page: `/order/success`

---

## 2. Data Model and Assumptions

The cart store exposes an array of items with at least:

```ts
type CartItem = {
  id: string;
  title: string;
  price: number;           // base price in USD (e.g. 15.0 means \$15.00)
  quantity: number;
  imageUrl?: string;

  recipientName?: string;
  recipientAddress?: string;
  message?: string;
};