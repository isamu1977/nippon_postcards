# Discounts and Recipient Details Spec – Nippon Postcards

## 1. Context

This spec defines:

1. A public, permanent coupon system.
2. Automatic quantity-based discounts.
3. How these discounts combine (stack).
4. Improvements to the cart UX for entering recipient details:
   - Recipient **name**
   - Recipient **address**
   - Ability to mirror name/address from the first card to subsequent cards via checkboxes.

This spec must integrate cleanly with the Stripe Checkout flow defined in `stripe-checkout.spec.md`.

---

## 2. Discount Rules

### 2.1. Base price

- Each postcard has a base price of **US$ 15.00**.

### 2.2. Quantity discount

- If the total number of postcards (`totalItems`) is **2 or more**, apply a **10% discount** on the cart subtotal.

### 2.3. Public coupon

- There is a public, permanent coupon code, e.g. `"NIPPON10"`.
- When the user enters this code in the cart and clicks "Apply":
  - If valid, apply an additional **10% discount**.

### 2.4. Stacking logic

- Quantity discount (10%) **and** coupon discount (10%) should stack.
- Maximum total discount: **20%**.
- In practice:
  - If `totalItems < 2` and coupon valid → 10% off.
  - If `totalItems >= 2` and no coupon → 10% off.
  - If `totalItems >= 2` and coupon valid → 20% off total.

The effective discount rate is:

```ts
let rate = 0;
if (totalItems >= 2) rate += 0.10;
if (couponIsValid) rate += 0.10;
const discountRate = Math.min(rate, 0.20);