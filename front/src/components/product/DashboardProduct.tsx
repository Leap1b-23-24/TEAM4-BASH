export const DashboardProduct = () => {
  return (
    <div className="w-full h-full bg-[#F7F7F8]">
      <div className="flex">
        <p className="py-6 px-8 text-[14px] text-[#3F4145] hover:text-[black] border-b-2 hover:border-black border-[#ECEDF0]">
          Бүтээгдэхүүн
        </p>
        <p className="py-6 px-8 text-sm text-[#3F4145] hover:text-[black] border-b-2 hover:border-black border-[#ECEDF0]">
          Ангилал
        </p>
      </div>

      <div className="p-8 flex flex-col gap-6">
        <button className="py-3 rounded-xl w-[280px] text-[16px] text-white bg-black">
          + Бүтээгдэхүүн нэмэх
        </button>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <select className="w-[145px] h-10 pl-6 rounded-lg text-[#3F4145] border">
                <option>Ангилал</option>
              </select>

              <select className="w-[113px] h-10 text-center rounded-lg text-[#3F4145] border">
                <option>Үнэ</option>
              </select>

              <select className="w-[140px] h-10 pl-6 rounded-lg text-[#3F4145] border">
                <option>Сараар</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Бүтээгдэхүүний нэр, SKU, UPC"
              className="w-[415px] h-10 rounded-lg pl-16 border"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
