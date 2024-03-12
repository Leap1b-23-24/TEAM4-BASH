import { AdminDashboard } from "../components/admin/AdminDashboard";
import { AdminSideBar } from "../components/admin/AdminSideBar";
import { AdminTable } from "../components/admin/AdminTable";
import { AdminTableGeneral } from "../components/admin/AdminTableGeneral";
import { Header } from "../components/layout/Header";

export default function Home() {
  return (
    <div className="w-full h-screen max-w-[1700px] m-auto">
      <AdminSideBar />
    </div>
  );
}
