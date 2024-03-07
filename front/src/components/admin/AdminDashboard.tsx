import { AdminControlHead } from "./AdminControlHead";
import { AdminTableGeneral } from "./AdminTableGeneral";
import { OrderHead } from "../order/OrderHead";

export const AdminDashboard = () => {
  const data = [
    { icons: "menu.png", label: "Хяналтын самбар" },
    { icons: "bag.png", label: "Захиалга" },
    { icons: "lead.png", label: "Орлого" },
    { icons: "list.png", label: "Бүтээгдэхүүн" },
    { icons: "set.png", label: "Тохиргоо" },
  ];

  return (
    <div className="w-full h-full flex">
      <div className="bg-white w-[300px] pr-8 h-full pt-6 gap-4 flex flex-col ">
        {data.map((item, index) => {
          return (
            <div className="flex pl-6 gap-4 border-black py-3">
              <img src={item.icons} alt="" width={24} />
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          );
        })}
      </div>

      <div className="w-full bg-[#F7F7F8]">
        <AdminControlHead />
        <AdminTableGeneral />
        <OrderHead />
      </div>
    </div>
  );
};
