import { createBrowserRouter } from "react-router-dom";

import { Home, Error, SearchParking, Authentication } from "src/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/search",
    element: <SearchParking />,
  },
  {
    path: "/authentication",
    element: <Authentication />,
  },
]);
