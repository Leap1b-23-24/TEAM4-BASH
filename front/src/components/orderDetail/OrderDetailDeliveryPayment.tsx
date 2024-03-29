import Image from "next/image";
import { useProduct } from "../providers/ProductProvider";

export const OrderDetailDeliveryPayment = () => {
  const { dashboardOrderDetail } = useProduct();

  const sum =
    dashboardOrderDetail?.toCart.reduce((total, num) => {
      return total + num.sel.mainPrice * num.count;
    }, 0) ?? 0;

  return (
    <div className="flex flex-col gap-[30px] basis-0 grow">
      <div className="bg-[#FFFFFF] border-[1px] border-[#ECEDF0] rounded-[12px]">
        <div className=" flex flex-col gap-[20px]">
          <div className="pt-[20px] px-[24px]">
            <p className="text-base text-[#121316] font-normal">
              Хүргэлтийн мэдээлэл
            </p>
          </div>
          <div className="h-[1px] bg-[#ECEDF0]"></div>
        </div>

        <div className="px-[24px] py-[20px] flex flex-col gap-[4px]">
          <p className="text-base text-[#3F4145]">Гэр</p>
          <p className="font-semibold text-[16px] leading-[20px] text-[#121316] mb-10">
            {/* abcjsdb */}
            {dashboardOrderDetail?.deliveryAdd.address}
          </p>
        </div>
      </div>
      <div className="bg-[#FFFFFF] border-[1px] border-[#ECEDF0] rounded-[12px]">
        <div className=" flex flex-col gap-[20px]">
          <div className="pt-[20px] px-[24px]">
            <p className="text-base text-[#121316] font-normal">
              Төлбөрийн мэдээлэл
            </p>
          </div>
          <div className="h-[1px] bg-[#ECEDF0]"></div>
        </div>

        <div className="px-[24px] py-[20px] flex flex-col gap-[4px]">
          <p className="text-base text-[#3F4145]">Бүтээгдэхүүн</p>
          <div className="flex flex-col gap-[16px]">
            {dashboardOrderDetail?.toCart.map((item, index) => (
              <div key={index} className="flex gap-[4px] justify-between">
                <div className="flex gap-[4px] w-[60%]">
                  <p className="basis-0 grow line-clamp-1 font-semibold text-[14px] leading-1 text-[#3F4145]">
                    {item.sel.productName}
                  </p>
                  <p className="font-semibold text-[16px] leading-[20px] text-[#5E6166]">
                    X{item.count}
                  </p>
                </div>
                <p className="whitespace-nowrap font-semibold text-[16px] leading-[20px] text-[#3F4145]">
                  ₮{" "}
                  {Intl.NumberFormat().format(item.sel.mainPrice * item.count)}
                </p>
              </div>
            ))}
            <div className="flex justify-between">
              <div className="w-[60%] flex justify-between items-center">
                <p className="font-semibold text-[14px] leading-[16px] text-[#3F4145]">
                  Хүргэлт
                </p>
                <div className="w-[24px] h-[24px] flex items-center">
                  <Image
                    src="/deliveryCar.png"
                    alt="delivery car"
                    width={22}
                    height={14}
                  ></Image>
                </div>
              </div>
              <p className="font-semibold text-[16px] leading-[20px] text-[#3F4145]">
                ₮ 5000
              </p>
            </div>
            <div className="h-[1px] bg-[#ECEDF0]"></div>
            <div className="flex justify-between mb-6">
              <p className="font-semibold text-[16px] leading-[20px] text-[#121316]">
                Нийт төлсөн дүн
              </p>
              <p className="whitespace-nowrap font-semibold text-[18px] leading-[24px] text-[#121316]">
                ₮{Intl.NumberFormat().format(sum)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
