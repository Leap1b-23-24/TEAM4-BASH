import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
  ZoomInOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { Product, useProduct } from "../providers/ProductProvider";
import { Dispatch, SetStateAction, useState } from "react";
import { ZoomModal } from "./ZoomModal";

type CustomProductDisplayProps = {
  id?: string;
  productName: string;
  productImg: string[];
  color: string[];
  mainPrice: number;
  disPercent?: number | undefined;
  setOpenImage?: Dispatch<SetStateAction<boolean>>;
};

export const CustomProductDisplay = (props: CustomProductDisplayProps) => {
  const { id, productName, productImg, color, mainPrice, disPercent } = props;
  const { allProduct, toCart, setToCart, toFavor, setToFavor } = useProduct();
  // const disPrice = mainPrice * (1 - disPercent / 100);
  const [openImage, setOpenImage] = useState(false);

  const icons = [
    {
      icon: <ShoppingCartOutlined className="w-[19px] h-[19px]" />,
      action: () => {
        const sel = allProduct.find((item) => item._id === id) as Product;

        const current = toCart.find((item) => item.sel._id === sel._id);

        if (!current) {
          setToCart((prev) => [...prev, { sel, count: 1 }]);
        }
      },
    },
    {
      icon: <ZoomInOutlined className="w-[19px] h-[19px]" />,
      action: () => {
        setOpenImage(true);
      },
    },
    {
      icon: <FavoriteBorderOutlined className="w-[19px] h-[19px]" />,
      action: () => {
        const clicked = allProduct.find((item) => item._id === id) as Product;

        const current = toFavor.find((item) => item._id === clicked._id);

        if (!current) {
          setToFavor((prev) => [...prev, clicked]);
        }
      },
    },
  ];

  return (
    <div id={id} className="w-[100%] h-[360px] flex flex-col gap-[15px]">
      <div className="group cursor-pointer relative hover hover:bg-[#EBF4F3] bg-[#F6F7FB] h-[280px] flex jurstify-center items-center">
        <Image
          src={productImg[0]}
          alt="camera"
          fill
          style={{ objectFit: "contain" }}
          className="mix-blend-multiply hover:scale-x-105 object-cover duration-300"
        />
        <div className="group-hover:block hidden absolute bottom-[5px] left-[5px] text-[#151875] flex flex-col">
          {icons.map((item) => (
            <div
              className="w-[30px] h-[30px] hover:bg-white rounded-full flex justify-center items-center"
              onClick={item.action}
            >
              {item.icon}
            </div>
          ))}

          {openImage && (
            <ZoomModal
              image={productImg}
              handleClose={setOpenImage}
              label={productName}
            />
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-[8px]">
        <p
          className="text-[18px] leading-[18px] font-bold text-[#151875] line-clamp-1"
          onClick={() => [setOpenImage(true)]}
        >
          {productName}
        </p>
        <div className="flex gap-[5px] justify-center">
          {color.map((item) => (
            <div
              className={`w-[10px] h-[10px] rounded-full cursor-pointer`}
              style={{ backgroundColor: item }}
            ></div>
          ))}
        </div>
        <div className="flex gap-[10px]">
          {disPercent && (
            <p className={`text-[#151875]`}>
              {/* {Intl.NumberFormat().format(disPrice)} ₮ */}
            </p>
          )}
          <p
            className={`${disPercent ? "line-through" : "no-underline"} text-[${
              disPercent ? "#08D15F" : "#151875"
            }]`}
          >
            {Intl.NumberFormat().format(mainPrice)} ₮
          </p>
        </div>
      </div>
    </div>
  );
};
