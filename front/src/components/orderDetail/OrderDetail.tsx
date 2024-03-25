"use client";

import { OrderDetailOrderedProd } from "./OrderDetailOrderedProd";
import { OrderDetailDeliveryPayment } from "./OrderDetailDeliveryPayment";
import { ChevronLeft, Dashboard } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useProduct } from "../providers/ProductProvider";

export const OrderDetail = () => {
  const { deliveryStatus, setDeliveryStatus } = useProduct();

  const orderedProds = [
    {
      img: "/orderedProd.png",
      label: "WOMEN'S HORSEBIT MULE",
      date: "2024-01-20",
      prodId: 30349049903,
      amount: 3,
      price: 225700,
      total: 677100,
    },
    {
      img: "/orderedProd.png",
      label: "WOMEN'S HORSEBIT MULE",
      date: "2024-01-01",
      prodId: 1234567890,
      amount: 1,
      price: 125700,
      total: 125700,
    },
  ];

  const status = [
    "Шинэ захиалга",
    "Бэлтгэгдэж байна",
    "Хүргэлтэнд гарсан",
    "Хүргэгдсэн",
    "Цуцлагдсан",
  ];

  const router = useRouter();
  return (
    <div className="w-full h-screen">
      <div className="flex bg-white items-center py-2">
        <div
          onClick={() => {
            router.push("/dashboard/order");
          }}
          className="cursor-pointer"
        >
          <ChevronLeft className="w-[36px] h-[36px]" />
        </div>

        <div className="py-[12px] px-[16px] rounded-[12px]">
          <p className="text-[#121316] font-normal text-base">
            Захиалгын дэлгэрэнгүй
          </p>
        </div>
      </div>

      <div className="p-[20px] flex gap-[30px] bg-[#F7F7F8] h-full">
        <div className="px-[24px] py-[15px] bg-[#FFFFFF] rounded-[12px] border-[1px] border-[#ECEDF0] basis-0 grow">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center justify-between gap-[4px]">
              <div className="flex flex-col gap-[4px]">
                <p className="text-[#3F4145] font-normal text-base">
                  Захиалгын ID дугаар:
                </p>
                <p className="text-[#121316] font-semibold text-[16px] leading-[20px]">
                  #12345678
                </p>
              </div>
              <div>
                <select
                  className="rounded-[999px] p-[4px] w-fit rounded-[999px] text-[#3F4145] font-normal text-sm cursor-pointer"
                  name="delivery"
                  id="deliveryStatus"
                  onChange={(e) => setDeliveryStatus(e.target.value)}
                  style={{
                    backgroundColor:
                      deliveryStatus === "delivered"
                        ? "#C1E6CF"
                        : deliveryStatus === "delivering"
                        ? "#B7DDFF"
                        : deliveryStatus === "preparing"
                        ? "#ECEDF0"
                        : deliveryStatus === "new order"
                        ? "#fff"
                        : "#FCBABE",

                    color:
                      deliveryStatus === "delivered"
                        ? "#0A4E22"
                        : deliveryStatus === "delivering"
                        ? "#1890FF"
                        : deliveryStatus === "preparing"
                        ? "#3F4145"
                        : deliveryStatus === "new order"
                        ? "#3F4145"
                        : "#3F4145",
                  }}
                >
                  {status.map((item) => (
                    <option
                      className="py-[2px] px-[6px] "
                      value={`${
                        item === "Шинэ захиалга"
                          ? "new order"
                          : item === "Бэлтгэгдэж байна"
                          ? "preparing"
                          : item === "Хүргэлтэнд гарсан"
                          ? "delivering"
                          : item === "Хүргэгдсэн"
                          ? "delivered"
                          : item === "Цуцлагдсан"
                          ? "cancelled"
                          : "hooson"
                      }`}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-[4px]">
              <div className="flex text-[#3F4145] font-normal text-base">
                <p>Захиалагч:</p>
                <p>Хувь хүн</p>
              </div>
              <div className="flex">
                <p className="text-[#121316] font-semibold text-[16px] leading-[20px]">
                  Solongo Zoloo-
                </p>
                <p className="text-[#121316] font-normal text-sm">
                  Zoloosoko0526@gmail.com, 88556061
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[16px]">
              {orderedProds.map((item, index) => (
                <OrderDetailOrderedProd
                  key={index}
                  img={item.img}
                  label={item.label}
                  date={item.date}
                  prodId={item.prodId}
                  amount={item.amount}
                  price={Intl.NumberFormat().format(item.price)}
                  total={Intl.NumberFormat().format(item.total)}
                />
              ))}
            </div>
          </div>
        </div>
        <OrderDetailDeliveryPayment />
      </div>
    </div>
  );
};
