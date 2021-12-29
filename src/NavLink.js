import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NavLink } from "react-router-dom";
import About from "./view/About";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
const links = [
  { label: "Album", path: "album", icon: <DashboardIcon /> },
  { label: "Pricing", path: "pricing", icon: <BarChartIcon /> },
  { label: "About", path: "about", icon: <BeachAccessIcon /> },
];

export function NavLinks() {
  return (
    <div>
      {links.map((v) => {
        return (
          <NavLink
            to={v.path}
            style={({ isActive }) =>
              isActive
                ? {
                    textDecoration: "none",
                    color: "blue",
                  }
                : {
                    textDecoration: "none",
                    color: "gray",
                  }
            }
          >
            <ListItem button>
              <ListItemIcon>{v.icon}</ListItemIcon>
              <ListItemText primary={v.label} />
            </ListItem>
          </NavLink>
        );
      })}
    </div>
  );
}
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
