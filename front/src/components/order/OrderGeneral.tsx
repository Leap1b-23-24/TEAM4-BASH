"use client";

import { KeyboardArrowRight, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { CustomDeliveryStatus } from "../customs/CustomDeliveryStatus";
import { useProduct } from "../providers/ProductProvider";

export const OrderGeneral = () => {
  const { deliveryStatus, address } = useProduct();

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
      id: "#1234",
      name: "zoloo",
      gmail: "zolooo sara",
      date: "2023-10-22",
      time: "10:20",
      payment: "1300",
    },
  ];

  const tableHeader = [
    "Захиалгын ID дугаар",
    "Үйлчлүүлэгч",
    "Огноо",
    "Цаг",
    "Төлбөр",
    "Статус",
    "Дэлгэрэнгүй",
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

        <div className="border-2 border-[#ECEDF0] rounded-xl">
          <p className="p-6 text-xl bg-white font-bold">Захиалга</p>
          <table className="w-full">
            <thead>
              <tr className="bg-[#f5f5f5] border-y-2 ">
                {tableHeader.map((item) => (
                  <th className="py-[12px] px-[24px] text-sm font-semibold text-[#3F4145]">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {address.map((item, index) => {
                return (
                  <tr key={index} className="bg-white border-b-2">
                    <td className="px-6 py-4 text-[14px] font-semibold text-[#121316]">
                      {item.id}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[14px] font-semibold text-[#121316]">
                        {item.name}
                      </p>
                      <p className="text-[14px] font-normal text-[#121316]">
                        {item.gmail}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-[14px] font-normal text-[#121316]">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 text-[14px] font-normal text-[#121316]">
                      {item.time}
                    </td>
                    <td className="px-6 py-4 text-[14px] font-normal text-[#121316]">
                      {item.payment} ₮
                    </td>
                    <td className="px-6 py-4">
                      <CustomDeliveryStatus
                        label={
                          deliveryStatus === "new order"
                            ? "Шинэ захиалга"
                            : deliveryStatus === "preparing"
                            ? "Бэлтгэгдэж байна"
                            : deliveryStatus === "delivering"
                            ? "Хүргэлтэнд гарсан"
                            : deliveryStatus === "delivered"
                            ? "Хүргэгдсэн"
                            : deliveryStatus === "cancelled"
                            ? "Цуцлагдсан"
                            : ""
                        }
                      />
                    </td>

                    <td
                      className="px-6 py-4 cursor-pointer "
                      onClick={() => {
                        router.push("/dashboard/order/detail");
                      }}
                    >
                      <KeyboardArrowRight />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
