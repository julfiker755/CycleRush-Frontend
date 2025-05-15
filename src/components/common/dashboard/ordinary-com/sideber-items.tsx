import Analytics from "@/components/view/admin/analytics";
import ManageOrders from "@/components/view/admin/mange-order";
import ManageProducts from "@/components/view/admin/mange-products";
import ManageUsers from "@/components/view/admin/mange-user";
import { DashboardProps, SidebarProps } from "@/types";
import {
  BarChart2,
  Users,
  PackageSearch,
  SquareChartGantt,
} from "lucide-react";

const dashBoardItemsData: DashboardProps[] = [
  {
    title: "Analytics",
    icon: <BarChart2 size={18} />,
    path: "analytics",
    component: <Analytics />,
  },
  {
    title: "Manage user",
    icon: <Users size={18} />,
    path: "manage-user",
    component: <ManageUsers />,
  },
  {
    title: "Manage Products",
    icon: <PackageSearch size={18} />,
    path: "manage-product",
    component: <ManageProducts />,
  },
  {
    title: "Manage Orders",
    icon: <SquareChartGantt size={18} />,
    path: "manage-order",
    component: <ManageOrders />,
  },
];

const routes = dashBoardItemsData.map((item) => ({
  path: item.path,
  element: item.component,
}));
const sidebarItems: SidebarProps[] = dashBoardItemsData.map((item) => ({
  title: item.title,
  icon: item.icon,
  path: item.path,
  section: item?.section,
}));

export const dashboardItem = { routes, sidebarItems };
