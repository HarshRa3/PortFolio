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
    console.log(event.type,'sadsad');
    // if (
    //   event &&
    //   event.type === "keydown" &&
    //   (event.key === "Tab" || event.key === "Shift")
    // ) {
    //   return;
    // }
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
      sx={{"& .css-1nvnyqx-MuiPaper-root-MuiDrawer-paper":{
        background:'rgb(0 0 0 / 83%)'
      }}}
        anchor="top"
        open={top}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <List>
          {HeaderData.map((e, i) => (
            <Link
            onClick={toggleDrawer(false)}
              to={e.path}
              style={{ textDecoration: "none", color: "#fff" }}
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
