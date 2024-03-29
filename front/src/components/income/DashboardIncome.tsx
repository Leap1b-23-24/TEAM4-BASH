"use client";

import {
  CalendarToday,
  FileDownloadOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { useProduct } from "../providers/ProductProvider";
import { useAuth } from "../providers/AuthProvider";

export const DashboardIncome = () => {
  const { address } = useProduct();
  const { allUser } = useAuth();

  const arr = address.map((item, index) => item.toCart.map((item) => item));

  console.log(address);

  const sum1 = arr.reduce(
    (sum, el) =>
      sum +
      el.reduce(
        (total, product) => total + product.count * product.sel.mainPrice,
        0
      ),
    0
  );

  return (
    <div className="flex justify-center w-full bg-[#F7F7F8]">
      <div className="py-4 flex flex-col gap-6 ">
        <div className="border-2 border-[#ECEDF0] rounded-2xl overflow-hidden">
          <div className="p-6 flex justify-between bg-white border-b-2">
            <p className="text-xl font-bold">Орлого</p>
            <div className="flex border-2 bg-[#1C20240A] rounded-lg px-4 py-2 gap-2 items-center">
              <FileDownloadOutlined />
              <p className="text-sm font-semibold">Хуулга татах</p>
            </div>
          </div>

          <div className="p-6 flex justify-between bg-white">
            <p className="text-[28px] font-bold">
              {Intl.NumberFormat().format(sum1)}₮
            </p>

            <div className="flex gap-2">
              <button className="text-sm font-semibold py-2 px-4 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
                Өнөөдөр
              </button>
              <button className="text-sm font-semibold py-2 px-6 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
                7 хоног
              </button>
              <button className="text-sm font-semibold text-[#3F4145] py-2 px-4 border-2 rounded-xl  hover:text-white hover:bg-[#18BA51] bg-white flex gap-2 items-center">
                <CalendarToday className="w-4 h-4" />
                <p>Сараар</p>
                <KeyboardArrowDownOutlined />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden">
          <div className="py-4 px-6 flex bg-white border-b-2">
            <p className="text-sm font-semibold text-[#3F4145]">
              Захиалгын ID дугаар
            </p>
            <p className="text-sm font-semibold text-[#3F4145] pl-24">
              Захиалагч
            </p>
            <p className="text-sm font-semibold text-[#3F4145] pl-60">Төлбөр</p>
            <p className="text-sm font-semibold text-[#3F4145] pl-40">Огноо</p>
          </div>

          <div>
            {address.map((item, index) => {
              const user = allUser.filter(
                (el) => el.email === item.deliveryAdd.email
              );

              const userName = user.map((item) => item.name);

              const userEmail = user.map((item) => item.email);
              return item.toCart.map((item) => {
                return (
                  <div
                    className="bg-white px-6 py-4 flex border-b-2 relative"
                    key={index}
                  >
                    <p className="text-[14px] font-semibold text-[#121316] pt-2">
                      #{item.sel._id?.slice(0, 8)}
                    </p>

                    <div className="pl-[164px]">
                      <p className="text-base text-[#121316] whitespace-nowrap font-semibold">
                        {userName}
                      </p>
                      <p className="text-[14px] font-normal text-[#121316]">
                        {userEmail}
                      </p>
                    </div>
                    <p className="text-[16px] font-normal text-[#121316] pt-2 absolute right-[200px]">
                      {Intl.NumberFormat().format(item.sel.mainPrice)}₮
                    </p>
                    <p className="text-[14px] font-normal text-[#121316] pt-2 whitespace-nowrap right-4 absolute">
                      {item.sel.createdAt?.toString().slice(0, 10)}
                    </p>
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
