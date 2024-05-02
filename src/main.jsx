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
import AddCategory from "./pages/AddCategory.jsx";
import CategoryWise from "./pages/CategoryWise.jsx";
import Payment from "./pages/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://crafted-reflections-server.vercel.app/crafts"),
      },

      {
        path: "/allProducts",
        element: <AllProducts />,
        loader: () =>
          fetch("https://crafted-reflections-server.vercel.app/crafts"),
      },

      {
        path: "/myItems",
        element: (
          <PrivateRoute>
            <MyItems />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://crafted-reflections-server.vercel.app/crafts"),
      },

      {
        path: "/crafts/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crafted-reflections-server.vercel.app/crafts/${params.id}`
          ),
      },

      {
        path: "/updateItem/:id",
        element: (
          <PrivateRoute>
            <UpdateCraft />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://crafted-reflections-server.vercel.app/crafts/${params.id}`
          ),
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

      {
        path: "/addCategory",
        element: <AddCategory />,
      },
      {
        path: "/category/:selectedCategory",
        element: <CategoryWise />,
        loader: () =>
          fetch("https://crafted-reflections-server.vercel.app/crafts"),
      },
      {
        path: "/payment",
        element: <Payment />,
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
