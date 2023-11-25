import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, parsePath, RouterProvider } from "react-router-dom";
import Main from './Components/Root/Main';
import Trainer from './Components/Trainer/Trainer';
import Nutritionist from './Components/Nutritionist/Nutritionist';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';
import PrivateRoute from './Components/PrivateROute/PrivateRoute';
import Diet from './Components/Customers/Diet/Diet';
import WorkOut from './Components/Customers/WorkOut/WorkOut';
import Overview from './Components/Customers/Overview/Overview';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/#Trainer",
        element: <Trainer></Trainer>,
      },
      {
        path: "/#Nutritionist",
        element: <Nutritionist></Nutritionist>,
      },
      {
        path: "/#About",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/Classes",
    element: <Classes></Classes>,

    children: [
      {
        path: "/Classes/Diet",
        element: <Diet></Diet>,
      },
      {
        path: "/Classes/WorkOut",
        element: <WorkOut></WorkOut>,
      },
      {
        path: "/Classes/Overview",
        element:<Overview></Overview>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
