import Image from "next/image";

export const OrderDetailDeliveryPayment = () => {
  const delProds = [
    {
      label: "WOMEN'S HORSEBIT MULE Women’s horsebit mule",
      amount: 2,
      total: 677100,
    },
    {
      label: "WOMEN'S HORSEBIT MULE Women’s horsebit mule",
      amount: 1,
      total: 125700,
    },
  ];
  return (
    <div className="flex flex-col gap-[20px] basis-0 grow">
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
          <p className="font-semibold text-[16px] leading-[20px] text-[#121316]">
            Улаанбаатар, Сонгинохайрхан дүүрэг, 1-р хороо, 14r bair 8r orts 6r
            darvar
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
            {delProds.map((item, index) => (
              <div key={index} className="flex gap-[4px] justify-between">
                <div className="flex gap-[4px] w-[60%]">
                  <p className="basis-0 grow line-clamp-1 font-semibold text-[14px] leading-1 text-[#3F4145]">
                    {item.label}
                  </p>
                  <p className="font-semibold text-[16px] leading-[20px] text-[#5E6166]">
                    X{item.amount}
                  </p>
                </div>
                <p className="whitespace-nowrap font-semibold text-[16px] leading-[20px] text-[#3F4145]">
                  ₮ {item.total}
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
            <div className="flex justify-between">
              <p className="font-semibold text-[16px] leading-[20px] text-[#121316]">
                Нийт төлсөн дүн
              </p>
              <p className="whitespace-nowrap font-semibold text-[18px] leading-[24px] text-[#121316]">
                ₮ 807800
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
