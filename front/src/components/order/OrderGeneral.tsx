"use client";

import { KeyboardArrowRight, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export const OrderGeneral = () => {
  const label = [
    "Бүгд",
    "Шинэ захиалага",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ];

  const data = [
    {
      id: "#ddd",
      name: "zoloo",
      gmail: "zolooo sara",
      date: "2023-10-22",
      time: "10:20",
      payment: "1300",
    },
    {
      id: "#ddd",
      name: "zoloo",
      gmail: "zolooo sara",
      date: "2023-10-22",
      time: "10:20",
      payment: "1300",
    },
  ];

  const router = useRouter();

  return (
    <div className="w-full h-full bg-[#F7F7F8]">
      <div className="flex">
        {label.map((item, index) => {
          return (
            <div className="border-b-2 border-[#ECEDF0] hover:border-black cursor-pointer">
              <p
                className="py-6 px-8 text-sm text-[#3F4145] hover:text-[black]"
                key={index}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>

      <div className="p-10 flex flex-col gap-10">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button className="text-sm font-semibold py-2 px-4 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
              Өнөөдөр
            </button>
            <button className="text-sm font-semibold py-2 px-4 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
              7 хоног
            </button>
            <button className="text-sm font-semibold py-2 px-4 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
              Сараар
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Дугаар, Имэйл"
              className="w-[300px] rounded-lg pl-12 border py-1"
            />
            <Search className="absolute left-3 top-[5px]" />
          </div>
        </div>

        <div className="border-2 border-[#ECEDF0] rounded-xl overflow-hidden">
          <p className="p-6 text-xl bg-white font-bold">Захиалга</p>

          <div className="py-4 px-6 flex justify-between bg-[#f5f5f5] border-y-2">
            <div className="flex">
              <p className="text-sm font-semibold text-[#3F4145]">
                Захиалгын ID дугаар
              </p>
              <p className="text-sm font-semibold text-[#3F4145] pl-24">
                Үйлчлүүлэгч
              </p>
              <p className="text-sm font-semibold text-[#3F4145] pl-40">
                Огноо
              </p>
              <p className="text-sm font-semibold text-[#3F4145] pl-40">Цаг</p>
              <p className="text-sm font-semibold text-[#3F4145] pl-32">
                Төлбөр
              </p>
              <p className="text-sm font-semibold text-[#3F4145] pl-32">
                Статус
              </p>
            </div>

            <p className="text-sm font-semibold text-[#3F4145]">Дэлгэрэнгүй</p>
          </div>

          {data.map((item, index) => {
            return (
              <div className="bg-white px-6 py-4 flex border-b-2">
                <p className="text-[14px] font-semibold text-[#121316] pt-2">
                  {item.id}
                </p>
                <div className="pl-52">
                  <p className="text-[14px] font-semibold text-[#121316]">
                    {item.name}
                  </p>
                  <p className="text-[14px] font-normal text-[#121316]">
                    {item.gmail}
                  </p>
                </div>
                <p className="text-[14px] font-normal text-[#121316] pt-2 pl-[172px]">
                  {item.date}
                </p>
                <p className="text-[14px] font-normal text-[#121316] pt-2 pl-[122px]">
                  {item.time}
                </p>
                <p className="text-[14px] font-normal text-[#121316] pt-2 pl-[120px]">
                  {item.payment}
                </p>
                <p className="text-[14px] text-[#0A4E22] bg-[#C1E6CF] rounded-2xl px-3 mb-4 mt-2 ml-36">
                  hurgegdsen
                </p>

                <div
                  className="pl-[110px] pt-1 cursor-pointer"
                  onClick={() => {
                    router.push("/dashboard/order/detail");
                  }}
                >
                  <KeyboardArrowRight />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
