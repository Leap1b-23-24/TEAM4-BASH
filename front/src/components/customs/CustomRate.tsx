"use client";

import { Search, StarBorderRounded } from "@mui/icons-material";
import { Checkbox, Rating, Stack } from "@mui/material";
import { useProduct } from "../providers/ProductProvider";

// const icons = [
//   { icon: <StarBorderRounded /> },
//   { icon: <StarBorderRounded /> },
//   { icon: <StarBorderRounded /> },
//   { icon: <StarBorderRounded /> },
//   { icon: <StarBorderRounded /> },
// ];

export const CustomRate = () => {
  const { productList } = useProduct();

  return (
    <div className="py-16 flex flex-col">
      <div>
        <p className="text-[#151875] text-[20px] font-[800]">Үнэлгээ</p>
        <div className="flex items-center gap-2">
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

          <div className="flex items-center gap-1">
            {/* {icons.map((item, index) => {
              return (
                <p key={index} className="">
                  {item.icon}
                </p>
              );
            })} */}
            <Stack spacing={1}>
              <Rating />
            </Stack>
            <p className="text-[#000000] text-[12px] font-[800] pt-1">(237)</p>
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
