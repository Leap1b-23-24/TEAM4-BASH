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
import { Container } from "@mui/material";
import { Footer } from "../layout/AdminHomeFooter";

const data = [
  {
    img: "/free.png",
    label: "Үнэгүй хүргэлт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/cash.png",
    label: "Буцаан олголт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/reliable.png",
    label: "Найдвартай",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/hour.png",
    label: "24/7 тусламж",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

export const AdminHome = () => {
  const { productList } = useProduct();
  return (
    <div className="w-full h-full">
      <div className="bg-[#7E33E0] py-4">
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="flex gap-20">
            <div className="flex gap-2">
              <EmailOutlined sx={{ color: "#FFF", width: 18, pt: 0.2 }} />
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                info@ecommerce.mn
              </p>
            </div>
            <div className="flex gap-2">
              <CallOutlined sx={{ color: "#FFF", width: 18 }} />
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
        </Container>
      </div>

      <div className="bg-white py-2">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
            <input
              type="text"
              className="border-2 border-[#E7E6EF] width-[315px] h-8"
            />
            <div>
              <Search
                sx={{
                  bgcolor: "#FB2E86",
                  height: 31,
                  width: 35,
                  p: 0.5,
                  color: "#FFF",
                }}
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="flex flex-col justify-center bg-white">
        <img src="promotional.png" className="rounded-xl h-[500px]" />

        <Container sx={{ py: 8 }}>
          <div className="flex flex-col py-24 gap-10">
            <div className="flex flex-col gap-2 items-center w-full">
              <p className="text-[40px] font-[800] text-[#1A0B5B]">
                Онцлох бүтээгдэхүүн
              </p>
              <div className="grid grid-cols-4 basis-0 grow gap-16 py-6">
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
            <div className="flex flex-col gap-2 items-center w-full">
              <p className="text-[40px] font-[800] text-[#1A0B5B]">
                Онцлох бүтээгдэхүүн
              </p>
              <div className="grid grid-cols-4 basis-0 grow gap-16 py-6">
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

          <div className="flex flex-col items-center gap-4">
            <p className="text-[40px] font-[800] text-[#1A0B5B]">
              Үйлчилгээний тухай
            </p>
            <div className="flex gap-4">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-md flex flex-col items-center py-12 px-4 text-center "
                  >
                    <img src={item.img} className="w-[60px]" />
                    <p className="text-[#151875] text-[22px] font-[800] pt-6">
                      {item.label}
                    </p>
                    <p className="text-[16px] font-bold text-[#1A0B5B4D]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>

        <Footer />
      </div>
    </div>
  );
};
