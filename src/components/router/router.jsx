import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../error/Error";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import DelegationProgram from "../pages/delegationProgram/DelegationProgram";
import Tour from "../pages/tour/Tour";
import Stake from "../pages/stake/Stake";
import ServerProgramm from "../pages/serverProgram/ServerProgramm";
import Analytics from "../pages/analytics/Analytics";
import Faq from "../pages/Faq/Faq";

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
        path: "/server-program",
        element: <ServerProgramm />,
      },
      {
        path: "/stake-pools",
        element: <Stake />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/tour-de-sun",
        element: <Tour />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);
