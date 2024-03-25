type ScrollProps = {
  image: string;
  label: string;
  price: number;
  color: string[];
};
export const AdminScroll = (props: ScrollProps) => {
  const { image, label, price, color } = props;

  return (
    <div className="w-[full] h-[full] border-b-2 flex flex-row  pb-4 gap-20  pl-2">
      <div className=" snap-start flex flex-row gap-3">
        <img src={image} className="w-[87px] h-[87px]  "></img>
        <div className="flex flex-col gap-2 w-[120px]">
          <p className="text-[14px] font-bold ">{label}</p>
          <p className="text-[12px] text-[#A1A8C1] flex gap-1">
            {color.map((item, index) => {
              return (
                <p
                  className="w-3 h-3 rounded-[50%] "
                  style={{ background: item }}
                ></p>
              );
            })}
          </p>
        </div>
      </div>
      <p className="text-[14px] text-[#151875]  h-[80px] flex items-center pr-0 font-bold ">
        {" "}
        {price}₮
      </p>
    </div>
  );
};
