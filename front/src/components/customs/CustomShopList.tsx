import { Card } from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomInRounded,
} from "@mui/icons-material";

type ShopListProps = {
  image: string[];
  label: string;
  price: number;
  color: string[];
  additionInfo: string;
};

export const CustomShopList = (props: ShopListProps) => {
  const { label, price, color, additionInfo, image } = props;
  return (
    <div className="w-full">
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
                    ></p>
                  );
                })}
              </div>
            </div>

            <p className="text-[#111C85] text-[16px] font-[800]">${price}</p>

            <p className="font-[400] text-[#9295AA] text-[18px]">
              {additionInfo}
            </p>
          </div>

          <div className="flex gap-6 pt-2">
            <div className="w-9 h-9 bg-[#f7f3f2] rounded-[50%] flex items-center justify-center">
              <ShoppingCartOutlined className="text-[#535399]" />
            </div>
            <div className="w-9 h-9 bg-[#f7f3f2] rounded-[50%] flex items-center justify-center">
              <FavoriteBorder className="text-[#535399]" />
            </div>
            <div className="w-9 h-9 bg-[#f7f3f2] rounded-[50%] flex items-center justify-center">
              <ZoomInRounded className="text-[#535399]" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
