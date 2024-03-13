"use client";

import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export const AddProduct = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-[#F7F7F8]">
      <div className="flex py-2 bg-white">
        <div
          onClick={() => {
            router.push("/dashboard/product");
          }}
          className="cursor-pointer"
        >
          <div className="pt-3">
            <ChevronLeft className="w-[36px] h-[36px]" />
          </div>
        </div>
        <p className="text-[18px] font-normal py-4 px-5">Бүтээгдэхүүн нэмэх</p>
      </div>

      <div className="p-8 flex gap-20">
        <div className="w-[563px] flex flex-col gap-6">
          <div className="basis-0 w-full grow bg-white border-2 p-6 rounded-xl flex flex-col gap-4">
            <div className="gap-2 flex flex-col">
              <p className="text-[14px] font-semibold">Бүтээгдэхүүний нэр</p>
              <input
                type="text"
                placeholder="Нэр"
                className="bg-[#F7F7F8] w-full h-[44px] rounded-lg pl-4 border-2"
              />
            </div>

            <div className="gap-2 flex flex-col">
              <p className="text-[14px] font-semibold">Нэмэлт мэдээлэл</p>
              <input
                type="text"
                placeholder="Гол онцлог, давуу тал"
                className="bg-[#F7F7F8] w-full h-[70px] rounded-lg pl-4 border-2"
              ></input>
            </div>

            <div className="gap-2 flex flex-col">
              <p className="text-[14px] font-semibold">Барааны код</p>
              <input
                type="text"
                placeholder="#12345"
                className="bg-[#F7F7F8] w-full h-[44px] rounded-lg pl-4 border-2"
              ></input>
            </div>
          </div>

          <div className="w-full border-2 rounded-xl     p-6 gap-4 flex flex-col bg-white">
            <p>Бүтээгдэхүүний зураг</p>

            <div className="flex items-center gap-3">
              <div className="border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px] relative"></div>
              <img src="photo.png" className="w-[18px] absolute ml-14" />

              <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center">
                <p className="text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
                  +
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 border-2 rounded-xl flex gap-4 bg-white">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
              <input
                type="text"
                placeholder="Үндсэн үнэ"
                className="bg-[#F7F7F8] h-12 border-2 rounded-lg pl-4"
              ></input>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
              <input
                type="text"
                placeholder="Үндсэн үнэ"
                className="bg-[#F7F7F8] h-12 border-2 rounded-lg pl-4"
              ></input>
            </div>
          </div>
        </div>

        {/* <div className="w-[575px] border-2 border-black">
          <div className="w-full p-6 border-2 rounded-xl flex flex-col gap-4 bg-white">
            <div className="flex flex-col gap-2 w-full">
              <p className="text-[16px] font-semibold font-inter">
                Ерөнхий ангилал
              </p>
              <input
                type="text"
                placeholder="Үндсэн үнэ"
                className="bg-[#F7F7F8] h-12 border-2 rounded-xl pl-4"
              ></input>
            </div>

            <div className="flex flex-col gap-2 w-full">
              <p className="text-[16px] font-semibold font-inter">
                Дэд ангилал
              </p>
              <input
                type="text"
                placeholder="Үндсэн үнэ"
                className="bg-[#F7F7F8] h-12 border-2 rounded-xl pl-4"
              ></input>
            </div>
          </div>
        </div> */}
      </div>

      <div className="p-8 flex justify-end gap-5">
        <button className="border-2 px-6 py-3 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Ноорог
        </button>

        <button className="border-2 px-6 py-3 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Нийтлэх
        </button>
      </div>
    </div>
  );
};
