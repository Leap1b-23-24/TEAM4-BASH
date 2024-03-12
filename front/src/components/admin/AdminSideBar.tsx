"use client";

export const AdminSideBar = () => {
  const data = [
    { icons: "menu.png", label: "Хяналтын самбар" },
    { icons: "bag.png", label: "Захиалга" },
    { icons: "lead.png", label: "Орлого" },
    { icons: "list.png", label: "Бүтээгдэхүүн" },
    { icons: "set.png", label: "Тохиргоо" },
  ];

  return (
    <div className="w-full h-full flex">
      <div className="bg-white h-full py-6 gap-2 flex flex-col">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 py-3 pr-12 pl-6 hover:bg-[#e6e6e8] cursor-pointer"
            >
              <img src={item.icons} width={22} className="py-1" />
              <p className="text-lg font-semibold pt-[2px] whitespace-nowrap">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
