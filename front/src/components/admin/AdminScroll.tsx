type ScrollProps = {
  image: string;
  label: string;
  price: number;
  color: string;
};
export const AdminScroll = (props: ScrollProps) => {
  const { image, label, price, color } = props;

  return (
    <div className="w-[full]  border-b-2 flex flex-row gap-[60px] pr-5 py-2">
      <div className=" snap-start flex flex-row gap-2">
        <img src={image} className="w-[87px] h-[87px] px-1 "></img>
        <div className="flex flex-col gap-2">
          <p className="text-[14px] font-bold ">{label}</p>
          <p className="text-[12px] text-[#A1A8C1]">Өнгө:{color}</p>
        </div>
      </div>
      <p className="text-[14px] text-[#151875] font-bold"> {price}₮</p>
    </div>
  );
};
