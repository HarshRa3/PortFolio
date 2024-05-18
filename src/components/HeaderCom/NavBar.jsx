import {
  AppBar,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { HeaderData } from "../../staticData/staticData";
import Drawer from "./Drawer";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from '@mui/icons-material/GitHub';
const NavBar = () => {
  return (
    <AppBar sx={{bgcolor:'rgb(0 0 0 / 83%)'
    }} >
      <Toolbar>
        <Typography variant="h6">
            My Portfolio
        </Typography>
        <List
          sx={{ display: { md: "flex", xs: "none" }, ml: "auto", gap: "20px",alignItems:"center" }}
        >
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
        {/* <List  sx={{ display: { md: "flex", xs: "none" },alignItems:'center' }}>
        <Link
            to={
              "https://www.linkedin.com/in/harsh-rastogi-224a03214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            }
            target="blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem>
                <LinkedInIcon />
            </ListItem>
          </Link>
          <Link
            to={
              "https://github.com/HarshRa3/"
            }
            target="blank"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItem>
                <GitHubIcon/>
            </ListItem>
          </Link>
        </List> */}
        <Drawer />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
