import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Layout/Home/Home";
import SingIn from "../Layout/SingIg/SingIn";
import Root from "./Root";
import SingUp from "../Layout/SingUp/SingUp";
import Booking from "../Layout/Booking/Booking";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path: '/singin',
          element:<SingIn></SingIn>
        },
        {
          path: '/singUp',
          element:<SingUp></SingUp>
        },
        {
          path: `/Booking/:id`,
          element: <Booking></Booking>,
          loader:({params}) => fetch(`http://localhost:5000/serves/${params.id}`)
        }
      ]
    },
  ]);

export default router;