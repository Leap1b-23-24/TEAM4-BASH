"use client";
import { AdminControlHead } from "@/src/components/admin/AdminControlHead";
import { AdminTableGeneral } from "@/src/components/admin/AdminTableGeneral";
import { useAuth } from "@/src/components/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  // if (!user) {
  //   router.push("/auto/login");
  //   return <div>No user</div>;
  // }

  return (
    <div className="w-full h-full bg-[#F7F7F8]">
      <AdminControlHead />
      <AdminTableGeneral />
    </div>
  );
}
