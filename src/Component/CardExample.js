import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Box from "@mui/material/Box";
import React from "react";

export function CardExample(props) {
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          maxWidth: 300,
          ":hover": {
            boxShadow: 3,
          },
          border: 2,
          borderColor: "primary.main",
        }}
      >
        <Box sx={{ color: "text.secondary" }}>Sessions</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium" }}>
          98.3 K
        </Box>
        <Box
          component={TrendingUpIcon}
          sx={{ color: "success.dark", fontSize: 16, verticalAlign: "sub" }}
        />
        <Box
          sx={{
            color: "success.dark",
            display: "inline",
            fontWeight: "medium",
            mx: 0.5,
          }}
        >
          18.77%
        </Box>
        <Box sx={{ color: "text.secondary", display: "inline", fontSize: 12 }}>
          vs. last week
        </Box>
      </Box>
    </>
  );
}
