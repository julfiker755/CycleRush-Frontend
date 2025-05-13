import Navbar from "../shared/navber/navber";
import Footer from "../shared/footer/Footer";
import BaseLayout from "./base";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <BaseLayout>
      <Navbar />
      <Outlet />
      <Footer />
    </BaseLayout>
  );
}
