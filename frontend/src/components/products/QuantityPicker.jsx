import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

export function QuantityPicker({ totalQuantity, value, onChange }) {
  if (!totalQuantity) return null;
  const qty = Array.from(Array(totalQuantity).keys());

  const handleChange = (event) => {
    onChange && onChange(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="quantity-label">Quantity</InputLabel>
        <Select
          labelId="quantity-label"
          id="quantity-select"
          value={value}
          label="Quantity"
          onChange={handleChange}
        >
          {qty.map((q) => (
            <MenuItem key={q} value={q + 1}>
              {q + 1}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
