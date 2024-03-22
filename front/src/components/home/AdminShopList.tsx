"use client";

import { GridViewRounded, ListRounded } from "@mui/icons-material";
import { Container } from "@mui/material";
import { CustomShopList } from "../customs/CustomShopList";
import { useProduct } from "../providers/ProductProvider";

const data = ["Home", "Shop List"];

export const AdminShopList = () => {
  const { productList } = useProduct();

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

            <div className="flex gap-4 items-center">
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

              <div className="flex items-center">
                <p className="text-[#3F509E] text-[16px] font-[400]">View:</p>
                <GridViewRounded className="w-3 h-3" />
                <ListRounded className="w-4 h-4" />
              </div>

              <input type="text" className="border" />
            </div>
          </div>

          <div className="flex flex-col gap-8 py-10">
            {productList.map((item, index) => {
              return (
                <CustomShopList
                  key={index}
                  image={item.productImage}
                  label={item.productName}
                  price={item.mainPrice}
                  color={item.color}
                  additionInfo={item.additionInfo}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};
