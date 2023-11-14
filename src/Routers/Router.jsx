import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./PrivateRoute";


export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/ourMenu',
          element: <PrivateRoute><OurMenu></OurMenu></PrivateRoute>
        },
        {
          path: '/ourShop/:category',
          element: <OurShop></OurShop>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path:  '/register',
      element: <Register></Register>
    }
  ]);