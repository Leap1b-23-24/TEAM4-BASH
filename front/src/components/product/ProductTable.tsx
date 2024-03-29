"use client";
import OneTable from "./ProductTableMini";
import { useProduct } from "../providers/ProductProvider";
import { useState } from "react";

const ProductData = [
  "",
  "Бүтээгдэхүүн",
  "Ангилал",
  "Үнэ",
  "Үлдэгдэл",
  "Зарагдсан",
  "Нэмсэн огноо",
];

export const ProductTable = () => {
  const { productList } = useProduct();

  return (
    <section className="w-full rounded-xl flex flex-col divide-y divide-[#D6D8DB] bg-white">
      <header className="flex flex-row">
        {ProductData.map((product, index) => (
          <div
            style={{
              width:
                product === ""
                  ? `${"90px"}`
                  : product === "Ангилал"
                  ? `${"230px"}`
                  : "180px",
            }}
            key={index}
            className="flex items-center py-[14px] font-[600] text-[12px] font-sans text-[#3F4145]"
          >
            {product}
          </div>
        ))}
      </header>
      <main className="w-full h-fit flex flex-col overflow-y-auto divide-y divide-[#D6D8DB]">
        {productList.map((item, index) => (
          <OneTable
            id={item._id}
            key={index}
            ProductName={item.productName}
            ProductImage={item.productImage[0]}
            ProductNumber={item.barCode}
            Category={item.mainCategory}
            Price={item.mainPrice}
            Total={item.quantity}
            SoldTotal={item.quantity}
            AddDate={item.createdAt?.toString().slice(0, 10)}
          />
        ))}
      </main>
    </section>
  );
};

export default ProductTable;
