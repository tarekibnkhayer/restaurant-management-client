import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OurShop from "../pages/OurShop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/dashboard/dashboard";
import MyCart from "../forDashBoard/MyCart";
import AllUsers from "../components/forAdminDashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../components/forAdminDashboard/AddItems";
import ManageItems from "../components/forAdminDashboard/ManageItems";
import UpdateItem from "../components/forAdminDashboard/UpdateItem";
import Payment from "../forDashBoard/Payment";


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
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/myCart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
          path: '/dashboard/payment',
          element: <PrivateRoute><Payment></Payment></PrivateRoute>
        },
        // admin dashboard:
        {
          path: '/dashboard/allUsers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path: '/dashboard/addItems',
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: '/dashboard/manageItems',
          element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
          path: '/dashboard/updateItems/:id',
          element: <AdminRoute><UpdateItem></UpdateItem>,</AdminRoute>,
          loader:({params}) => fetch(`http://localhost:2626/menu/${params.id}`)
        }
      ]
    }
  ]);