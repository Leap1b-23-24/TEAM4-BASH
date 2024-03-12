export const StepOne = () => {
  return (
    <div className="w-full h-screen bg-white">
      <img src="pinecone.png" className="py-12 px-10" />

      <div className="flex flex-col justify-center items-center gap-40">
        <ul className="steps w-[60%]">
          <li className="step step-neutral text-[14px] font-semibold">
            Дэлгүүрийн нэр
          </li>
          <li className="step text-[14px] font-semibold">Бүс нутаг</li>
          <li className="step text-[14px] font-semibold">Нэмэлт мэдээлэл</li>
        </ul>

        <div>
          <p className="text-[32px] font-semibold text-[#121316] pb-4">
            Дэлгүүрийн мэдээлэл
          </p>
          <p className="text-[16px] font-semibold text-[#121316]">
            Танай дэлгүүрийн нэр юу вэ?
          </p>

          <input type="text" placeholder="Дэлгүүрийн нэр" />

          <div></div>
        </div>
      </div>
    </div>
  );
};
