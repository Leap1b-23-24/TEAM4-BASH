import {
  FavoriteBorder,
  ShoppingCartOutlined,
  ZoomInOutlined,
} from "@mui/icons-material";

type CustomProps = {
  image: string;
  label: string;
  price: number;
};
export const CustomItem = (props: CustomProps) => {
  const { image, label, price } = props;

  return (
    <div className="relative">
      <div className="w-full border-2 rounded-md overflow-hidden">
        <div className="relative">
          <img src={image} className="w-[230px] h-[230px] object-cover" />
          <button className="absolute bottom-3 left-16 text-[12px] text-white py-[6px] rounded px-3 bg-[#08D15F] font-[500] font-sans">
            View Details
          </button>
        </div>
        <div className="group p-5 flex flex-col gap-8 items-center hover:bg-[#2F1AC4]">
          <p className="text-[18px] font-bold text-[#FB2E86] group-hover:text-white">
            {label}
          </p>
          <p className="text-[18px] font-bold text-[#151875] group-hover:text-white">
            {price}₮
          </p>
        </div>
      </div>
      <div className="absolute top-3 left-3 flex gap-4">
        <div className="bg-[#EEEFFB] rounded-[50%]">
          <ShoppingCartOutlined className="text-[#2F1AC4] p-1" />
        </div>

        <FavoriteBorder className="text-[#1389FF]" />
        <ZoomInOutlined className="text-[#1389FF]" />
      </div>
    </div>
  );
};
