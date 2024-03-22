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
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = [
  "Home",
  "Shop List",
  "Shop Left Sidebar",
  "Product Detail",
  "Shopping Cart",
];

export const AdminHomeHeader = () => {
  const [isSide, setIsSide] = useState(false);
  const router = useRouter();

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
            <p className="font-[700] text-[32px] text-[#0D0E43]">Ecommerce</p>

            <div className="flex gap-8">
              <div className="relative">
                <div
                  className="flex hover:text-[#FB2E86]"
                  onClick={() => {
                    setIsSide(true);
                  }}
                >
                  <p className="text-[14px] font-normal">Нүүр</p>
                  <ExpandMoreOutlined />
                </div>

                {isSide && (
                  <div className="absolute top-10 right- border rounded bg-white">
                    {page.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="whitespace-nowrap border-b-2 py-2 pr-8 pl-4 hover:text-[#FB2E86]"
                          onClick={() => {
                            if (item === "Home") {
                              router.push("/home");
                            } else if (item === "Shop List") {
                              router.push("/home/shop");
                            } else if (item === "Shop Left Sidebar") {
                              router.push("/");
                            } else if (item === "Product Detail") {
                              router.push("/home/detail");
                            } else if (item === "Shopping Cart") {
                              router.push("/");
                            }
                            setIsSide(false);
                          }}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>

              <p className="text-[14px] font-normal hover:text-[#FB2E86]">
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
    </div>
  );
};
