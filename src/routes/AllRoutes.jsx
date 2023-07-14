import Login from "../pages/auth";
import Dashboard from "../pages/dashboard";
import Network from "../pages/network";
import Server from "../pages/server";

const AllRoutes = [
  {
    name: "Login",
    path: "/",
    component: <Login />,
    private: false,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: <Dashboard />,
    private: true,
  },
  {
    name: "Server",
    path: "/server",
    component: <Server />,
    private: true,
  },
  {
    name: "Network",
    path: "/network",
    component: <Network />,
    private: true,
  },
];

export default AllRoutes;
