import Image from "next/image";

export const OrderDetailOrderedProd = () => {
  return (
    <div className="rounded-[12px] bg-[#F7F7F8] flex">
      <Image
        src="/orderedProd.png"
        alt="orderedProd"
        width={180}
        height={156}
        className="rounded-l-[12px]"
      ></Image>
      <div className="py-[16px] px-[24px]">
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#121316] font-bold text-2xl">
              WOMEN'S HORSEBIT MULE
            </p>
            <div>
              <p>2024-01-20</p>
              <div className="flex">
                <p>Бүтээгдэхүүний ID:</p>
                <p>30349049903</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p>Тоо ширхэг: 3</p>
              <p>* ₮225,700</p>
            </div>
            <p>₮677,100</p>
          </div>
        </div>
      </div>
    </div>
  );
};
