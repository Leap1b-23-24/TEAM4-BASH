"use client";

import {
  CallOutlined,
  EmailOutlined,
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, Container } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useProduct } from "../providers/ProductProvider";
import { useAuth } from "../providers/AuthProvider";

export const AdminHomeHeader = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const { toCart, toFavor } = useProduct();

  const router = useRouter();

  return (
    <div className="w-full h-full">
      <div className="bg-[#7E33E0] py-4">
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="flex gap-20">
            <div className="flex gap-2">
              <EmailOutlined sx={{ color: "#FFF", width: 18, pt: 0.2 }} />
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                {user?.email}
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
              <Badge badgeContent={toFavor?.length} color="primary">
                <FavoriteBorderOutlined sx={{ color: "#FFF", width: 16 }} />
              </Badge>
            </div>

            <Badge badgeContent={toCart.length} color="primary">
              <ShoppingCartOutlined
                color="primary"
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
                }}
                style={{
                  color: pathname === "/home" ? "#FB2E86" : "inherit",
                }}
              >
                <p className="text-[14px] font-normal cursor-pointer">Нүүр</p>
              </div>

              <p
                className="text-[14px] font-normal cursor-pointer"
                onClick={() => {
                  router.push("/home/shop");
                }}
                style={{
                  color: pathname === "/home/shop" ? "#FB2E86" : "inherit",
                }}
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
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
