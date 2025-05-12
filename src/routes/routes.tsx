import MainLayout from "@/components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./auth.routes";
import AuthLayout from "@/components/layout/AuthLayout";
import { userRoutes } from "./user.routes";
import UserLayout from "@/components/layout/UserLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { dashboardRoutes } from "./dashboard.routes";
// my
import NotFound from "@/components/shared/not-found";
import Home from "@/components/view/landing/home";
import Services from "@/components/view/landing/service";
import Contact from "@/components/view/landing/contact";
import Shop from "@/components/view/landing/shop";
import Wishlist from "@/components/view/landing/wishlist";
import Checkout from "@/components/view/landing/checkout";
import ProductDetails from "@/components/view/landing/shop-details";
import Cart from "@/components/view/landing/cart";
import OrderDetails from "@/components/view/user/order-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/order-details/:id",
        element: <OrderDetails />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "",
        element: <UserLayout />,
        children: userRoutes,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: authRoutes,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: dashboardRoutes,
  },
]);

export default router;
