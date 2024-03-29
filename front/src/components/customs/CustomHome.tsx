import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomInOutlined,
} from "@mui/icons-material";
import { Card } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product, useProduct } from "../providers/ProductProvider";
import { ZoomModal } from "./ZoomModal";

type CustomProps = {
  image: string[];
  label: string;
  price: number;
  id: string | undefined;
  setPaused: (value: boolean) => void;
};

export const CustomHome = (props: CustomProps) => {
  const { image, label, price, id, setPaused } = props;
  const [openImage, setOpenImage] = useState(false);
  const router = useRouter();
  const { setDetail, allProduct, toFavor, setToFavor, toCart, setToCart } =
    useProduct();

  return (
    <Card>
      <div
        id={id}
        className="relative group"
        onMouseOver={() => {
          setPaused(true);
        }}
        onMouseLeave={() => {
          setPaused(false);
        }}
      >
        <div className="w-[270px] flex flex-col gap-3 bg-[#fff]">
          <div className="relative group flex w-full justify-center">
            <img
              src={image[0]}
              className="h-[240px] w-[240px] object-cover mix-blend-multiply hover:scale-110 duration-300"
            />
            <button
              className="group-hover:opacity-[1] opacity-0 absolute bottom-3 left-18 text-[12px] text-white py-[6px] rounded px-3 bg-[#08D15F] font-[500] font-sans"
              onClick={() => {
                const detailPro = allProduct.find(
                  (item) => item._id === id
                ) as Product;

                setDetail(detailPro);
                router.push("/home/detail");
              }}
            >
              View Details
            </button>
          </div>

          <div className="p-5 flex flex-col gap-6 items-center group-hover:bg-[#2F1AC4]">
            <p className="text-[18px] font-bold text-[#FB2E86] group-hover:text-white line-clamp-1">
              {label}
            </p>
            <p className="text-[18px] font-bold text-[#151875] group-hover:text-white">
              {Intl.NumberFormat().format(price)}₮
            </p>
          </div>
        </div>

        <div className="group absolute top-3 left-3">
          <div className="flex gap-4 group-hover:opacity-[1] opacity-0">
            <div className="hover:bg-[#EEEFFB] rounded-[50%]">
              <ShoppingCartOutlined
                className="text-[#1389FF] hover:text-[#2F1AC4] p-1 cursor-pointer"
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

            <div className="hover:bg-[#EEEFFB] rounded-[50%]">
              <FavoriteBorder
                className="text-[#1389FF] hover:text-[#2F1AC4] p-[2px] cursor-pointer"
                onClick={() => {
                  const clicked = allProduct.find((item) => item._id === id);

                  if (!clicked) return;

                  const current = toFavor.find(
                    (item) => item._id === clicked._id
                  );
                  if (!current) {
                    setToFavor((prev) => [...prev, clicked]);
                  }
                }}
              />
            </div>
            <div className="hover:bg-[#EEEFFB] rounded-[50%]">
              <ZoomInOutlined
                className="text-[#1389FF] p-[2px] hover:text-[#2F1AC4] cursor-pointer"
                onClick={() => {
                  setOpenImage(true);
                }}
              />
            </div>
          </div>
        </div>

        {openImage && (
          <ZoomModal image={image} handleClose={setOpenImage} label={label} />
        )}
      </div>
    </Card>
  );
};
