"use client";

import EmotionStyledBase from "@emotion/styled/base";
import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
  Toc,
} from "@mui/icons-material";
import { Badge, Container, IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useProduct } from "../providers/ProductProvider";

export const AdminHomeHeader = () => {
  const [isSide, setIsSide] = useState(false);
  const { toCart, fromLocalStorage, refresh, setRefresh } = useProduct();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

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
            <div className="flex gap-1 cursor-pointer">
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                {user?.name}
              </p>
              <PersonOutlined sx={{ color: "#FFF", width: 20 }} />
            </div>

            <div className="flex gap-1 cursor-pointer">
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                Хадгалах
              </p>
              <FavoriteBorderOutlined sx={{ color: "#FFF", width: 16 }} />
            </div>

            <Badge badgeContent={toCart.length}>
              <ShoppingCartOutlined
                onClick={() => router.push("/home/orderInCartPage")}
                sx={{ color: "#FFF", width: 19, cursor: "pointer" }}
              />
            </Badge>
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
            <p
              onClick={() => router.push("/home")}
              className="font-[700] text-[32px] text-[#0D0E43] cursor-pointer"
            >
              Ecommerce
            </p>

            <div className="flex gap-8">
              <div
                className="flex"
                onClick={() => {
                  router.push("/home");
                  setIsActive(true);
                }}
                style={{ color: isActive ? "#FB2E86" : "none" }}
              >
                <p className="text-[14px] font-normal">Нүүр</p>
                <ExpandMoreOutlined />
              </div>

              <p
                className="text-[14px] font-normal "
                onClick={() => {
                  router.push("/home/shop");
                  setIsActive(false);
                }}
                style={{ color: isActive ? "none" : "#FB2E86" }}
              >
                Ангилал
              </p>
            </div>
          </div>

          <div className="flex">
            <input
              type="text"
              placeholder="Хайх..."
              className="border-2 border-[#E7E6EF] width-[315px] h-8 pl-4 rounded"
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
