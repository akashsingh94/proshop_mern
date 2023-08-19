import { atomWithStorage } from "jotai/utils";

const CART_KEY = "cartItems";

export const cartItemsAtom = atomWithStorage(
  CART_KEY,
  localStorage.getItem(CART_KEY) || []
);
