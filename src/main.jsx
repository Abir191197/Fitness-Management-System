import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Root/Main';
import Trainer from './Components/Trainer/Trainer';
import Nutritionist from './Components/Nutritionist/Nutritionist';
import About from './Components/About/About';



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
        element:<Nutritionist></Nutritionist>
      },
      {
        path: "/#About",
        element:<About></About>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
