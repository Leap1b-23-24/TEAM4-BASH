"use client";

import { FavoriteBorder } from "@mui/icons-material";
import { Card, Container } from "@mui/material";

type DetailProps = {
  productName: string | undefined;
  productStar: string;
  productPrice: number | undefined;
  productColor?: string[] | undefined;
  productInfo: string | undefined;
  productImage?: string[];
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
              {productImage?.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item}
                    className="w-[375px] object-cover"
                  />
                );
              })}
            </div>

            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-3 justify-center">
                <p className="text-[#111C85] text-[36px] font-[800]">
                  {productName}
                </p>
                <div className="flex gap-3">
                  <p className="text-[#151875] text-[30px] font-[400] font-sans">
                    {productPrice}$
                  </p>
                </div>

                <div className="flex gap-2">
                  {productColor?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="w-3 h-3 rounded-[50%]"
                        style={{ background: item }}
                      />
                    );
                  })}
                </div>
                <p className="font-[400] text-[#9295AA] text-[18px]">
                  {productInfo}
                </p>
              </div>

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
