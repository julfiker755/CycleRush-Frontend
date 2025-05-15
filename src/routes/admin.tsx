import { dashboardItem } from "@/components/common/dashboard/ordinary-com/sideber-items";
import DashboardLayout from "@/components/layout/dashboard";

const adminRoutes = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [...dashboardItem.routes],
  },
];

export default adminRoutes;
