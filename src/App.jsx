import { Box } from "@mui/material"
// import Header from "./components/HeaderCom/Header"
import NavBar from "./components/HeaderCom/NavBar"

const App = () => {
  return (
<Box sx={{width:'100%',height:'100vh',overflowX:'hidden',overflowY:'scroll'}} >
  {/* <Header/> */}
  <NavBar/>
  {/* hello */}
</Box>
  )
}

export default App
