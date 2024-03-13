export const AddProduct2 = () => {
  return (
    <div className="h-[703px] bg-[#D6D8DB] w-[575px]  flex flex-col rounded-lg gap-5">
      <div className="h-[232px]  rounded-lg bg-white flex py-5 px-5 flex-col gap-5">
        <div>
          <label className="font-bold text-base">Ерөнхий ангилал</label>
          <input
            className="w-[525px] h-[56px] bg-[#F7F7F8] rounded-lg py-2 px-3 border  "
            id="angilal"
            type="text"
            placeholder="Сонгох"
          ></input>
        </div>
        <div>
          <label className="font-bold text-base">Дэд ангилал</label>
          <input
            className="w-[525px] h-[56px] bg-[#F7F7F8] border rounded-lg py-2 px-3 "
            id="angilal"
            type="text"
            placeholder="Сонгох"
          ></input>
        </div>
      </div>
      <div className="h-[232px]  rounded-lg bg-white flex py-5 px-5 flex-col gap-5">
        <p className="font-bold text-lg">Төрөл</p>
        <div className=" flex flex-row gap-5">
          <p className="text-sm">Өнгө</p>
          <button className=" h-[24px] w-[24px] bg-[#ECEDF0] rounded-xl">
            +
          </button>
        </div>
        <div className=" flex flex-row gap-5">
          <p className="text-sm">Хэмжээ</p>
          <button className=" h-[24px] w-[24px] bg-[#ECEDF0] rounded-xl">
            +
          </button>
        </div>
        <button className="h-[36px] w-[118px] font-bold border text-sm rounded-lg">
          Төрөл нэмэх
        </button>
      </div>
      <div className="h-[195px]  rounded-lg bg-white flex py-5 px-5 flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div>
            <label className="font-bold text-base">Таг</label>
            <input
              className="w-[525px] h-[56px] bg-[#F7F7F8] border rounded-lg py-2 px-3 "
              id="angilal"
              type="text"
              placeholder="Таг нэмэх..."
            ></input>
          </div>

          <p className="text-[#5E6166] text-sm">
            Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
