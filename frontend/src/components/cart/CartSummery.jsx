import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAtom } from "jotai";
import { Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

import { totalCartItemsAtom, totalPrice } from "../../atom/cartAtoms";

export function CartSummery() {
  const [totalItems] = useAtom(totalCartItemsAtom);
  const [total] = useAtom(totalPrice);

  return (
    <Card sx={{ maxWidth: 345, height: "max-content" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Subtotal ({totalItems}) items
        </Typography>
        <Typography variant="body1">${total}</Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          component={Link}
          to="/check-out"
          sx={{ m: 1 }}
          variant="contained"
        >
          Proceed To Checkout
        </Button>
      </CardActions>
    </Card>
  );
}
