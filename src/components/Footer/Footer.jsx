import { Box, List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from '@mui/icons-material/Facebook';
import ScrollToTop from "../scrollToTop";
const Footer = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "rgb(0 0 0 / 83%)" }}>
      <List
        sx={{
            width:'100%',
          display:  "flex",
          alignItems: "center",
          color: "white",
          justifyContent: "center",
        }}
      >
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
          to={"https://github.com/HarshRa3/"}
          target="blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem>
            <GitHubIcon />
          </ListItem>
        </Link>
        <Link
          to={"https://www.facebook.com/harshrasrogi.harsh"}
          target="blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItem>
            <FacebookIcon />
          </ListItem>
        </Link>
      </List>
      <ScrollToTop />
    </Box>
  );
};

export default Footer;
