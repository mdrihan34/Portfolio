import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Componets/Main";
// import Home from "../Pages/Home/Home";

// import Banner from "../Componets/Banner";
import Home from "../Pages/Home/Home";
import About from "../Componets/About";
import Dashboard from "../dashboard/Dashboard";
import PrivateDash from "../dashboard/PrivateDash";
import AddProject from "../dashboard/AddProject";
import Inbox from "../dashboard/Inbox";
import ViweProject from "../dashboard/ViweProject";
import DashHome from "../dashboard/DashHome";
import Resume from "../dashboard/Resume";
import Skills from "../Componets/Skills";
import Contact from "../Componets/Contact";
import Project from "../Project/Project";



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
            },
            {
              path: '/about',
              element: <About></About>
          },
          {
            path: '/skills',
            element: <Skills></Skills>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
    },
    {
      path: '/viweProjects',
      element: <Project></Project>
  }
        ]
      },
      {
        path : '/dashboard',
        element: <PrivateDash><Dashboard></Dashboard></PrivateDash>,
        children:[
          {
            path: '/dashboard',
            element: <DashHome></DashHome>
          },
          {
            path: '/dashboard/add-project',
            element:<AddProject></AddProject>
          },
          {
          path: '/dashboard/inbox',
          element: <Inbox></Inbox>
          },
          {
            path: '/dashboard/viweProject',
            element: <ViweProject></ViweProject>
          },
          {
            path: '/dashboard/resume',
            element: <Resume></Resume>
          }
        ]
      }
])
