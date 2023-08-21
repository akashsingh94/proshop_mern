import { Divider, Typography } from "@mui/material";
import { useCallback } from "react";
import { useAtom } from "jotai";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { QuantityPicker } from "../products/QuantityPicker";
import { cartItemsAtom } from "../../atom/cartAtoms";
import { toasterAtom } from "../../atom/globalAtom";
import "./CartItem.css";

export function CartItem({ item }) {
  const [, setCartItems] = useAtom(cartItemsAtom);
  const [, setToasterInfo] = useAtom(toasterAtom);

  const handleQuantityChange = useCallback(
    (qty) => {
      setCartItems((preItems) => {
        return preItems.map((i) => {
          if (i._id === item._id) return { ...item, quantity: qty };
          return i;
        });
      });
      setToasterInfo({
        open: true,
        message: "Quantity updated successfully!!",
        severity: "success",
      });
    },
    [item, setCartItems, setToasterInfo]
  );

  const handleDeleteItem = useCallback(() => {
    setCartItems((preItems) => {
      return preItems.filter((i) => i._id !== item._id);
    });
    setToasterInfo({
      open: true,
      message: "Product removed from cart!!",
      severity: "success",
    });
  }, [item, setCartItems, setToasterInfo]);

  if (!item) return null;
  return (
    <>
      <div className="cart-item">
        <div className="cart-item-name-image">
          <img className="cart-item-image" src={item.image} alt={item.name} />
          <Typography variant="h6">{item.name}</Typography>
        </div>
        <Typography variant="body1">${item.price}</Typography>
        <QuantityPicker
          totalQuantity={item.countInStock}
          value={item.quantity}
          onChange={handleQuantityChange}
        />
        <IconButton
          onClick={handleDeleteItem}
          aria-label="delete"
          color="secondary"
          size="large"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <Divider />
    </>
  );
}
