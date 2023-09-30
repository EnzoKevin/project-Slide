import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import './index.css';
import {Home, Jobs } from './App';
const router = createBrowserRouter ([
  { path: "/",
    element:<Home/>,
  },
  { path: "/about",
    element:<Home/>,
  },
  { path: "/services",
    element:<Home/>,
  },
  { path: "/projects",
    element:<Home/>,
  },
  { path: "/pages",
    element:<Home/>,
  },
  {
    path: "/blog",
    element: <Jobs/>,
  },
  {
    path: "/contacts",
    element: <Jobs/>,
  },
      ])



createRoot(document.getElementById("root")).render (
  
  <RouterProvider router={router}/>
  )