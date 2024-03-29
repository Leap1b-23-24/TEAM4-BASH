import { Container } from "@mui/material";

type ScrollProps = {
  id: string | undefined;
  image: string;
  label: string;
  price: number;
  color: string;
};
export const AdminScroll = (props: ScrollProps) => {
  const { id, image, label, price, color } = props;

  return (
    <div
      id={id}
      className="w-[full] h-[full] border-b-2 flex flex-row  pb-4 gap-20  pl-1"
    >
      <Container>
        <div className="snap-start flex flex-row gap-4">
          <img src={image} className="w-[87px] h-[87px]" />
          <div className="flex flex-col gap-1 w-[50%] p-2">
            <p className="text-[14px] font-bold ">{label}</p>

            <div className="flex gap-2 items-center">
              <p className="text-[12px] text-[#A1A8C1] font-[800]">Өнгө:</p>
              <p className="flex gap-[6px]">
                <p
                  className="w-3 h-3 rounded-[50%] "
                  style={{ background: color }}
                />
              </p>
            </div>
          </div>
          <div className="w-[20%] px-4">
            <p className="text-[14px] text-[#151875]  h-[80px] w-[full] flex items-center font-bold">
              {Intl.NumberFormat().format(price)}₮
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};
