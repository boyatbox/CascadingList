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

const _Level1 = [
  {
    pid: "1",
    vid: "1.1",
    aid: "1.1.1",
    plabel: "P1",
    vlabel: "V1",
    alabel: "P1.V1.A1",
  },
  {
    pid: "1",
    vid: "1.1",
    aid: "1.1.2",
    plabel: "P1",
    vlabel: "V1",
    alabel: "P1.V1.A2",
  },
  {
    pid: "1",
    vid: "1.2",
    aid: "1.2.1",
    plabel: "P1",
    vlabel: "V2",
    alabel: "P1.V2.A1",
  },
  {
    pid: "1",
    vid: "1.2",
    aid: "1.2.2",
    plabel: "P1",
    vlabel: "V2",
    alabel: "P1.V2.A2",
  },
  {
    pid: "2",
    vid: "2.1",
    aid: "2.1.1",
    plabel: "P2",
    vlabel: "V2.2",
    alabel: "P2.V1.A1",
  },
];

const Level1 = [
  {
    pid: "1",
    plabel: "P1",
  },
  {
    pid: "1",
    plabel: "P1",
  },
  {
    pid: "2",
    plabel: "P2",
  },
];

export function FilterPanel(props) {
  const [selectedItems, setSelectedItems] = React.useState([]);
  // const dictinctItems = [...new Set(Level1.map((x) => x.pid))];
  // console.log("selectedItems=", selectedItems);
  const dictinctItems = getDistinctItemsById(Level1);
  const str = JSON.stringify(dictinctItems);

  // dictinctItems = [
  //   { pid: "SelectAll", plabel: "Select All" },
  //   ...dictinctItems,
  // ];
  // console.log("dictinctItems=", str);
  const handleChange = (event) => {
    console.log("event.target.value=", event.target.value);
    // const {
    //   target: { value },
    // } = event;
    // console.log("selected Item=", value);
    setSelectedItems(event.target.value);
  };
  const str1 = JSON.stringify(selectedItems);
  console.log("selectedItems=", str1);
  return (
    <Box
      sx={{
        border: 2,
        mt: 2,
        p: 4,
        borderColor: "primary.main",
        borderRadius: 3,
        boxShadow: 1,
      }}
    >
      <Box sx={{ color: "text.secondary" }}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-checkbox">Tag</InputLabel>
          <Select
            multiple
            value={selectedItems}
            onChange={handleChange}
            input={<OutlinedInput plabel="Level 1" />}
            renderValue={(selected) =>
              selected && selected.map((item) => item.plabel).join(", ")
            }
            MenuProps={MenuProps}
          >
            {dictinctItems.map((item) => (
              <MenuItem key={item.pid + item.plabel} value={item}>
                {/* <Checkbox
                  checked={
                    selectedItems.findIndex((i) => i.pid === item.pid) > -1
                  }
                /> */}
                <ListItemText primary={item.plabel} />
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
    const i = dictinctItems.findIndex((x) => x.pid === item.pid);
    if (i <= -1) {
      const newItem = { pid: item.pid, plabel: item.plabel };
      // console.log(newItem);
      dictinctItems.push(newItem);
      // dictinctItems.push(item);
      // console.log("item=", item);
      // console.log("newItem=", newItem);
    }
  });
  return dictinctItems;
}
