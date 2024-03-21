import { Card } from "@mui/material";
import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomInRounded,
} from "@mui/icons-material";

type ShopListProps = {
  image: string;
  label: string;
  price: number;
  sell: number;
  additionInfo: string;
};

export const CustomShopList = (props: ShopListProps) => {
  const { label, price, sell, additionInfo, image } = props;
  return (
    <div className="w-full">
      <Card
        sx={{
          p: 2,
          display: "flex",
          gap: 3,
          overflow: "hidden",
          borderRadius: 3,
        }}
      >
        <img src={image} className="w-[313px] h-[217px] object-cover" />
        <div className="flex flex-col justify-center gap-3">
          <div className="flex gap-10 items-center">
            <p className="text-[#111C85] text-[20px] font-[800]">{label}</p>
            <div className="flex gap-1">
              <p className="bg-[#E60584] w-3 h-3 rounded-[50%]"></p>
              <p className="bg-[#DE9034] w-3 h-3 rounded-[50%]"></p>
              <p className="bg-[#111C85] w-3 h-3 rounded-[50%]"></p>
            </div>
          </div>

          <div className="flex gap-4">
            <p className="text-[#111C85] text-[16px] font-[800]">${price}</p>
            <p className="text-[#FF2AAA] text-[16px] font-[800]">${sell}</p>
          </div>

          <p className="font-[400] text-[#9295AA] text-[18px]">
            {additionInfo}
          </p>

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
