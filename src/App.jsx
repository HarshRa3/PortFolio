import { Box, Toolbar } from "@mui/material";
// import Header from "./components/HeaderCom/Header"
import NavBar from "./components/HeaderCom/NavBar";
import { Outlet } from "react-router-dom";
// import BackGImg from "./assets/images/BackgroundImg.jpg";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <
      // sx={{
      //   width: "100%",
      //   // height: "100vh",
      //   // overflowX: "hidden",
      //   // overflowY: "auto",
       
      // }}
    >
      <NavBar />
      <Toolbar />
      <Box p={"10px"}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default App;
