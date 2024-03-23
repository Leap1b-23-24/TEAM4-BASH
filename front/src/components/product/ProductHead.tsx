"use client";

import { useRouter } from "next/navigation";

export const ProductHead = () => {
  const router = useRouter();
  return (
    <div className="flex">
      <p
        className="py-6 px-8 text-[14px] text-[#3F4145] hover:text-[black] border-b-2 hover:border-black border-[#ECEDF0]"
        onClick={() => {
          router.push("/dashboard/product");
        }}
      >
        Бүтээгдэхүүн
      </p>
      <p
        className="py-6 px-8 text-sm text-[#3F4145] hover:text-[black] border-b-2 hover:border-black border-[#ECEDF0]"
        onClick={() => {
          router.push("/dashboard/category");
        }}
      >
        Ангилал
      </p>
    </div>
  );
};
