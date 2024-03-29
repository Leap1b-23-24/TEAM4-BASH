"use client";

import { Container } from "@mui/material";
import { AdditionInfo } from "./AdditionInfo";
import { Unelgee } from "./Rate";
import { useProduct } from "../../providers/ProductProvider";
import { ItemDetail } from "./Detail";
import { useState } from "react";
import { redirect, useRouter } from "next/navigation";

const data = ["Home", "Product Details"];

type DetailProps = {
  productName?: string;
  productStar?: string;
  productPrice?: string;
  productColor?: string[];
  productInfo?: string;
  productImage?: string[];
};

export const ProductDetail = (props: DetailProps) => {
  const { detail } = useProduct();
  const router = useRouter();

  const [rate, setRate] = useState("info");
  const [isActive, setIsActive] = useState(true);

  if (!detail) {
    redirect("/home");
  }

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
          productStar={detail?.star}
          productPrice={detail?.mainPrice}
          productColor={detail?.color}
          productInfo={detail?.additionInfo}
          productImage={detail?.productImage}
          starCount={detail?.starCount}
        />

        <div className="py-10 bg-[#F9F8FE]">
          <Container sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div className="flex gap-6">
              <p
                className={`text-[#151875] text-[24px] font-[800]`}
                style={{
                  borderBottom: isActive ? "1px solid #151875" : "none",
                }}
                onClick={() => {
                  setRate("info");
                  setIsActive(true);
                }}
              >
                Нэмэлт мэдээлэл
              </p>

              <p
                className="text-[#151875] text-[24px] font-[800] hover:border-b-2 border-[#151875]"
                style={{
                  borderBottom: isActive ? "none" : "1px solid #151875",
                }}
                onClick={() => {
                  setRate("rate");
                  setIsActive(false);
                }}
              >
                Үнэлгээ
              </p>
            </div>

            {rate == "info" ? (
              <AdditionInfo />
            ) : (
              <Unelgee productId={detail?._id} />
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};
