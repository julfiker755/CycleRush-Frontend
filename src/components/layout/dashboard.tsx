import { Outlet } from "react-router-dom";
import Sidebar from "../common/dashboard/ordinary-com/sideber";
import BaseLayout from "./base";

export default function DashboardLayout() {
  return (
    <BaseLayout>
      <div className="flex">
        <Sidebar />
        <div className="w-full min-h-screen py-8 px-4">
          <Outlet />
        </div>
      </div>
    </BaseLayout>
  );
}
