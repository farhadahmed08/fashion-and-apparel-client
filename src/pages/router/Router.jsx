import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../errorpage/ErrorPage";
import Home from "../home/Home";
import Register from "../register/Register";
import Login from "../login/Login";
import AddProduct from "../addProduct/AddProduct";
import MyCart from "../myCart/MyCart";
import UpdateProduct from "../updateProduct/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";
import BrandCard from "../brandcard/BrandCard";
import ProductDetails from "../productdetails/ProductDetails";





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
        path: "/fashionItem/:id",
        element: <BrandCard/>,
        loader:()=>('http://localhost:5000/products')
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
        element: <PrivateRoutes><AddProduct/></PrivateRoutes>,
      },
      {
        path: "/productDetails",
        element: <PrivateRoutes><ProductDetails/></PrivateRoutes>,
       
      },
      {
        path: "/updateProduct",
        element: <PrivateRoutes><UpdateProduct/></PrivateRoutes>,
      },
      {
        path: "/myCart",
        element: <PrivateRoutes><MyCart/></PrivateRoutes>,
      },
     
      
    ],
  },
]);

export default router
