import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import Contractor from "./component/Contractor";
import Manager from "./component/Manager";
import Clerk from "./component/Clerk";
import Employees from "./component/Employees";
import Drivers from "./component/Drivers";
import Rigister from "./component/Rigister";
import LoginPage from "./component/loginPagr";
import ContractorDetails from "./component/ContractorDetails";
import ManagerDetails from "./component/ManagerDatails";
import ClerkDetails from "./component/ClerkDetails";
import EditUser from "./component/edite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rigister />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/App",
    element: <App />,

    children: [
      {
        path: "Contractor",
        element: <Contractor />,
      },
      {
        path: "contractorDetails/:id",
        element: <ContractorDetails />,
      },
      {
        path: "/App/user/:id",
        element: <EditUser />,
      },

      {
        path: "Manager",
        element: <Manager />,
      },
      {
        path: "ManagerDetails/:id",
        element: <ManagerDetails />,
      },
      {
        path: "Clerk",
        element: <Clerk />,
      },
      {
        path: "ClerkDetails/:id",
        element: <ClerkDetails />,
      },
      {
        path: "Employees",
        element: <Employees />,
      },

      {
        path: "Drivers",
        element: <Drivers />,
      },

      {
        index: true,
        element: <Contractor />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
