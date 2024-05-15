import {
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { HeaderData } from "../../staticData/staticData";

const Drawer = () => {
  const [top, setTop] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setTop(open);
  };

  return (
    <>
      <IconButton
        sx={{
          color: "inherit",
          display: { md: "none", xs: "block" },
          ml: "auto",
        }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={top}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>
          {HeaderData.map((e, i) => (
            <Link
              to={e.path}
              style={{ textDecoration: "none", color: "inherit" }}
              key={i}
            >
              <ListItem>
                <ListItemText primary={e.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
