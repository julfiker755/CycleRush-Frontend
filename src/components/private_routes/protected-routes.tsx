import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({
  children,
  AdminRoutes,
}: {
  children: ReactNode;
  AdminRoutes?: true;
}) {
  const { user, token } = useAppSelector((state) => state.auth);

  if (!token) {
    return <Navigate to={"/auth/login"} replace={true} />;
  }

  if (AdminRoutes) {
    if (user?.role !== "admin") {
      return <Navigate to={"/auth/login"} replace={true} />;
    }
  }
  return children;
}
