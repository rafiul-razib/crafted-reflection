import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import AddCraft from "./pages/AddCraft.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import CraftDetails from "./pages/CraftDetails.jsx";
import MyItems from "./pages/MyItems.jsx";
import UpdateCraft from "./pages/UpdateCraft.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:3000/crafts"),
      },

      {
        path: "/allProducts",
        element: <AllProducts />,
        loader: () => fetch("http://localhost:3000/crafts"),
      },

      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3000/crafts"),
      },

      {
        path: "/crafts/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/crafts/${params.id}`),
      },

      {
        path: "/updateItem/:id",
        element: <UpdateCraft />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/crafts/${params.id}`),
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
