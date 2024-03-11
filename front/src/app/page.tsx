import { AdminDashboard } from "../components/admin/AdminDashboard";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="w-full h-screen max-w-[1700px] m-auto">
      <AdminDashboard />
      <Footer></Footer>
    </div>
  );
}
