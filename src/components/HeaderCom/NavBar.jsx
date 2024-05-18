import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import {  Link, NavLink } from "react-router-dom";
import { HeaderData } from "../../staticData/staticData";
import Drawer from "./Drawer";

const NavBar = () => {
  return (
    <AppBar sx={{bgcolor:'rgb(0 0 0 / 83%)'
    }} >
      <Toolbar>
        <Link style={{textDecoration:'none',color:'inherit'}}>
        <Typography sx={{fontWeight:600}} variant="h6">
            My Portfolio
        </Typography>
        </Link>
        <List
          sx={{ display: { md: "flex", xs: "none" }, ml: "auto", gap: "20px",alignItems:"center" }}
        >
          {HeaderData.map((e, i) => (
            <NavLink
              to={e.path}
              style={({isActive})=>{return ({ textDecoration: "none", color: isActive?'#a6e8e5':'inherit' })}}
              key={i}
            >
              <ListItem>
                <ListItemText primary={e.name} />
              </ListItem>
            </NavLink>
          ))}
        
      
        </List>
        <Drawer />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
