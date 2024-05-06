import { useState } from "react";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ModalInput from "./components/ModalInput/ModalInput";
import SearchingBooking from "./components/SearchingBookingPage/SearchingBookingPage";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

// REACT ROUTER
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: <SearchingBooking />,
  },
  {
    path: "/authorization",
    element: <ModalInput />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
