"use client";

import { Search, StarBorderRounded } from "@mui/icons-material";
import { Checkbox, Rating, Stack, Typography } from "@mui/material";
import { useProduct } from "../providers/ProductProvider";

const rate = [5, 4, 3, 2, 1];

export const CustomRate = () => {
  const { productList, allProduct } = useProduct();

  const counts = [
    allProduct.filter((item) => Math.round(item.star) == 5),
    allProduct.filter((item) => Math.round(item.star) == 4),
    allProduct.filter((item) => Math.round(item.star) == 3),
    allProduct.filter((item) => Math.round(item.star) == 2),
    allProduct.filter((item) => Math.round(item.star) == 1),
  ];

  console.log(allProduct);

  return (
    <div className="py-16 flex flex-col">
      <div>
        <p className="text-[#151875] text-[20px] font-[800]">Үнэлгээ</p>
        <div className="flex items-center gap-2">
          <div className=" items-center gap-1">
            <Stack spacing={1}>
              {rate.map((item, index) => (
                <div className="flex items-center gap-3">
                  <Checkbox
                    sx={{
                      color: "#FFF6DA",
                      "&.Mui-checked": {
                        color: "#FFCC2E",
                      },
                      width: 4,
                      height: 4,
                    }}
                  />
                  <div className="flex gap-1">
                    <Rating value={item} readOnly />
                    <p className="text-[12px] font-[800] pt-1">
                      ({counts[index].length})
                    </p>
                  </div>
                </div>
              ))}
            </Stack>
          </div>
        </div>
      </div>

      <div className="py-14">
        <p className="text-[#151875] text-[20px] font-[800]">Ангилал</p>

        {productList.map((item, index) => {
          return (
            <div className="flex items-center gap-3 py-[6px]">
              <Checkbox
                sx={{
                  color: "#FFDBF1",
                  "&.Mui-checked": {
                    color: "#FF3EB2",
                  },
                  width: 4,
                  height: 4,
                }}
              />
              <p key={index} className="text-[16px] font-normal text-[#7E81A2]">
                {item.mainCategory}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#292C58] text-[20px] font-[800]">Үнэ</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              sx={{
                color: "#FFDBF1",
                "&.Mui-checked": {
                  color: "#FF3EB2",
                },
                width: 4,
                height: 4,
              }}
            />
            <p className="text-[16px] font-normal text-[#7E81A2]">
              $0.00 - $150.00
            </p>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="$10.00 - 20000$"
              className="border border-[#BCBDDB] rounded py-1 pl-2 w-[205px]"
            />
            <Search className="absolute right-2 top-[5px] text-[#7E81A2]" />
          </div>
        </div>
      </div>
    </div>
  );
};
