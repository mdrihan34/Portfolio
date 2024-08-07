import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Componets/Main";
// import Home from "../Pages/Home/Home";

// import Banner from "../Componets/Banner";
import Home from "../Pages/Home/Home";
import About from "../Componets/About";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
      },
])
