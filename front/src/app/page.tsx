import { AdminHome } from "../components/home/AdminHome";
import { AdminHomeFooter } from "../components/layout/AdminHomeFooter";
import { AdminHomeHeader } from "../components/layout/AdminHomeHeader";

export default function Home() {
  return (
    <div className="w-full h-full max-w-[1700px] m-auto">
      <AdminHomeHeader />
      <AdminHome />
      <AdminHomeFooter />
    </div>
  );
}
