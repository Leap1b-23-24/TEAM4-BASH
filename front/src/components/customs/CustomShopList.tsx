import { Card, Modal, Rating, Stack } from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomInRounded,
} from "@mui/icons-material";
import { Dispatch, SetStateAction, useState } from "react";
import { ZoomModal } from "./ZoomModal";
import { Product, useProduct } from "../providers/ProductProvider";

type ShopListProps = {
  id?: string;
  image: string[];
  label: string;
  price: number;
  color: string[];
  additionInfo: string;
  star: number;
  starCount: number;
};

export const CustomShopList = (props: ShopListProps) => {
  const { label, price, color, additionInfo, image, star, starCount, id } =
    props;
  const [openImage, setOpenImage] = useState(false);
  const { allProduct, toFavor, setToFavor, toCart, setToCart } = useProduct();

  return (
    <div id={id} className="w-full">
      <Card
        sx={{
          p: 2,
          display: "flex",
          gap: 4,
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        <img
          src={image[0]}
          className="w-[270px] h-[270px] object-contain border rounded-md"
        />
        <div className="flex flex-col justify-between gap-3 py-6">
          <div className="flex flex-col gap-3">
            <div className="flex gap-10 items-center">
              <p className="text-[#111C85] text-[20px] font-[800]">{label}</p>

              <div className="flex gap-1">
                {color.map((item, index) => {
                  return (
                    <p
                      key={index}
                      className="w-3 h-3 rounded-[50%]"
                      style={{ background: item }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex gap-3">
              <p className="text-[#111C85] text-[16px] font-[800]">${price}</p>
              <div className="flex items-center">
                <Rating readOnly value={star} />
                <p className="text-[#5A5C7E] text-[14px] pt-[3px]">
                  ({starCount})
                </p>
              </div>
            </div>

            <p className="font-[400] text-[#9295AA] text-[18px]">
              {additionInfo}
            </p>
          </div>

          <div className="flex gap-5 pt-2">
            <div className="w-9 h-9 bg-[#f7f3f2] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#EBF4F3]">
              <ShoppingCartOutlined
                className="text-[#535399]"
                onClick={() => {
                  const sel = allProduct.find(
                    (item) => item._id === id
                  ) as Product;

                  const current = toCart.find(
                    (item) => item.sel._id === sel._id
                  );

                  if (!current) {
                    setToCart((prev) => [...prev, { sel, count: 1 }]);
                  }
                }}
              />
            </div>
            <div className="w-9 h-9 bg-[#f7f3f2]  rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#EBF4F3]">
              <FavoriteBorder
                className="text-[#535399]"
                onClick={() => {
                  const clicked = allProduct.find(
                    (item) => item._id === id
                  ) as Product;

                  const current = toFavor.find(
                    (item) => item._id === clicked._id
                  );

                  if (!current) {
                    setToFavor((prev) => [...prev, clicked]);
                  }
                }}
              />
            </div>

            <div className="w-9 h-9 bg-[#f7f3f2] rounded-[50%] flex items-center justify-center cursor-pointer hover:bg-[#EBF4F3]">
              <ZoomInRounded
                className="text-[#535399]"
                onClick={() => {
                  setOpenImage(true);
                }}
              />
            </div>
          </div>

          {openImage && (
            <ZoomModal image={image} handleClose={setOpenImage} label={label} />
          )}
        </div>
      </Card>
    </div>
  );
};
