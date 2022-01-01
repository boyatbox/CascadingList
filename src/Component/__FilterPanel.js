import React, { useMemo, useState } from "react";
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

const masterData = [
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

const portfolioData = [
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
    id: "3",
    label: "P3",
  },
];

export function FilterPanel(props) {
  const portfolios = useMemo(() => getDistinctItemsById(portfolioData), []);

  //selected state
  const [selectedPortfolio, setSelectedPortfolio] = useState([]);
  const [selectedValuestream, setSelectedValuestream] = useState([]);

  //option state
  const [valuestreams, setValuestreams] = useState([]);

  const handlePortfolioChange = (event) => {
    setSelectedPortfolio(event.target.value);
    //get corresponding valustream
    console.log("event.target.value", event.target.value);
    const selectedPortfolio = event.target.value;
    if (selectedPortfolio && Array.isArray(selectedPortfolio)) {
      const filteredValuestream = filterItems(
        masterData,
        event.target.value,
        "pid"
      );
      const updatedKeys = filteredValuestream.map((item) => {
        return { id: item.vid, label: item.vlabel };
      });
      const uniqueItems = getDistinctItemsById(updatedKeys);
      setValuestreams(uniqueItems);
    }
  };
  const handleValuestreamChange = (event) => {
    setSelectedValuestream(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", border: 2, borderColor: "primary.main" }}>
      <Portfolio
        selectedItems={selectedPortfolio}
        handleChange={handlePortfolioChange}
        dictinctItems={portfolios}
      />
      <Valuestream
        selectedItems={selectedValuestream}
        handleChange={handleValuestreamChange}
        dictinctItems={valuestreams}
      />
    </Box>
  );
}

function Portfolio({ selectedItems, handleChange, dictinctItems }) {
  return (
    <Box sx={{ color: "text.secondary" }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox">Portfolio</InputLabel>
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
  );
}

function Valuestream({ selectedItems, handleChange, dictinctItems }) {
  return (
    <Box sx={{ color: "text.secondary" }}>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox">Valuestream</InputLabel>
        <Select
          multiple
          value={selectedItems}
          onChange={handleChange}
          input={<OutlinedInput label="Select" />}
          renderValue={(selected) => {
            // return "test";
            console.log("selected vs=", selected);
            return selected && selected.map((item) => item.label).join(", ");
          }}
          MenuProps={MenuProps}
        >
          {dictinctItems.map((item) => (
            <MenuItem key={item.id + item.id} value={item}>
              <ListItemText primary={item.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

function filterItems(mainArray, filterArray, basedOn) {
  const filteredArray = mainArray.filter((m) => {
    const matchedItem = filterArray.some((f) => {
      return f.id === m[basedOn];
    });
    return matchedItem;
  });
  return filteredArray;
}

function getDistinctItemsById(originalArray) {
  console.log("*getDistinctItemsById");
  let dictinctItems = [];
  originalArray.forEach(function (item) {
    const i = dictinctItems.findIndex((x) => x.id === item.id);
    if (i <= -1) {
      dictinctItems.push(item); //this works
      // dictinctItems.push({ id: item.id, label: item.label }); //this doesn't without memo
    }
  });
  return dictinctItems;
}
