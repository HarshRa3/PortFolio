import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Project from "../pages/Projects/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "about_us", element: <About /> },
      { path: "contact_us", element: <ContactUs /> },
      { path: "projects", element: <Project /> },
    ],
  },
]);
export default router;
