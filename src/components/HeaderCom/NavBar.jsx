import { AppBar, List, ListItem, ListItemText, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { HeaderData } from "../../staticData/staticData";
import Drawer from "./Drawer";
const NavBar = () => {
      
  return (
    <AppBar  >
        <Toolbar>
            <List sx={{display:{md:'flex',xs:'none'},ml:'auto',gap:'40px'}}>
            {HeaderData.map((e, i) => (
            <Link to={e.path} style={{textDecoration:'none',color:'inherit'}} key={i}>
              <ListItem  >
                  <ListItemText primary={e.name} />
                </ListItem>
            </Link>
          ))}  
            </List>
            <Drawer/>
        </Toolbar>
    </AppBar>
  );
};

export default NavBar;
