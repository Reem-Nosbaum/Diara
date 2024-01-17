import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Home from "./pages/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
