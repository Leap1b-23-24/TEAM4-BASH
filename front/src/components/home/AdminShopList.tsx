"use client";

import { GridViewRounded, ListRounded } from "@mui/icons-material";
import { Container } from "@mui/material";
import { CustomRate } from "../customs/CustomRate";
import { ListView } from "./ListView";
import { GridViewComp } from "./GridView";
import { useState } from "react";

const data = ["Home", "Shop List"];

export const AdminShopList = () => {
  const [list, setList] = useState("list");
  return (
    <div>
      <div className="bg-[#F6F5FF]">
        <Container sx={{ py: 10 }}>
          <p className="text-[36px] font-[800] text-[#101750]">Shop List</p>
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
        <Container sx={{ py: 10 }}>
          <div className="flex justify-between w-full py-6">
            <div className="">
              <p className="text-[#151875] text-[22px] font-[800]">
                Ecommerce Acceories & Fashion item
              </p>
              <p className="text-[#8A8FB9] text-[12px] font-[400]">
                About 9,620 results (0.62 seconds)
              </p>
            </div>

            <div className="flex gap-4 items-center px-4">
              <div className="flex gap-2">
                <p className="text-[#3F509E] text-[16px] font-[400]">
                  Per Page:
                </p>
                <input type="text" className="border-2 h-[25px] w-[55px]" />
              </div>

              <div className="flex items-center">
                <p className="text-[#3F509E] text-[16px] font-[400]">
                  Sort By:
                </p>

                <select className="border-2 h-[28px]">
                  <option value="" className="text-[12px]">
                    Best match
                  </option>
                </select>
              </div>

              <div className="flex items-center gap-1">
                <p className="text-[#3F509E] text-[17px] font-[400]">View:</p>
                <GridViewRounded
                  sx={{ width: 18, height: 20, cursor: "pointer", mt: 0.3 }}
                  onClick={() => {
                    setList("gridView");
                  }}
                />
                <ListRounded
                  sx={{ width: 28, height: 36, cursor: "pointer", mt: 0.2 }}
                  onClick={() => {
                    setList("listView");
                  }}
                />
              </div>
            </div>
          </div>

          <div className="md:flex gap-32">
            <CustomRate />

            {list == "listView" ? <ListView /> : <GridViewComp />}
          </div>
        </Container>
      </div>
    </div>
  );
};
