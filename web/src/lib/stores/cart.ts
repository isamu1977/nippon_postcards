import { writable, derived } from "svelte/store";
import type { Postcard } from "$lib/data/postcards";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

const STORAGE_KEY = "nipponpostcards_cart";

function loadInitial(): CartItem[] {
  try {
    if (typeof localStorage === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as CartItem[] : [];
  } catch {
    return [];
  }
}

export const cart = writable<CartItem[]>(loadInitial());

cart.subscribe((value) => {
  try {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    }
  } catch {
    // ignore
  }
});

export const totalItems = derived(cart, ($cart) => $cart.reduce((s, i) => s + i.quantity, 0));
export const totalPrice = derived(cart, ($cart) => $cart.reduce((s, i) => s + i.quantity * i.price, 0));

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
    const next = items.map((it) => (it.id === id ? { ...it, quantity: Math.max(0, quantity) } : it)).filter(it => it.quantity > 0);
    return next;
  });
}

export function removeFromCart(id: string) {
  cart.update((items) => items.filter((it) => it.id !== id));
}

export function clearCart() {
  cart.set([]);
}
