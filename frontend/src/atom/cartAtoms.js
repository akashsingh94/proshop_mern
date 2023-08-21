import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const CART_KEY = "cartItems";

export const cartItemsAtom = atomWithStorage(
  CART_KEY,
  localStorage.getItem(CART_KEY)
    ? JSON.parse(localStorage.getItem(CART_KEY))
    : []
);

export const totalCartItemsAtom = atom((get) =>
  (get(cartItemsAtom) || []).reduce((total, curr) => curr.quantity + total, 0)
);

export const totalPrice = atom((get) =>
  (get(cartItemsAtom) || []).reduce((total, curr) => {
    const totalCost = curr.quantity * curr.price + total;
    return Number.parseFloat(totalCost).toFixed(2);
  }, 0)
);
