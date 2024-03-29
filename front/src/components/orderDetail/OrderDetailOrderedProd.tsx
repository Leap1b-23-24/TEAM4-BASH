import Image from "next/image";

type OrderDetailOrderedProdProps = {
  img: string;
  label: string;
  date: string;
  prodId: string;
  amount: number;
  price: string;
  total: string;
};

export const OrderDetailOrderedProd = (props: OrderDetailOrderedProdProps) => {
  const { img, label, date, prodId, amount, price, total } = props;
  return (
    <div className="rounded-[12px] bg-[#F7F7F8] flex">
      <Image
        src={img}
        alt="orderedProd"
        width={180}
        height={156}
        className="rounded-l-[12px]"
      ></Image>
      <div className="py-[16px] px-[24px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#121316] font-bold text-2xl line-clamp-1 ">
              {label}
            </p>
            <div className="text-[#3F4145] font-normal text-sm">
              <p>{date}</p>
              <div className="flex">
                <p>Бүтээгдэхүүний ID:</p>
                <p>{prodId}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="flex text-[#121316] font-normal text-base">
                <p className="whitespace-nowrap">Тоо ширхэг:</p>
                <p>{amount}</p>
              </div>
              <div className="flex text-[#3F4145] font-normal text-sm">
                <p>*</p>
                <p className="whitespace-nowrap">₮ {price}</p>
              </div>
            </div>
            <p className="whitespace-nowrap flex text-[#121316] font-semibold text-[18px] leading-[24px]">
              ₮ {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
