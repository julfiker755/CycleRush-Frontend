import ForgotPassword from "@/components/view/auth/forgot-password";
import Login from "@/components/view/auth/login";
import ResetPassword from "@/components/view/auth/reset-password";
import SignUp from "@/components/view/auth/sign-up";

export const authRoutes = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "sign-up",
    element: <SignUp />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
];
