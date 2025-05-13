import { createBrowserRouter } from "react-router-dom";
import homeRoutes from "./home";
import NotFound from "@/components/shared/not-found";
import authRoutes from "./auth";
import adminRoutes from "./admin";

const routes = [
  ...homeRoutes,
  ...authRoutes,
  ...adminRoutes,
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);
export default router;
