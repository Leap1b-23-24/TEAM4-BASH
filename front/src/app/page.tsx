import { AdminDashboard } from "../components/admin/AdminDashboard";
import { Header } from "../components/layout/Header";

export default function Home() {
  return (
    <div className="w-full h-screen max-w-[1700px] m-auto">
      <AdminDashboard />
    </div>
  );
}
