"use client";

import { Grid, Stack } from "@mui/material";
import { CustomProductDisplay } from "../customs/CustomProductDisplay";
import { CustomHome } from "../customs/CustomHome";
import { useProduct } from "../providers/ProductProvider";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

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

const step = [1, 2, 3, 4];

export const AdminHome = () => {
  const { allProduct } = useProduct();
  const [isStep, setStep] = useState(1);
  const [paused, setPaused] = useState(false);
  const [delay, setDelay] = useState(3000);

  useEffect(() => {
    if (paused) return;

    const timeout = setTimeout(() => {
      if (isStep != 4) {
        setStep(isStep + 1);
      } else {
        setStep(1);
      }
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [paused, isStep]);

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col justify-center bg-white">
        <img src="promotional.png" className="rounded-xl h-[700px]" />

        <Container sx={{ py: 6 }}>
          <div className="flex flex-col py-24 gap-20">
            <div className="flex flex-col gap-8 overflow-hidden items-center w-full">
              <p className="text-[34px] font-[800] text-[#1A0B5B]">
                Онцлох бүтээгдэхүүн
              </p>

              <Stack
                sx={{
                  width: "200%",
                  position: "relative",
                  left: `${50 - (isStep - 1) * 50}%`,
                }}
                flexDirection={"row"}
              >
                <Stack
                  sx={{
                    width: "100%",
                    position: "relative",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: "21px",
                  }}
                >
                  {allProduct.map((item, index) => {
                    return (
                      <Stack key={index}>
                        <CustomHome
                          key={index}
                          id={item._id}
                          image={item.productImage}
                          label={item.productName}
                          price={item.mainPrice}
                          setPaused={setPaused}
                        />
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>

              <Stack flexDirection={"row"} gap={"6px"}>
                {step.map((item, index) => (
                  <Stack
                    onClick={() => {
                      setStep(item);
                    }}
                    key={index}
                    width={isStep == item ? 24 : 16}
                    height={4}
                    bgcolor={isStep == item ? "#FB2E86" : "#FEBAD7"}
                    borderRadius={"10px"}
                    sx={{ cursor: "pointer", transition: "0.3s linear" }}
                  ></Stack>
                ))}
              </Stack>
            </div>

            <div className="relative flex flex-col gap-10 items-center w-full">
              <p className="text-[32px] font-[800] text-[#1A0B5B]">
                Шинээр нэмэгдсэн
              </p>

              <Grid container spacing={4}>
                {allProduct.slice(0, 12).map((product) => (
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

          <div className="flex flex-col items-center gap-6">
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
