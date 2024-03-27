import { Container } from "@mui/material";

type ScrollProps = {
  image: string;
  label: string;
  price: number;
  color: string[];
};
export const AdminScroll = (props: ScrollProps) => {
  const { image, label, price, color } = props;

  return (
    <div className="w-[full] h-[full] border-b-2 flex flex-row  pb-4 gap-20  pl-1">
      <Container>
        <div className=" snap-start flex flex-row gap-4">
          <div className="w-[20%]">
            <img src={image} className="w-[full] h-[87px]  "></img>
          </div>
          <div className="flex flex-col gap-2 w-[50%] px-2">
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
          <div className="w-[20%] px-4">
            <p className="text-[14px] text-[#151875]  h-[80px]  w-[full] flex items-center pr-0 font-bold ">
              {" "}
              {price}₮
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
