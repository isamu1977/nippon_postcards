import { writable, derived } from "svelte/store";
import type { Postcard } from "$lib/data/postcards";

/**
 * Cart store with coupon + discount support and recipient name/address fields.
 *
 * Exports:
 * - cart: writable CartItem[]
 * - subtotal: derived number (before discounts)
 * - totalItems: derived number
 * - discountRate: derived number (0..0.2)
 * - discountAmount: derived number
 * - totalPrice: derived number (after discounts)
 * - coupon: writable string|null
 * - applyCoupon(code): boolean
 * - clearCoupon()
 * - standard cart mutation helpers (addToCart, updateQuantity, removeFromCart, updateItemDetails, clearCart)
 */

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  recipientName?: string;
  recipientAddress?: string;
  message?: string;
};

const STORAGE_KEY = "nipponpostcards_cart";
const STORAGE_KEY_COUPON = "nipponpostcards_coupon";

function loadInitialCart(): CartItem[] {
  try {
    if (typeof localStorage === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CartItem[]) : [];
  } catch {
    return [];
  }
}

function loadInitialCoupon(): string | null {
  try {
    if (typeof localStorage === "undefined") return null;
    const raw = localStorage.getItem(STORAGE_KEY_COUPON);
    return raw ? String(raw) : null;
  } catch {
    return null;
  }
}

export const cart = writable<CartItem[]>(loadInitialCart());
export const coupon = writable<string | null>(loadInitialCoupon());

cart.subscribe((value) => {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  } catch {
    // ignore
  }
});

coupon.subscribe((value) => {
  try {
    if (typeof localStorage !== "undefined") {
      if (value === null || value === "") {
        localStorage.removeItem(STORAGE_KEY_COUPON);
      } else {
        localStorage.setItem(STORAGE_KEY_COUPON, String(value));
      }
    }
  } catch {
    // ignore
  }
});

export const subtotal = derived(cart, ($cart) =>
  $cart.reduce((s, i) => s + i.quantity * i.price, 0)
);

export const totalItems = derived(cart, ($cart) => $cart.reduce((s, i) => s + i.quantity, 0));

export const couponIsValid = derived(coupon, ($coupon) => {
  if (!$coupon) return false;
  return String($coupon).trim().toUpperCase() === "NIPPON10";
});

/**
 * Discount stacking rules:
 * - 10% if totalItems >= 2
 * - 10% if coupon valid ("NIPPON10")
 * - max 20%
 */
export const discountRate = derived(
  [totalItems, couponIsValid],
  ([$totalItems, $couponIsValid]) => {
    let rate = 0;
    if ($totalItems >= 2) rate += 0.1;
    if ($couponIsValid) rate += 0.1;
    return Math.min(rate, 0.2);
  }
);

export const discountAmount = derived([subtotal, discountRate], ([$subtotal, $discountRate]) =>
  Math.round(($subtotal * $discountRate) * 100) / 100
);

export const totalPrice = derived([subtotal, discountAmount], ([$subtotal, $discountAmount]) =>
  Math.round(($subtotal - $discountAmount) * 100) / 100
);

export function addToCart(p: Postcard, qty = 1) {
  if (!p) return;
  cart.update((items) => {
    const idx = items.findIndex((it) => it.id === p.id);
    if (idx >= 0) {
      items[idx].quantity += qty;
    } else {
      items.push({ id: p.id, title: p.title, price: p.price, quantity: qty });
    }
    return [...items];
  });
}

export function updateQuantity(id: string, quantity: number) {
  cart.update((items) => {
    const next = items
      .map((it) => (it.id === id ? { ...it, quantity: Math.max(0, quantity) } : it))
      .filter((it) => it.quantity > 0);
    return next;
  });
}

export function removeFromCart(id: string) {
  cart.update((items) => items.filter((it) => it.id !== id));
}

export function updateItemDetails(
  postcardId: string,
  details: { recipientName?: string; recipientAddress?: string; message?: string }
) {
  cart.update((items) =>
    items.map((it) => {
      if (it.id !== postcardId) return it;
      return {
        ...it,
        recipientName:
          details.recipientName !== undefined ? details.recipientName : it.recipientName,
        recipientAddress:
          details.recipientAddress !== undefined ? details.recipientAddress : it.recipientAddress,
        message: details.message !== undefined ? details.message : it.message,
      };
    })
  );
}

export function clearCart() {
  cart.set([]);
}

export function applyCoupon(code: string) {
  try {
    if (!code) {
      coupon.set(null);
      return false;
    }
    const normalized = String(code).trim().toUpperCase();
    if (normalized === "NIPPON10") {
      coupon.set(normalized);
      return true;
    } else {
      // invalid coupon - still store the attempted value (optional)
      coupon.set(null);
      return false;
    }
  } catch {
    coupon.set(null);
    return false;
  }
}

export function clearCoupon() {
  coupon.set(null);
}
