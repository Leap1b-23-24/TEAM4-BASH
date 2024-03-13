"use client";

import {
  ContentPasteRounded,
  GridViewRounded,
  ListAlt,
  Sell,
  Settings,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

export const AdminSideBar = () => {
  const data = [
    { icons: <GridViewRounded />, label: "Хяналтын самбар" },
    { icons: <ContentPasteRounded />, label: "Захиалга" },
    { icons: <Sell />, label: "Орлого" },
    { icons: <ListAlt />, label: "Бүтээгдэхүүн" },
    { icons: <Settings />, label: "Тохиргоо" },
  ];

  const router = useRouter();

  return (
    <div className="flex">
      <div className="bg-white h-full py-6 gap-2 flex flex-col">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 py-3 pr-12 pl-6 hover:bg-[#e6e6e8] cursor-pointer items-center"
              onClick={() => {
                if (item.label == "Хяналтын самбар") {
                  router.push("/dashboard/");
                } else if (item.label == "Захиалга") {
                  router.push("/dashboard/order");
                } else if (item.label == "Орлого") {
                  router.push("/dashboard/income");
                } else if (item.label == "Бүтээгдэхүүн") {
                  router.push("/dashboard/product");
                } else if (item.label == "Тохиргоо") {
                  router.push("/dashboard/settings");
                }
              }}
            >
              <div className="">{item.icons}</div>
              <p className="text-lg font-semibold whitespace-nowrap">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
