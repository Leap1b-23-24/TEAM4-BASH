import { AdminControlHead } from "./AdminControlHead";
import { AdminSideBar } from "./AdminSideBar";
import { AdminTableGeneral } from "./AdminTableGeneral";

export const ControlHead = () => {
  return (
    <div className="w-full h-full flex">
      <AdminSideBar />

      <div className="w-full h-full bg-[#F7F7F8]">
        <AdminControlHead />
        <AdminTableGeneral />
      </div>
    </div>
  );
};
