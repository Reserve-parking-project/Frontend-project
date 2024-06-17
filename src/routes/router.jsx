import { createBrowserRouter } from "react-router-dom";

import { Home, Error, SearchParking, Authorization } from "../pages/index";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchParking />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
]);
