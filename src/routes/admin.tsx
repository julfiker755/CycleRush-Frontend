import DashboardLayout from "@/components/layout/dashboard";
import { dashboardItems } from "@/utils/sidebar-item-and-routes-generator";

const adminRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [...dashboardItems.routes],
  },
];

export default adminRoutes;
