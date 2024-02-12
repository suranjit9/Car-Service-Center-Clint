import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Layout/Home/Home";
import SingIn from "../Layout/SingIg/SingIn";
import Root from "./Root";
import SingUp from "../Layout/SingUp/SingUp";


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
        }
      ]
    },
  ]);

export default router;