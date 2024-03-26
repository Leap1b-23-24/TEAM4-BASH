"use client";

import { Footer } from "@/src/components/layout/AdminHomeFooter";
import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Button, Container } from "@mui/material";

export default function OrderCompleted() {
  return (
    <div className="w-[full] h-[full] bg-[white]">
      <div className="bg-[#7E33E0] w-[full] py-4">
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

          <div className="flex w-[full]">
            <input
              type="text"
              className="border-2 border-[#E7E6EF] width-[full] h-8"
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
      <div className="bg-[#F6F5FF] py-8">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="w-[full] ">
            <div className="flex flex-row gap-1">
              <p className="text-base">Home</p>
              <p className=" text-base text-[#FB2E86]">. Order Complete</p>
            </div>
          </div>
        </Container>
      </div>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex  gap-40 items-center h-[full] pt-10 pb-20">
          <img src="/clock.png" className="pb-[30%]" />
          <div className="flex flex-col gap-10 w-[70%] h-[fit] pb-30 items-center">
            <div className="relative">
              <div className="relative ">
                <img src="/ring.png" width={"100%"} height={80}></img>
                <div className="absolute bottom-2 left-2.5">
                  <img src="/Ellipse.png"></img>
                </div>
              </div>
              <div className="absolute bottom-4 left-5">
                <img src="/Vector.png"></img>
              </div>
            </div>

            <p className="text-[36px] text-[#101750]">
              Таны захиалга амжилттай
            </p>
            <p className="text-[#8D92A7] text-[16px]">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>
            <button className="bg-[#FF1788] w-[30%] h-[59px] rounded text-[white] hover-bg-[#FF1788]">
              Үргэлжлүүлэх
            </button>
          </div>
          <img src="/Group.png" className="pt-[50%] "></img>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
