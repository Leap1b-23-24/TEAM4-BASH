"use client";

import {
  ContentPasteRounded,
  GridViewRounded,
  ListAlt,
  Sell,
  Settings,
} from "@mui/icons-material";
import { usePathname, useRouter } from "next/navigation";

export const AdminSideBar = () => {
  const data = [
    {
      icons: <GridViewRounded />,
      label: "Хяналтын самбар",
      pathname: "/dashboard",
    },
    {
      icons: <ContentPasteRounded />,
      label: "Захиалга",
      pathname: "/dashboard/order",
    },
    { icons: <Sell />, label: "Орлого", pathname: "/dashboard/income" },
    {
      icons: <ListAlt />,
      label: "Бүтээгдэхүүн",
      pathname: "/dashboard/product",
    },
    { icons: <Settings />, label: "Тохиргоо", pathname: "/dashboard/settings" },
  ];

  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex">
      <div className="bg-white h-full py-6 gap-2 flex flex-col">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex gap-4 py-3 pr-8 pl-6 cursor-pointer items-center"
              onClick={() => {
                router.push(item.pathname);
              }}
              style={{
                backgroundColor:
                  pathname == item.pathname ? "#e6e6e8" : "inherit",
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
