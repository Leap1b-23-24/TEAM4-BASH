import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomInOutlined,
} from "@mui/icons-material";
import { Box, Card, Modal } from "@mui/material";
import { useState } from "react";
import { useProduct } from "../providers/ProductProvider";
import Image from "next/image";

type CustomProps = {
  image: string[];
  label: string;
  price: number;
};

export const CustomItem = (props: CustomProps) => {
  const { image, label, price } = props;
  const [photo, setPhoto] = useState(false);

  return (
    <Card>
      <div className="relative group">
        <div className="w-[250px]">
          <div className="relative group flex w-full justify-center">
            <img
              src={image}
              className="h-[240px] object-cover mix-blend-multiply"
              onClick={() => {
                setPhoto(true);
              }}
            />
            <button className="group-hover:opacity-[1] opacity-0 absolute bottom-3 left-18 text-[12px] text-white py-[6px] rounded px-3 bg-[#08D15F] font-[500] font-sans">
              View Details
            </button>
          </div>

          <Modal open={photo}>
            <Box></Box>
          </Modal>

          <div className="p-5 flex flex-col gap-6 items-center group-hover:bg-[#2F1AC4]">
            <p className="text-[18px] font-bold text-[#FB2E86] group-hover:text-white line-clamp-1">
              {label}
            </p>
            <p className="text-[18px] font-bold text-[#151875] group-hover:text-white">
              {price}₮
            </p>
          </div>
        </div>
        <div className="group absolute top-3 left-3">
          <div className="flex gap-4 group-hover:opacity-[1] opacity-0">
            <div className="bg-[#EEEFFB] rounded-[50%]">
              <ShoppingCartOutlined className="text-[#2F1AC4] p-1" />
            </div>

            <FavoriteBorder className="text-[#1389FF]" />
            <ZoomInOutlined className="text-[#1389FF]" />
          </div>
        </div>
      </div>
    </Card>
  );
};
