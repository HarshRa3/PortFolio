import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink } from "react-router-dom";
import { HeaderData } from "../../staticData/staticData";
import CloseIcon from "@mui/icons-material/Close";
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
        sx={{
          "& .css-1nvnyqx-MuiPaper-root-MuiDrawer-paper": {
            background: "rgb(0 0 0 / 83%) !important",
          },
          
        }}
        anchor="top"
        open={top}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Stack
          sx={{
            color: "white",
            alignItems: "center",
            justifyContent: "space-between",
            p: "10px",
          }}
          direction={"row"}
        >
       <Link style={{textDecoration:'none',color:'white'}}>
        <Typography sx={{fontWeight:600}} variant="h6">
            My Portfolio
        </Typography>
        </Link>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Stack>
        <List>
          {HeaderData.map((e, i) => (
            <NavLink
              onClick={toggleDrawer(false)}
              to={e.path}
              style={({isActive})=>{return ({ textDecoration: "none", color: isActive?'#a6e8e5':'white' })}}
              key={i}
            >
              <ListItem>
                <ListItemText primary={e.name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
