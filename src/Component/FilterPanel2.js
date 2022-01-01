import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const listData = [
  {
    id: "1",
    label: "P1",
  },
  {
    id: "1",
    label: "P1",
  },
  {
    id: "2",
    label: "P2",
  },
  {
    id: "2",
    label: "P3",
  },
];

export function MuiMultiSelect(props) {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const dictinctItems = getDistinctItemsById(listData);

  const handleChange = (event) => {
    setSelectedItems(event.target.value);
  };

  return (
    <Box
      sx={{
        border: 1,
        mt: 2,
        p: 4,
      }}
    >
      <Box sx={{ color: "text.secondary" }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox">Tag</InputLabel>
          <Select
            multiple
            value={selectedItems}
            onChange={handleChange}
            input={<OutlinedInput label="Select" />}
            renderValue={(selected) =>
              selected && selected.map((item) => item.label).join(", ")
            }
            MenuProps={MenuProps}
          >
            {dictinctItems.map((item) => (
              <MenuItem key={item.id} value={item}>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

function getDistinctItemsById(originalArray) {
  let dictinctItems = [];
  originalArray.forEach(function (item) {
    const i = dictinctItems.findIndex((x) => x.id === item.id);
    if (i <= -1) {
      dictinctItems.push(item); //this works
      // dictinctItems.push({ id: item.id, label: item.label }); //this doesn't
    }
  });
  return dictinctItems;
}
