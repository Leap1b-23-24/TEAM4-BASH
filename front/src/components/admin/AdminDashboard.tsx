"use client";

import { useRouter } from "next/navigation";
import { AdminControlHead } from "./AdminControlHead";
import { AdminTableGeneral } from "./AdminTableGeneral";

export const AdminDashboard = () => {
  const data = [
    { icons: "menu.png", label: "Хяналтын самбар" },
    { icons: "bag.png", label: "Захиалга" },
    { icons: "lead.png", label: "Орлого" },
    { icons: "list.png", label: "Бүтээгдэхүүн" },
    { icons: "set.png", label: "Тохиргоо" },
  ];

  const router = useRouter();

  return (
    <div className="w-full h-full flex">
      <div className="bg-white h-full py-6 gap-2 flex flex-col">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 py-3 pr-12 pl-6 hover:bg-[#e6e6e8]"
              onClick={() => {
                if (item.label == "Захиалга") {
                  router.push("/order");
                } else if (item.label == "Хяналтын самбар") {
                  router.push("/order");
                }
              }}
            >
              <img src={item.icons} alt="" width={22} className="py-1" />
              <p className="text-lg font-semibold pt-[2px]">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-[#F7F7F8] w-[84%]">
        <AdminControlHead />
        <AdminTableGeneral />
      </div>
    </div>
  );
};
