import BottomNavbar from "../modules/bottom-navbar/BottomNavbar";
import Footer from "../shared/footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Navbar from "../shared/navber/navber";

export default function MainLayout() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <BottomNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}
