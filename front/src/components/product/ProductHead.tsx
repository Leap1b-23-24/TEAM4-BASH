"use client";

import { usePathname, useRouter } from "next/navigation";

export const ProductHead = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex">
      <p
        className="py-6 px-8 text-[14px] text-[#3F4145] hover:text-[black] border-b-2 border-[#ECEDF0]"
        onClick={() => {
          router.push("/dashboard/product");
        }}
        style={{
          color: pathname == "/dashboard/product" ? "#121316" : "none",
          borderBottom:
            pathname == "/dashboard/product" ? "1px solid #121316" : "none",
        }}
      >
        Бүтээгдэхүүн
      </p>
      <p
        className="py-6 px-8 text-sm text-[#3F4145] hover:text-[black] border-b-2 hover:border-black border-[#ECEDF0]"
        onClick={() => {
          router.push("/dashboard/category");
        }}
        style={{
          color: pathname == "/dashboard/category" ? "#121316" : "none",
          borderBottom:
            pathname == "/dashboard/category" ? "1px solid #121316" : "none",
        }}
      >
        Ангилал
      </p>
    </div>
  );
};
