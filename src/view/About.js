import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Box from "@mui/material/Box";
import React from "react";
import { CardExample } from "../Component/CardExample";
import { FilterPanel } from "../Component/FilterPanel";
import { MuiMultiSelect } from "../Component/FilterPanel2";

export default function About() {
  return (
    <>
      <CardExample />
      <FilterPanel />
      <MuiMultiSelect />
    </>
  );
}
