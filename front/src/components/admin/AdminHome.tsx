"use client";

import { Favorite, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { CustomItem } from "../customs/CustomHome";
import { useProduct } from "../providers/ProductProvider";
import Footer from "../layout/AdminHomeFooter";

export const AdminHome = () => {
  const label = ["Хямдралтай", "Эрэгтэй", "Эмэгтэй", "Хүүхдийн"];

  const { productList } = useProduct();
  return (
    <div className="w-full h-full">
      <div className="px-[200px] bg-[#12A795] flex justify-between py-1">
        <div className="flex gap-2">
          <img src="pinelogo.png" className="py-4 w-[32px] object-cover" />
          <p className="text-[31px] text-white pt-[9px] font-semibold">
            Ecommerce
          </p>
        </div>

        <div className="relative">
          <input
            placeholder="Хайлт"
            type="text"
            className="w-[420px] h-[47px] border-2 border-[#D6D8DB] rounded-xl pl-12 bg-[#F7F7F8] mt-2"
          />

          <Search className="absolute left-4 top-[19px]" />
        </div>

        <div className="flex gap-8 items-center">
          <Favorite className="text-white" />
          <ShoppingCart className="text-white" />
          <img src="pro.webp" className="w-[32px] rounded-[50%]" />
        </div>
      </div>

      <div className="px-[186px] bg-white flex gap-8 py-[18px]">
        <Menu className="w-[20px]" />

        <div className="flex">
          {label.map((item, index) => {
            return (
              <p key={index} className="text-[14px] font-semibold px-5">
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div className="px-[172px] py-8 flex flex-col justify-center gap-8 bg-[#F7F7F8]">
        <img src="mart.png" className="rounded-2xl" />

        <div className="py-4 flex flex-col gap-2">
          <p className="text-[28px] font-bold">Санал болгож буй</p>
          <div className="grid grid-cols-5 justify-between">
            {productList.map((item, index) => {
              return (
                <CustomItem
                  key={index}
                  image={item.productImage}
                  label={item.additionInfo}
                  text={item.secondCategory}
                  price={item.mainPrice}
                />
              );
            })}
          </div>
        </div>

        <img src="wake.png" alt="" className="h-[412px]" />

        <div className="pt-4 pb-8">
          <p className="text-[28px] font-bold">Санал болгож буй</p>
          <div className="grid grid-cols-5 justify-between">
            {productList.map((item, index) => {
              return (
                <CustomItem
                  key={index}
                  image={item.productImage}
                  label={item.additionInfo}
                  text={item.secondCategory}
                  price={item.mainPrice}
                />
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
