"use client";

import {
  FacebookOutlined,
  FavoriteBorder,
  GridViewRounded,
  ListRounded,
} from "@mui/icons-material";
import { Card, Container } from "@mui/material";
import { CustomShopList } from "../customs/CustomShopList";

const data = ["Home", "Pages", "Product Details"];

export const ProductDetail = () => {
  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <Container sx={{ py: 10 }}>
          <p className="text-[36px] font-[800] text-[#101750]">
            Product Details
          </p>
          <div className="flex gap-2">
            {data.map((item, index) => {
              return (
                <p
                  key={index}
                  className="text-[16px] font-[500] hover:text-[#FB2E86] "
                >
                  {item}
                </p>
              );
            })}
          </div>
        </Container>
      </div>

      <div className="bg-white">
        <Container sx={{ py: 10 }}>
          <Card sx={{ p: 2, display: "flex", width: "full", gap: 6 }}>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2">
                <img
                  src="/bu.png"
                  className="w-[151px] h-[155px] object-cover"
                />
                <img
                  src="/bu.png"
                  className="w-[151px] h-[155px] object-cover"
                />
                <img
                  src="/bu.png"
                  className="w-[151px] h-[155px] object-cover"
                />
              </div>
              <img src="/bagg.png" className="w-[375px] object-cover" />
            </div>

            <div className="flex flex-col gap-3 justify-center">
              <p className="text-[#0D134E] text-[36px] font-[800]">
                Product Name
              </p>
              <div className="flex gap-3">
                <p className="text-[#111C85] text-[16px] font-[800]">$32.00</p>
                <p className="text-[#FF2AAA] text-[16px] font-[800]">$52.00</p>
              </div>

              <div className="flex gap-1">
                <p className="bg-[#E60584] w-3 h-3 rounded-[50%]"></p>
                <p className="bg-[#DE9034] w-3 h-3 rounded-[50%]"></p>
                <p className="bg-[#111C85] w-3 h-3 rounded-[50%]"></p>
              </div>
              <p className="font-[400] text-[#9295AA] text-[18px]">
                Addition info && zahialgiin talaar nemelt medeelel
              </p>

              <div className="flex gap-5">
                <p className="text-[#151875] text-[16px] font-[800]">
                  Add To cart
                </p>

                <FavoriteBorder />
              </div>
              <p className="text-[#151875] text-[16px] font-[800]">
                Categories:
              </p>

              <p className="text-[#151875] text-[16px] font-[800]">Tags</p>
              <div className="flex gap-5 items-center">
                <p className="text-[#151875] text-[16px] font-[800]">Share</p>
                <FacebookOutlined className="text-[#151875] w-4 h-4" />
                <FacebookOutlined className="text-[#E60584] w-4 h-4" />
                <FacebookOutlined className="text-[#151875] w-4 h-4" />
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
};
