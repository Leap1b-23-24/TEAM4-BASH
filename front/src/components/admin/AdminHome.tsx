"use client";

import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  Favorite,
  FavoriteBorderOutlined,
  Menu,
  PersonOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { CustomItem } from "../customs/CustomHome";
import { useProduct } from "../providers/ProductProvider";
import Footer from "../layout/AdminHomeFooter";

export const AdminHome = () => {
  const label = ["Хямдралтай", "Эрэгтэй", "Эмэгтэй", "Хүүхдийн"];

  const { productList } = useProduct();
  return (
    <div className="w-full h-full">
      <div className="px-[200px] bg-[#7E33E0] flex justify-between py-4">
        <div className="flex gap-14">
          <div className="flex gap-2">
            <EmailOutlined sx={{ color: "#FFF" }} />
            <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
              info@ecommerce.mn
            </p>
          </div>
          <div className="flex gap-2">
            <CallOutlined sx={{ color: "#FFF" }} />
            <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
              77123456
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="flex gap-1">
            <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
              Нэвтрэх
            </p>
            <PersonOutlined sx={{ color: "#FFF", width: 20 }} />
          </div>

          <div className="flex gap-1">
            <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
              Хадгалах
            </p>
            <FavoriteBorderOutlined sx={{ color: "#FFF", width: 16 }} />
          </div>

          <ShoppingCartOutlined sx={{ color: "#FFF", width: 19 }} />
        </div>
      </div>

      <div className="px-[200px] bg-white flex gap-8 py-6">
        <div className="flex">
          <p className="font-[700] text-[34px] text-[#0D0E43]">Ecommerce</p>

          <div className="flex">
            <p className="text-[16px] font-normal hover:text-[#FB2E86]">Нүүр</p>
            <ExpandMoreOutlined />
          </div>

          <p className="text-[16px] font-normal hover:text-[#FB2E86]">
            Ангилал
          </p>
        </div>

        <input type="text" className="bg-black h-8" />
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
