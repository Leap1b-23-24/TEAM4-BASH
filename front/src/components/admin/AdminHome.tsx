"use client";

import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { CustomItem } from "../customs/CustomHome";
import { useProduct } from "../providers/ProductProvider";
import Footer from "../layout/AdminHomeFooter";
import { Container } from "postcss";

export const AdminHome = () => {
  const label = ["Хямдралтай", "Эрэгтэй", "Эмэгтэй", "Хүүхдийн"];

  const { productList } = useProduct();
  return (
    <div className="w-full h-full">
      <div className="bg-[#7E33E0] flex justify-between px-[240px] py-4">
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

      <div className="bg-white flex justify-between px-[240px] py-3 items-center">
        <div className="flex gap-16 items-center">
          <p className="font-[700] text-[34px] text-[#0D0E43]">Ecommerce</p>

          <div className="flex gap-8">
            <div className="flex hover:text-[#FB2E86]">
              <p className="text-[16px] font-normal">Нүүр</p>
              <ExpandMoreOutlined />
            </div>

            <p className="text-[16px] font-normal hover:text-[#FB2E86]">
              Ангилал
            </p>
          </div>
        </div>

        <div className="flex">
          <input type="text" className="border-2 width-[315px] h-8" />
          <div>
            <Search
              sx={{
                bgcolor: "#FB2E86",
                height: 31,
                width: 33,
                p: 0.5,
                color: "#FFF",
              }}
            />
          </div>
        </div>
      </div>

      <div className="px-[240px] py-8 flex flex-col justify-center gap-8 bg-[#F7F7F8]">
        <img src="mart.png" className="rounded-2xl" />

        <div className="py-4 flex flex-col gap-2 items-center">
          <p className="text-[28px] font-bold text-[#1A0B5B]">
            Санал болгож буй
          </p>
          <div className="grid grid-cols-5 gap-4">
            {productList.map((item, index) => {
              return (
                <CustomItem
                  key={index}
                  image={item.productImage}
                  label={item.additionInfo}
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
