import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { useAtom } from "jotai/react";
import { Link, useLocation } from "react-router-dom";

import { totalCartItemsAtom } from "../../atom/cartAtoms";
import "./AppHeaderActions.css";
import { LoginGreetingButton } from "./LoginGreetingButton";

export function AppHeaderActions() {
  const [totalItems] = useAtom(totalCartItemsAtom);
  const { pathname } = useLocation();
  const hideActions =
    pathname.includes("/login") || pathname.includes("/register");

  if (hideActions) return null;

  return (
    <div className="app-header__actions">
      <Button
        color="inherit"
        component={Link}
        to="/cart"
        startIcon={
          <Badge badgeContent={totalItems || undefined} color="secondary">
            <ShoppingCartIcon color="action" />
          </Badge>
        }
      >
        Cart
      </Button>
      <LoginGreetingButton />
    </div>
  );
}
