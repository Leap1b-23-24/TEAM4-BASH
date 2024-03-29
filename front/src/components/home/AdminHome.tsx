"use client";

import { Grid } from "@mui/material";
import { CustomProductDisplay } from "../customs/CustomProductDisplay";
import { CustomHome } from "../customs/CustomHome";
import { useProduct } from "../providers/ProductProvider";
import { Container } from "@mui/material";
import { useState } from "react";

const data = [
  {
    img: "/free.png",
    label: "Үнэгүй хүргэлт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/cash.png",
    label: "Буцаан олголт",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/reliable.png",
    label: "Найдвартай",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
  {
    img: "/hour.png",
    label: "24/7 тусламж",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
  },
];

export const AdminHome = () => {
  const { allProduct } = useProduct();
  const [step, setStep] = useState(-50);

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col justify-center bg-white">
        <img src="promotional.png" className="rounded-xl h-[700px]" />

        <Container sx={{ py: 8 }}>
          <div className="flex flex-col py-24 gap-10">
            <div className="flex flex-col gap-2 overflow-hidden items-center w-full">
              <p className="text-[36px] font-[800] text-[#1A0B5B]">
                Онцлох бүтээгдэхүүн
              </p>
              <div
                className={`flex relative justify-start basis-0 grow gap-10 py-6 left-[${step}%]`}
              >
                {allProduct.map((item, index) => {
                  return (
                    <CustomHome
                      key={index}
                      id={item._id}
                      image={item.productImage}
                      label={item.productName}
                      price={item.mainPrice}
                    />
                  );
                })}
              </div>

              <p
                className="w-5 h-2 rounded-xl bg-blue-300"
                onClick={() => {
                  if (step == 50) {
                    setStep(-50);
                  } else {
                    setStep(50);
                  }
                }}
              />
            </div>

            <div className="relative flex flex-col gap-10 items-center w-full">
              <p className="text-[32px] font-[800] text-[#1A0B5B]">
                Шинээр нэмэгдсэн
              </p>

              <Grid container spacing={4}>
                {allProduct.slice(0, 8).map((product) => (
                  <Grid lg={3} sm={4} xs={6} item>
                    <CustomProductDisplay
                      id={product._id}
                      productName={product.productName}
                      productImg={product.productImage}
                      color={product.color}
                      mainPrice={product.mainPrice}
                      // disPercent={product.disPercent}
                    />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[36px] font-[800] text-[#1A0B5B]">
              Үйлчилгээний тухай
            </p>
            <div className="flex gap-4">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-md flex flex-col items-center py-12 px-4 text-center "
                  >
                    <img src={item.img} />
                    <p className="text-[#151875] text-[22px] font-[800] pt-6">
                      {item.label}
                    </p>
                    <p className="text-[16px] font-bold text-[#1A0B5B4D]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
