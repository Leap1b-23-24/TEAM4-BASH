export const AddProduct2 = () => {
  return (
    <div className="w-[575px] flex flex-col rounded-lg justify-between">
      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-bold text-base">Ерөнхий ангилал</label>
          <input
            className="w-[525px] h-[56px] bg-[#F7F7F8] rounded-lg py-2 px-3 border  "
            type="text"
            placeholder="Сонгох"
          ></input>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-bold text-base">Дэд ангилал</label>
          <input
            className="w-[525px] h-[56px] bg-[#F7F7F8] border rounded-lg py-2 px-3 "
            type="text"
            placeholder="Сонгох"
          ></input>
        </div>
      </div>
      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <p className="font-bold text-lg">Төрөл</p>
        <div className=" flex flex-row gap-6">
          <p className="text-sm pt-1">Өнгө</p>
          <button className="flex items-center justify-center h-[28px] w-[28px] bg-[#ECEDF0] text-xl rounded-[50%]">
            +
          </button>
        </div>
        <div className=" flex flex-row gap-6">
          <p className="text-sm pt-1">Хэмжээ</p>
          <button className="flex items-center justify-center h-[28px] w-[28px] bg-[#ECEDF0] text-xl rounded-[50%]">
            +
          </button>
        </div>
        <button className="h-[36px] w-[118px] font-semibold border text-sm rounded-lg">
          Төрөл нэмэх
        </button>
      </div>
      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-bold text-base">Таг</label>
            <input
              className="w-[525px] h-[56px] bg-[#F7F7F8] border rounded-lg py-2 px-3 "
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
