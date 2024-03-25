"use client";

import { FacebookOutlined, FavoriteBorder } from "@mui/icons-material";
import { Card, Container } from "@mui/material";
import { DetailHead } from "./DetailHead";
import { AdditionInfo } from "./AdditionInfo";
import { Unelgee } from "./Unelgee";
import { useProduct } from "../../providers/ProductProvider";
import { AllUnelgee } from "./AllUnelgee";
import { ItemDetail } from "./Detail";

const data = ["Home", "Product Details"];

type DetailProps = {
  productName: string;
  productStar: string;
  productPrice: string;
  productColor: string[];
  productInfo: string;
  productImage: string[];
};

export const ProductDetail = (props: DetailProps) => {
  const {
    productName,
    productStar,
    productPrice,
    productColor,
    productInfo,
    productImage,
  } = props;

  const { productList } = useProduct();

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
        {/* <Container sx={{ py: 10 }}>
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
        </Container> */}
        <ItemDetail
          productName=""
          productStar=""
          productPrice={0}
          productColor={productColor}
          productInfo=""
          productImage={productImage}
        />

        <div className="py-10 bg-[#F9F8FE]">
          <Container sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Unelgee />
            <AllUnelgee />
          </Container>
        </div>
      </div>
    </div>
  );
};
