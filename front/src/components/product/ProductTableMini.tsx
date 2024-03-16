import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";

function OneTable({
  ProductName,
  ProductImage,
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
      <div className="w-[156.8px] pl-[20px] h-fit flex items-center flex-row gap-3">
        <div className="w-[full] rounded-[50%] overflow-hidden">
          <img src={ProductImage} className="w-16 h-10" />
        </div>
        <div className="w-full h-fit flex flex-col gap-1">
          <p className="text-[14px] font-[600] text-[#121316]">{ProductName}</p>
          <p className="text-[12px] font-[400] text-[#5E6166]">
            {ProductNumber}
          </p>
        </div>
      </div>
      <div className="w-[214px] pl-[46px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {Category}
      </div>
      <div className="w-[156.8px] pl-[64px] h-fit flex items-center text-[14px] font-[400] text-[#121316] font-mono">
        {Price}₮
      </div>
      <div className="w-[156.8px] pl-[88px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {Total}
      </div>
      <div className="w-[156.8px] pl-[112px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {SoldTotal}
      </div>
      <div className="pl-[132px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {AddDate}
      </div>
      <div className="flex gap-6 pl-20">
        <DeleteOutlineOutlined className="text-[#1C20243D]" />
        <EditOutlined className="text-[#1C20243D]" />
      </div>
    </section>
  );
}
export default OneTable;
