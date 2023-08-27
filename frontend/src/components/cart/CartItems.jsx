import { useAtom } from "jotai";

import { cartItemsAtom } from "../../atom/cartAtoms";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { CartSummery } from "./CartSummery";
import "./CartItems.css";

export function CartItems() {
  const [cartItems] = useAtom(cartItemsAtom);
  const hasItemsInCart = cartItems && !!cartItems.length;
  if (!hasItemsInCart) return <EmptyCart />;
  return (
    <div className="cart-items-wrapper">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
      <CartSummery />
    </div>
  );
}
