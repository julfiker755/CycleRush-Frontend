import MyOrders from "@/components/view/user/order";
import Profile from "@/components/view/user/profile";

export const userRoutes = [
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "my-orders",
    element: <MyOrders />,
  },
];
