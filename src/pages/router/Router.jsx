import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../errorpage/ErrorPage";
import Home from "../home/Home";
import Register from "../register/Register";
import Login from "../login/Login";
import AddProduct from "../addProduct/AddProduct";
import MyCart from "../myCart/MyCart";
import UpdateProduct from "../updateProduct/UpdateProduct";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:()=>fetch('/data.json')
        
      },
      
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/addProduct",
        element: <AddProduct/>,
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct/>,
      },
      {
        path: "/myCart",
        element: <MyCart/>,
      },
     
      
    ],
  },
]);

export default router
