# E-commerce Flow Spec – Nippon Postcards

## 1. Overview

This spec defines the minimum viable e-commerce flow for nipponpostcards.com, implemented on top of the existing SvelteKit frontend.

Goal:  
Allow a visitor to:

1. Browse available postcards.
2. View details of a specific postcard.
3. Add one or more postcards to a cart.
4. Provide recipient address and an optional message per postcard.
5. Proceed to checkout and pay via Stripe Checkout.
6. See a confirmation page after successful payment.

The design should stay consistent with the current minimal SaaS-like UI, but this spec focuses on **functionality and structure**, not pixel-perfect styling.

---

## 2. Routes and Responsibilities

### 2.1. `/shop` – Postcard catalog

**File:** `web/src/routes/shop/+page.svelte`

**Responsibilities:**

- Display a grid/list of available postcards.
- Allow filtering by category (e.g., Japanese castles, Japanese UNESCO Sites, Mount Fuji).
- Each postcard card should:
  - Show image, title, short description, and price.
  - Link to `/shop/[id]` for detailed view.

**Behavior:**

- Initial load: show all postcards.
- When a category filter is selected, only postcards of that category are displayed.
- Filtering is done client-side (for now) based on a static list of postcards.

---

### 2.2. `/shop/[id]` – Postcard detail

**File:** `web/src/routes/shop/[id]/+page.svelte`

**Responsibilities:**

- Show details for a single postcard (title, image, description, price).
- Provide an “Add to Cart” button.

**Behavior:**

- The postcard is looked up by `id` from a static data source (see Data Models).
- If `id` does not exist:
  - Show a simple “Postcard not found” message.
  - Provide a link back to `/shop`.

---

### 2.3. `/cart` – Cart page

**File:** `web/src/routes/cart/+page.svelte`

**Responsibilities:**

- Display all items currently in the cart.
- For each item, show:
  - Thumbnail, title, unit price, quantity, subtotal.
  - Text input for recipient address.
  - Textarea for personalized message.
  - Remove item action.
- Show cart total (sum of all line items).
- Provide a “Proceed to Checkout” button.

**Behavior:**

- If the cart is empty:
  - Show an “empty cart” message.
  - Provide a link to `/shop`.
- If there are items:
  - Allow quantity updates.
  - Allow editing address and message per item.
- When clicking “Proceed to Checkout”:
  - If cart is empty → show error / prevent navigation.
  - Otherwise → navigate to `/checkout`.

For now, validation of address/message can be minimal (non-empty checks can be introduced later).

---

### 2.4. `/checkout` – Stripe checkout redirection

**File:** `web/src/routes/checkout/+page.svelte`

**Responsibilities:**

- Take current cart items from the client-side store.
- Call a backend endpoint to create a Stripe Checkout Session.
- Redirect the user to the Stripe-hosted checkout page.

**Behavior:**

- On mount:
  - If the cart is empty, redirect immediately back to `/cart`.
  - Else:
    - Send a POST request to `/api/create-checkout-session` with the cart items.
    - On success, receive a URL from the API and redirect the browser to that URL.
    - On error, show a generic error message and keep the user on the page.

---

### 2.5. `/order/success` – Order confirmation

**File:** `web/src/routes/order/success/+page.svelte`

**Responsibilities:**

- Display a confirmation message after successful payment.
- Provide a link back to home or shop.
- Optionally show a simple “Order ID” derived from the Stripe Checkout Session ID in the query string.

**Behavior:**

- On mount:
  - Clear the local cart store (the order has been paid).
- If a `session_id` is present in the query string:
  - Display it as a reference “Order ID” (no further Stripe API integration required for MVP).

---

### 2.6. `/api/create-checkout-session` – Stripe integration endpoint

**File:** `web/src/routes/api/create-checkout-session/+server.ts`

**Responsibilities:**

- Receive a POST request with the current cart contents.
- Create a Stripe Checkout Session using `STRIPE_SECRET_KEY`.
- Return a JSON response containing the session URL.

