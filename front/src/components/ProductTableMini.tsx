function OneTable({
  img,
  ProductName,
  ProductNumber,
  Category,
  Price,
  Total,
  SoldTotal,
  AddDate,
}: any) {
  return (
    <section className="flex flex-row items-center py-[16px]">
      <div className="w-[68px] h-fit flex justify-center items-center ">
        <input type="checkbox" className="w-[20px] h-[20px]" />
      </div>
      <div className="w-[156.8px] pl-[24px] h-fit flex items-center flex-row gap-3">
        <img src={`${img}`} alt="" className="w-10 h-10" />
        <div className="w-full h-fit flex flex-col gap-1">
          <p className="text-[14px] font-[600] text-[#121316]">{ProductName}</p>
          <p className="text-[12px] font-[400] text-[#5E6166]">
            {ProductNumber}
          </p>
        </div>
      </div>
      <div className="w-[214px] pl-[24px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {Category}
      </div>
      <div className="w-[156.8px] pl-[24px] h-fit flex items-center text-[14px] font-[400] text-[#121316]">
        {Price}
      </div>
      <div className="w-[156.8px] pl-[24px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {Total}
      </div>
      <div className="w-[156.8px] pl-[24px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {SoldTotal}
      </div>
      <div className="w-[156.8px] pl-[24px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {AddDate}
      </div>
    </section>
  );
}
export default OneTable;
