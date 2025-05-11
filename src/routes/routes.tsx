import MainLayout from "@/components/layout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./auth.routes";
import AuthLayout from "@/components/layout/AuthLayout";
import { userRoutes } from "./user.routes";
import UserLayout from "@/components/layout/UserLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { dashboardRoutes } from "./dashboard.routes";
import ProtectedRoutes from "@/components/private_routes/protected-routes";
import ProductDetails from "@/pages/product-details/ProductDetails";
import Cart from "@/pages/base-pages/Cart";
import Checkout from "@/pages/base-pages/Checkout";
import OP_Success from "@/pages/base-pages/OrderSuccess/OP_Success";
import COD_Success from "@/pages/base-pages/OrderSuccess/COD_Success";
import OrderCancel from "@/pages/base-pages/OrderCancel";
import OrderFail from "@/pages/base-pages/OrderFail";
import OrderDetails from "@/pages/order-details/OrderDetails";
import NotFound from "@/components/shared/not-found";
import Home from "@/components/view/landing/home";
import Services from "@/components/view/landing/service";
import Contact from "@/components/view/landing/contact";
import Shop from "@/components/view/landing/shop";
import Wishlist from "@/components/view/landing/wishlist";

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
        path: "order-details/:id",
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
        path: "checkout/OP/success/:tranId",
        element: <OP_Success />,
      },
      {
        path: "checkout/OP/cancel",
        element: <OrderCancel />,
      },
      {
        path: "checkout/OP/fail",
        element: <OrderFail />,
      },
      {
        path: "checkout/COD/success/:id",
        element: <COD_Success />,
      },
      {
        path: "",
        element: (
          <ProtectedRoutes>
            <UserLayout />
          </ProtectedRoutes>
        ),
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
    element: (
      <ProtectedRoutes AdminRoutes={true}>
        <DashboardLayout />
      </ProtectedRoutes>
    ),
    errorElement: <NotFound />,
    children: dashboardRoutes,
  },
]);

export default router;