**Behavior:**

- Request body:
  - JSON with property `items`, an array of cart items (see Data Models).
- For each item, create a Stripe line item with:
  - `unit_amount` from postcard price in cents.
  - `quantity` from cart.
  - `product_data` from postcard information (name, description, image).
- Configure the session with:
  - `mode: 'payment'`
  - `success_url` → `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`
  - `cancel_url` → `${origin}/cart`
- Optionally store the serialized cart data in `metadata.cartData`.
- Return `{ "url": "<StripeSessionURL>" }`.

---

## 3. Data Models

Implementation detail: these models live on the client side in TypeScript files under `web/src/lib`.

### 3.1. `Postcard`

**Location:** `web/src/lib/data/postcards.ts`

**Interface:**

- `id: string` – unique identifier used in the URL.
- `title: string` – display title.
- `category: 'castles' | 'unesco' | 'fuji' | 'seasonal' | 'other'`.
- `imageUrl: string` – path or URL to the postcard image.
- `price: number` – price in cents (e.g. 1500 = US$ 15.00).
- `description: string` – short description.

**Data:**

- Start with 5–10 hard-coded sample postcards across different categories.
- Later this may be replaced by Supabase or another backend.

---

### 3.2. `CartItem`

**Location:** `web/src/lib/stores/cart.ts`

**Interface:**

- `postcard: Postcard`
- `quantity: number`
- `recipientAddress?: string`
- `message?: string`

---

## 4. Cart Store Behavior

**Location:** `web/src/lib/stores/cart.ts`

We will use a Svelte store to manage cart state on the client.

### 4.1. Required API

The cart store must provide:

- `subscribe` – standard Svelte store subscription.
- `addItem(postcard: Postcard)`  
  - If item already exists in cart, increment `quantity`.
  - If not, add new item with `quantity = 1`.
- `removeItem(postcardId: string)`  
  - Remove the item with the matching postcard id from the cart.
- `updateQuantity(postcardId: string, quantity: number)`  
  - Update quantity for the given item.
- `updateItemDetails(postcardId: string, details: { recipientAddress?: string; message?: string })`  
  - Update `recipientAddress` and/or `message` for the given item.
- `clear()`  
  - Clear the entire cart.

### 4.2. Derived Stores

Define:

- `cartTotal`  
  - Number: sum of `item.postcard.price * item.quantity` for all items.
- `cartCount`  
  - Number: sum of `item.quantity` for all items.

These will be used in the cart page and in the header badge.

---

## 5. Header Cart Indicator

**File:** `web/src/routes/+layout.svelte`

### Requirements:

- In the header, next to the existing navigation and “Choose a postcard” button, show a cart icon.
- The cart icon links to `/cart`.
- If `cartCount > 0`, show a small badge with the number of items.
- The visual style should match the current minimal SaaS header (use Tailwind utility classes).

---

## 6. Minimal UI/UX Requirements

This spec does not aim for full visual polish, but the following must hold:

- All new pages (`/shop`, `/shop/[id]`, `/cart`, `/checkout`, `/order/success`) use the existing layout with header and footer.
- Layout should be responsive:
  - Single column on small screens.
  - Grid layouts only on medium+ screens where appropriate.
- Use clear CTAs:
  - “Add to Cart” on the product detail page.
  - “Proceed to Checkout” on the cart page.
  - “Back to Home” or “Back to Shop” on the success page.
- Errors are handled gracefully:
  - Empty cart → friendly message, link to shop.
  - Product not found → simple message, link to shop.
  - Stripe session creation error → simple error message on `/checkout`.

---

## 7. Out of Scope (for this spec)

- Persistent cart across sessions (no localStorage or Supabase yet).
- Backend order storage or webhooks from Stripe.
- Detailed address validation or format per country.
- Multi-currency support.
- Complex discount logic, coupons, or subscriptions.

These can be handled in separate specs later.