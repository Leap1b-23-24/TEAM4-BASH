"use client";

import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  InsertEmoticon,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Grid, ListItem } from "@mui/material";
import { CustomProductDisplay } from "../customs/CustomProductDisplay";
import { GridViewComp } from "./GridView";
import { CustomItem } from "../customs/CustomHome";
import { useProduct } from "../providers/ProductProvider";
import { Container } from "@mui/material";

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
  const { productList } = useProduct();

  return (
    <div className="w-full h-full bg-white">
      <div className="flex flex-col justify-center bg-white w-full">
        <img src="promotional.png" className="rounded-xl h-[700px]" />

        <Container sx={{ py: 8 }}>
          <div className="flex flex-col py-24 gap-10">
            <div className="flex flex-col gap-2 items-center w-full">
              <p className="text-[40px] font-[800] text-[#1A0B5B]">
                Онцлох бүтээгдэхүүн
              </p>
              <div className="grid grid-cols-4 basis-0 grow gap-16 py-6">
                {productList.map((item, index) => {
                  return (
                    <CustomItem
                      key={index}
                      image={item.productImage}
                      label={item.additionInfo}
                      price={item.mainPrice}
                    />
                  );
                })}
              </div>
            </div>
            <div className="relative flex flex-col gap-2 items-center w-full">
              <p className="text-[40px] font-[800] text-[#1A0B5B]">
                Шинээр нэмэгдсэн
              </p>

              <Grid container spacing={8}>
                {productList.slice(0, 8).map((product) => (
                  <Grid lg={3} sm={4} xs={6} item>
                    <CustomProductDisplay
                      productName={product.productName}
                      productImg={product.productImage}
                      color={product.color}
                      mainPrice={product.mainPrice}
                      // disPercent={product.disPercent}
                    />
                  </Grid>
                ))}
              </Grid>

              {/* <div className="absolute w-full h-screen bg-red-100">dsd</div> */}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-[40px] font-[800] text-[#1A0B5B]">
              Үйлчилгээний тухай
            </p>
            <div className="flex gap-4">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border rounded-md flex flex-col items-center py-12 px-4 text-center "
                  >
                    <img src={item.img} className="w-[60px]" />
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
