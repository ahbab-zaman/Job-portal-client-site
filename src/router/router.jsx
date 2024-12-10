import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import MainLayout from "../Layouts/Mainlayout/Mainlayout";
import AllJobs from "../Layouts/AllJobs/AllJobs";
import AddJobs from "../Layouts/AddJobs/AddJobs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router =  createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/allJobs",
            element:<AllJobs></AllJobs>
        },
        {
            path:"/addJobs",
            element:<AddJobs></AddJobs>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/login",
            element:<Login></Login>
        }
      ]
    },
  ]);

export default router;