import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Home from "../Layout/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        // {
        //   path: '/',
        //   element:
        // }
      ]
    },
  ]);

export default router;