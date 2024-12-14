import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";
import MainLayout from "../Layouts/Mainlayout/Mainlayout";
import AllJobs from "../Layouts/AllJobs/AllJobs";
import AddJobs from "../Layouts/AddJobs/AddJobs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ApplyJob from "../Pages/ApplyJob/ApplyJob";
import MyJobList from "../Pages/MyJobList/MyJobList";
import MyPostedJobs from "../Layouts/MyPostedJobs/MyPostedJobs";
import JobDetails from "../Pages/JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addJobs",
        element: <AddJobs></AddJobs>,
      },
      {
        path:"/myPostedJobs",
        element:<MyPostedJobs></MyPostedJobs>
      },
      {
        path:"/jobDetails/:job_id",
        element:<JobDetails></JobDetails>,
        loader:({params})=>fetch(`http://localhost:5000/job-application/jobs/${params.job_id}`)
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allJobs/${params.id}`),
      },
      {
        path:"/applyJob/:id",
        element:<PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
      },
      {
        path:"/myJobList/:email",
        element:<MyJobList></MyJobList>,
        loader:({params})=>fetch(`http://localhost:5000/job-application/${params.email}`)
      }
    ],
  },
]);

export default router;
