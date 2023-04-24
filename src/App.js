import React from "react";

import Header from "./components/Header/Header";
import Home from "./pages/Home";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="font-medium">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
