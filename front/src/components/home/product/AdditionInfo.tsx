import { useProduct } from "../../providers/ProductProvider";
import { DetailHead } from "./DetailHead";

export const AdditionInfo = () => {
  const { detail } = useProduct();

  return (
    <div className="flex flex-col gap-3">
      <p className="text-[#151875] text-[24px] font-[800]">
        {detail?.productName}
      </p>
      <p className="text-[16px] text-[#A9ACC6] font-[800]">
        {detail?.additionInfo}
      </p>
    </div>
  );
};
