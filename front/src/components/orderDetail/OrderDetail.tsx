import Image from "next/image";
import { OrderDetailOrderedProd } from "./OrderDetailOrderedProd";

export const OrderDetail = () => {
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
      img: "./orderedProd.png",
      label: "WOMEN'S HORSEBIT MULE",
      date: "2024-01-20",
      prodId: 30349049903,
      amount: 3,
      price: 225700,
      total: 677100,
    },
  ];
  return (
    <div>
      <div className="flex bg-white">
        <div className="py-[12px] px-[16px] rounded-[12px] cursor-pointer">
          <div className="w-[20px] h-[20px] flex justify-center items-center">
            <img
              className="w-[8.95px] h-[15.64px]"
              src="./orderdetail.png"
            ></img>
          </div>
        </div>

        <div className="py-[12px] px-[16px] rounded-[12px]">
          <p className="text-[#121316] font-normal text-base">
            Захиалгын дэлгэрэнгүй
          </p>
        </div>
      </div>

      <div className="px-[24px] py-[15px] bg-[#FFFFFF] rounded-[12px] border-[1px] border-[#ECEDF0] ">
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
            <div className="bg-[#ECEDF0] p-[4px] rounded-[999px]">
              <select
                className="bg-[#ECEDF0] py-[2px] px-[6px] rounded-[999px] text-[#3F4145] font-normal text-sm"
                name="delivery"
                id="deliveryStatus"
              >
                <option value="preparing">Бэлтгэгдэж байна</option>
                <option value="delivering">Хүргэгдэж байна</option>
                <option value="delivered">Хүргэгдсэн</option>
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
            {orderedProds.map((item) => (
              <OrderDetailOrderedProd
                img={item.img}
                label={item.label}
                date={item.date}
                prodId={item.prodId}
                amount={item.price}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
