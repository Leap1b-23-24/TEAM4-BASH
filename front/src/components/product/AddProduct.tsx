"use client";

import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { AddProductTwo } from "./AddProductTwo";
import { AddProductOne } from "./AddProductOne";

export const AddProduct = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-[#F7F7F8]">
      <div className="flex py-2 bg-white">
        <div
          onClick={() => {
            router.push("/dashboard/product");
          }}
          className="cursor-pointer pl-4"
        >
          <div className="pt-3">
            <ChevronLeft className="w-[36px] h-[36px]" />
          </div>
        </div>
        <p className="text-[18px] font-normal py-4 px-5">Бүтээгдэхүүн нэмэх</p>
      </div>

      <div className="p-8 flex w-full gap-10">
        <AddProductOne />
        <AddProductTwo />
      </div>

      <div className="px-8 flex justify-end gap-5">
        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Ноорог
        </button>

        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Нийтлэх
        </button>
      </div>
    </div>
  );
};
