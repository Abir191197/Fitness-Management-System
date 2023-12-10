import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Root/Main';
import Trainer from './Components/Trainer/Trainer';
import Nutritionist from './Components/Nutritionist/Nutritionist';
import About from './Components/About/About';
import Classes from './Components/Classes/Classes';

import Diet from './Components/Customers/Diet/Diet';
import WorkOut from './Components/Customers/WorkOut/WorkOut';
import Overview from './Components/Customers/Overview/Overview';
import Blog from './Components/Customers/Blog/Blog';
import ExerciseList from './Components/Customers/ExerciseList/ExerciseList';
import Report from './Components/Customers/Report/Report';
import FoodList from './Components/Customers/FoodList/FoodList';
import Admin from './Components/Root/Admin';
import AddBlog from './Components/Admin/AddBlog/AddBlog';
import DeleteBlog from './Components/Admin/Blog/DeleteBlog/DeleteBlog';
import NutritionAnalysis from './Components/Customers/Nutrition Analysis/NutritionAnalysis';
import Root_Nutritionist from "./Components/Nutritionist_Panel/Root_Nutritionist";
import Guideline from './Components/Nutritionist_Panel/Guideline/Guideline';

import SingleUserGuideline from './Components/Nutritionist_Panel/SingleUserGuideline/SingleUserGuideline';
import Inbox from './Components/Customers/Inbox/Inbox';
import UpdateBlog from './Components/Admin/Blog/UpdateBlog/UpdateBlog';
import Login from './LoginAll/Login';
import SignUp from './LoginAll/SignUp';
import AuthProvider from './Providers/AuthProvider';
import PrivateRoute from './Providers/PrivateRoute';
import Root_Trainer from './Components/Trainer_Panel/Root_Trainer';
import Exericse_Data_Customers from './Components/Trainer_Panel/ExericseData_GET_From_Customer/Exericse_Data_Customers';
import TestAPI from './Components/Trainer_Panel/TextAPI';
import Trainer_SingleUserGuideline from './Components/Trainer_Panel/SingleUserGuideline/Trainer_SingleUserGuideline';
import ExerciseListProvideTrainer from './Components/Customers/Inbox/ExerciseGuidellineTrainer/ExerciseListProvideTrainer';
import ExerciseVideoAPI from './Components/Trainer_Panel/ExericseData_GET_From_Customer/ExerciseVideoAPI';





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
    path: "/Login",
    element: <Login></Login>,
  },

  {
    path: "/SignUp",
    element: <SignUp></SignUp>,
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
        element: (
          <PrivateRoute>
            <Overview></Overview>
          </PrivateRoute>
        ),
      },
      {
        path: "/Classes/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Classes/ExerciseList",
        element: <ExerciseList></ExerciseList>,
      },
      {
        path: "/Classes/Report",
        element: <Report></Report>,
      },
      {
        path: "/Classes/Exercise",
        element: <ExerciseList></ExerciseList>,
      },
      {
        path: "/Classes/Food",
        element: <FoodList></FoodList>,
      },
      {
        path: "/Classes/Nutrition Analysis",
        element: <NutritionAnalysis></NutritionAnalysis>,
      },
      {
        path: "/Classes/Inbox",
        element: <Inbox></Inbox>,
      },
      {
        path: "/Classes/ExerciseListProvideTrainer",
    element:<ExerciseListProvideTrainer></ExerciseListProvideTrainer>  },

      {
        path: "/Classes/ExerciseVideo",
        element:<ExerciseVideoAPI></ExerciseVideoAPI>

      },
    ],
  },

  {
    path: "/Admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "/Admin/AddBlog",
        element: <AddBlog></AddBlog>,
      },
      {
        path: "/Admin/DeleteBlog",
        element: <DeleteBlog></DeleteBlog>,
      },
      {
        path: "/Admin/UpdateBlog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/Blog/${params.id}`),
      },
    ],
  },

  {
    path: "Nutritionist_Panel",
    element: <Root_Nutritionist></Root_Nutritionist>,
    children: [
      {
        path: "/Nutritionist_Panel/GuideLine",
        element: <Guideline></Guideline>,
      },

      {
        path: "/Nutritionist_Panel/SingleUserGuideline",
        element: <SingleUserGuideline></SingleUserGuideline>,
      },
    ],
  },
  {
    path: "/Trainer",
    element: <Root_Trainer></Root_Trainer>,
    children: [
      {
        path: "/Trainer/ExerciseData",
        element: <Exericse_Data_Customers></Exericse_Data_Customers>,
      },
      {
        path: "/Trainer/SingleGuideLine",
        element: <Trainer_SingleUserGuideline></Trainer_SingleUserGuideline>,
      },
    ],
  },
  {
    path: "testAPi",
    element: <TestAPI></TestAPI>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
