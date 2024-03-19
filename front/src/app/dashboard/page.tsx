import { AdminControlHead } from "@/src/components/admin/AdminControlHead";
import { AdminTableGeneral } from "@/src/components/admin/AdminTableGeneral";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#F7F7F8] text-[black]">
      <AdminControlHead />
      <AdminTableGeneral />
    </div>
  );
}
