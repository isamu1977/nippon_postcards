# Discounts and Recipient Details Spec – Nippon Postcards

## 0. Svelte-specific constraints (MUST FOLLOW)

When editing or creating `.svelte` files:

- You MUST NOT declare variables or imports whose names start with `$` inside `<script>` blocks.
- In particular, never write: `let $cart = ...`, `let $subtotal = ...`, etc.
- Svelte uses the `$` prefix only for auto-subscription to stores in the template.

Correct pattern:
```svelte
<script lang="ts">
  import { cart, totalPrice } from '$lib/stores/cart';
</script>

{#if $cart.length === 0}
  <p>Your cart is empty.</p>
{:else}
  <p>Total: {$totalPrice.toFixed(2)}</p>
{/if}

Incorrect pattern (DO NOT DO THIS):
<script lang="ts">
  let $cart = [];
  let $totalPrice = 0;
</script>


## 1. Context

This spec defines:

1. A public, permanent coupon system.
2. Automatic quantity-based discounts.
3. How these discounts combine (stack).
4. Improvements to the cart UX for entering recipient details:
   - Recipient **name**
   - Recipient **address**
   - Do not use grid-cols-2 for the recipient name and address fields. Put the recipient address under the recipient name, creating 2 rows for each one.
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

## 3. Cart Line-Item Model (MUST FOLLOW)

### 3.1. One postcard per cart line item (NO QUANTITY AGGREGATION)

Each cart line item represents exactly **one** postcard shipment with its own recipient details.

- The cart MUST NOT aggregate identical postcards using a `quantity` field in the UI or store logic.
- If the user adds the same postcard twice, the cart MUST contain **two separate line items** with distinct `id`s.
- `totalItems` MUST be computed as the number of cart line items:

```ts
const totalItems = $cart.length;
```