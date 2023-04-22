import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import DelegationProgram from "../pages/delegationProgram/DelegationProgram";
import Tour from "../pages/tour/Tour";
import Stake from "../pages/stake/Stake";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/delegation-program",
        element: <DelegationProgram />,
      },
      {
        path: "/stake-pools",
        element: <Stake />,
      },
      {
        path: "/tour-de-sun",
        element: <Tour />,
      },
    ],
  },
]);
