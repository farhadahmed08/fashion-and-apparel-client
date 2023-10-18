import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import AuthProvider from "./pages/providers/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./pages/router/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
