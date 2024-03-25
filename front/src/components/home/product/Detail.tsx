"use client";

import { FavoriteBorder } from "@mui/icons-material";
import { Card, Container } from "@mui/material";
import { AllUnelgee } from "./AllUnelgee";

type DetailProps = {
  productName: string;
  productStar: string;
  productPrice: number;
  productColor: string[];
  productInfo: string;
  productImage: string[];
};

export const ItemDetail = (props: DetailProps) => {
  const {
    productName,
    productStar,
    productPrice,
    productColor,
    productInfo,
    productImage,
  } = props;

  return (
    <div>
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
                {productName}
              </p>
              <div className="flex gap-3">
                <p className="text-[#111C85] text-[16px] font-[800]">
                  {productPrice}
                </p>
              </div>

              <div className="flex gap-1">
                <p className="bg-[#E60584] w-3 h-3 rounded-[50%]">
                  {productColor}
                </p>
              </div>
              <p className="font-[400] text-[#9295AA] text-[18px]">
                {productInfo}
              </p>

              <div className="flex gap-5">
                <p className="text-[#151875] text-[16px] font-[800]">
                  Add To cart
                </p>

                <FavoriteBorder />
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
};
