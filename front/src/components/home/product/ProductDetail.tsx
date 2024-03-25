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
  const { detail } = useProduct();

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
        <ItemDetail
          productName={detail?.productName}
          productStar=""
          productPrice={detail?.mainPrice}
          productColor={detail?.color}
          productInfo={detail?.additionInfo}
          productImage={detail?.productImage}
        />

        <div className="py-10 bg-[#F9F8FE]">
          <Container sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <Unelgee />
            <AllUnelgee productId={detail?._id} />
          </Container>
        </div>
      </div>
    </div>
  );
};
