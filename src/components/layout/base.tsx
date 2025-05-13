import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import BottomNavbar from "../common/dashboard/ordinary-com/BottomNavbar";
import { childrenProps } from "@/types";

export default function BaseLayout({ children }: childrenProps) {
  return (
    <>
      <ScrollToTop />
      <BottomNavbar />
      {children || <Outlet />}
    </>
  );
}
