"use client";

import { KeyboardArrowRight, Search } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { CustomDeliveryStatus } from "../customs/CustomDeliveryStatus";
import { useProduct } from "../providers/ProductProvider";
import { useAuth } from "../providers/AuthProvider";

export const OrderGeneral = () => {
  const {
    deliveryStatus,
    address,
    dashboardOrderDetail,
    setDashboardOrderDetail,
  } = useProduct();
  const { allUser } = useAuth();

  const label = [
    "Бүгд",
    "Шинэ захиалага",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
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
                const user = allUser.filter(
                  (el) => el.email === item.deliveryAdd.email
                );
                const userName = user.map((item) => item.name);

                const userEmail = user.map((item) => item.email);

                return (
                  <tr key={index} className="bg-white border-b-2">
                    <td className="px-6 py-4 text-[14px] font-semibold text-[#121316]">
                      #{item._id.slice(0, 6)}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-[14px] font-semibold text-[#121316]">
                        {userName}
                      </p>
                      <p className="text-[14px] font-normal text-[#121316]">
                        {userEmail}
                      </p>
                    </td>
                    <td className="px-6 py-4 text-[14px] font-normal text-[#121316]">
                      <div className="flex justify-center">
                        {new Date(item.createdAt).toDateString().slice(0, 10)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[14px] font-normal text-[#121316]">
                      <div className="flex justify-center">
                        {new Date(item.createdAt).toDateString().slice(11, 16)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[14px] font-normal text-[#121316]">
                      <div className="flex justify-center">
                        {Intl.NumberFormat().format(item.sumPaid)} ₮
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        <CustomDeliveryStatus label={item.status} />
                      </div>
                    </td>

                    <td
                      className="px-6 py-4 cursor-pointer "
                      onClick={() => {
                        router.push("/dashboard/order/detail");
                        setDashboardOrderDetail(item);
                      }}
                    >
                      <div className="flex justify-center">
                        <KeyboardArrowRight />
                      </div>
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
