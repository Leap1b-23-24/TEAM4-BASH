"use client";

import { useRouter } from "next/navigation";
import { ProductHead } from "./ProductHead";

export const DashboardCategory = () => {
  const router = useRouter();

  return (
    <div className="w-full h-full bg-[#F7F7F8]">
      <ProductHead />

      <div className="p-8 flex flex-col gap-6">
        <button
          className="py-3 rounded-xl w-[220px] text-[16px] text-white bg-black"
          onClick={() => {
            router.push("/dashboard/product/addpro");
          }}
        >
          + Ангилал нэмэх
        </button>
      </div>
    </div>
  );
};
