"use client";

import {
  AttachMoney,
  CalendarToday,
  CategoryOutlined,
  KeyboardArrowDownOutlined,
  Search,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ProductTable from "./ProductTable";
import { useProduct } from "../providers/ProductProvider";
import { ProductHead } from "./ProductHead";

export const DashboardProduct = () => {
  const router = useRouter();
  const { productList } = useProduct();

  return (
    <div className="w-full h-full bg-[#F7F7F8]">
      <ProductHead />

      <div className="p-6 flex flex-col gap-6">
        <button
          className="py-3 rounded-xl w-[280px] text-[16px] text-white bg-black"
          onClick={() => {
            router.push("/dashboard/product/addpro");
          }}
        >
          + Бүтээгдэхүүн нэмэх
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <div className="relative">
                <CategoryOutlined className="absolute top-2 left-2" />
                <div className="">
                  <select className="w-[145px] h-10 pl-9 rounded-lg text-[#3F4145] border">
                    <option disabled selected value={""}>
                      Ангилал
                    </option>
                    {productList.map((item, index) => {
                      return <option key={index}>{item.mainCategory}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="relative">
                <AttachMoney className="absolute top-2 left-2" />
                <div className="">
                  <select className="w-[113px] h-10 text-center rounded-lg text-[#3F4145] border">
                    <option>Үнэ</option>
                  </select>
                </div>
              </div>

              {/* <select className="w-[140px] h-10 pl-6 rounded-lg text-[#3F4145] border">
                <option>Сараар</option>
              </select> */}

              <button className="text-sm font-semibold text-[#3F4145] py-2 px-4 border-2 rounded-xl  hover:text-white hover:bg-[#18BA51] bg-white flex gap-2 items-center">
                <CalendarToday className="w-4 h-4" />
                <p>Сараар</p>
                <KeyboardArrowDownOutlined />
              </button>
            </div>

            <div className="relative">
              <input
                type="search"
                placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
                className="w-[415px] h-10 rounded-lg pl-14 border"
              ></input>
              <Search className="absolute left-5 top-[9px]" />
            </div>
          </div>

          <div className="w-full">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
};
