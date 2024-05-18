import { Box, Button, Stack, Typography } from "@mui/material";
import About from "../About/About";
import Project from "../Projects/Project";
import DovImg from "../../assets/images/Developer2.png";
import ContactUs from "../ContactUs/ContactUs";
const Home = () => {
  
  return (
    <Stack spacing={2}>
              <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { sm: "row", xs: "column-reverse" },
          gap: 2,
        }}
      >
      <Stack
        spacing={1}
        sx={{
          width: { sm: "40%", xs: "100%" },
          alignItems: { sm: "flex-start", xs: "center" },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "40px", sm: "25px", xs: "23px" },
            color: "white",
          }}
          variant="h4"
        >
          I&apos;M{" "}
          <Typography
            component={"span"}
            sx={{
              fontWeight: 600,
              fontSize: { md: "50px", sm: "33px", xs: "31px" },
              color: "#82ccff",
            }}
          >
            Harsh Rastogi
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            color: "white",
            fontSize: { md: "35px", sm: "26px", xs: "20px" },
          }}
        >
          React JS Developer
        </Typography>
        <Button
          sx={{
            "& .css-msdqgl-MuiButtonBase-root-MuiButton-root": {
              border: "2px solid red !important",
            },
            fontWeight: 600,
            color: "#82ccff",
          }}
          variant="outlined"
        >
          Contact me
        </Button>
      </Stack>
      <Box
        sx={{
          background: `url(${DovImg})`,
          zIndex: 4,
          width: { sm: "50%", xs: "100%" },
          height: "611px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
        }}
      ></Box>
      </Stack>
      <About />
      <Project />
      <ContactUs/>
    </Stack>
  );
};

export default Home;
