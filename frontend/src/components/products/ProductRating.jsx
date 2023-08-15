import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export function ProductRating(props) {
  const { value, text } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingBottom: 1,
      }}
    >
      <Rating
        name="product-rating"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {text && <Box sx={{ ml: 2 }}>{text}</Box>}
    </Box>
  );
}
