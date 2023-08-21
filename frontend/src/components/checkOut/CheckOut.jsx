import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAtom } from "jotai";

import { totalCartItemsAtom, totalPrice } from "../../atom/cartAtoms";
import { Divider } from "@mui/material";

export function CheckOut() {
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
        <Button sx={{ m: 1 }} variant="contained">
          Proceed To Checkout
        </Button>
      </CardActions>
    </Card>
  );
}
