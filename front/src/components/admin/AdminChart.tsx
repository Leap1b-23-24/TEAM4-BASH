import Image from "next/image";
import { BarChart } from "../customs/BarChart";

export const AdminChart = () => {
  return (
    <div className="basis-0 grow flex flex-col rounded-xl gap-[20px]">
      <div className="basis-0 grow bg-[#FFFFFF] py-[16px] px-[24px] rounded-[12px] flex flex-col gap-[24px]">
        <div className="flex flex-col justify-between mb-2 gap-4">
          <div className="flex justify-between">
            <p className="text-[18px] leading-[24px] font-semibold">
              Борлуулалт
            </p>
            <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer">
              <img className="w-[7.41px] h-[12px]" src="./rightArr.svg"></img>
            </div>
          </div>
          <Image
            width={517}
            height={257}
            src="/Borluulalt.png"
            alt="product image"
          ></Image>
        </div>
        <BarChart />
      </div>
      <div className="basis-0 grow bg-[#FFFFFF] py-[16px] px-[24px] rounded-[12px] flex flex-col gap-[24px]">
        <div className="flex justify-between mb-[20px]">
          <p className="text-[18px] leading-[24px] font-semibold">
            Идэвхтэй бүс нутаг
          </p>
          <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer">
            <img className="w-[7.41px] h-[12px]" src="./rightArr.svg"></img>
          </div>
        </div>
        <Image
          width={517}
          height={257}
          src="/activity.png"
          alt="product image"
          className="object-cover"
        ></Image>
      </div>
    </div>
  );
};
