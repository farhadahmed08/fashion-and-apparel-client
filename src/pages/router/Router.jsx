import { createBrowserRouter } from "react-router-dom";
import Root from "../../layout/Root";
import ErrorPage from "../errorpage/ErrorPage";
import Home from "../home/Home";
import Register from "../register/Register";
import Login from "../login/Login";
import AddProduct from "../addProduct/AddProduct";

import UpdateProduct from "../updateProduct/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";
import BrandCard from "../../components/BrandCard";
import CardDetails from "../../components/CardDetails";
import MyCart from "../myCart/MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoutes>
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/brand/:name",
        loader:({params})=>fetch(`http://localhost:5000/products/brand/${params.name}`),
        element: (
          <PrivateRoutes>
            <BrandCard></BrandCard>
          </PrivateRoutes>
        ),
      },
      {
        path: "/products/:id",
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivateRoutes>
            <CardDetails></CardDetails>
          </PrivateRoutes>
        ),
      },

      {
        path: "/updateProduct",
        element: (
          <PrivateRoutes>
            <UpdateProduct />
          </PrivateRoutes>
        ),
      },

      {
        path: "/myCart/:id",
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
        element: (
          <PrivateRoutes>
            <MyCart/>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
