import Home from "@/components/view/landing/home";
import Services from "@/components/view/landing/service";
import Contact from "@/components/view/landing/contact";
import Shop from "@/components/view/landing/shop";
import Wishlist from "@/components/view/landing/wishlist";
import Checkout from "@/components/view/landing/checkout";
import ProductDetails from "@/components/view/landing/shop-details";
import Cart from "@/components/view/landing/cart";
import OrderDetails from "@/components/view/user/order-details";
import MainLayout from "@/components/layout/main";

const homeRoutes = [
  {
    path: "/",
    element: <MainLayout />,
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
    ],
  },
];

export default homeRoutes;
