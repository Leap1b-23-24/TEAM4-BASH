import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { CustomInput } from "../customs/CustomInput";

export const AddProductOne = () => {
  return (
    <div className="w-[563px] flex flex-col gap-6">
      <div className="basis-0 w-full grow bg-white p-6 rounded-xl flex flex-col gap-4">
        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Бүтээгдэхүүний нэр</p>

          <CustomInput placeholder="Нэр" />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Нэмэлт мэдээлэл</p>
          <CustomInput placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон" />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Барааны код</p>
          <CustomInput placeholder="#1122" />
        </div>
      </div>

      <div className="w-full rounded-xl p-6 gap-3 flex flex-col bg-white">
        <p className="font-[600] text-[18px]">Бүтээгдэхүүний зураг</p>

        <div className="flex items-center gap-3">
          <div className="border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px] relative"></div>
          <div className="absolute ml-[52px]">
            <AddPhotoAlternateOutlined />
          </div>

          <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center">
            <p className="text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
              +
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-6 rounded-xl flex gap-4 bg-white">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
          <CustomInput placeholder="Нэр" />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
          <CustomInput placeholder="Нэр" />
        </div>
      </div>
    </div>
  );
};
