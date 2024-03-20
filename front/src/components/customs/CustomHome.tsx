type CustomProps = {
  image: string;
  label: string;
  price: number;
};
export const CustomItem = (props: CustomProps) => {
  const { image, label, price } = props;

  return (
    <div className="w-[235px] basis-0 grow rounded-2xl overflow-hidden border-2 flex flex-col justify-center items-center">
      <img src={image} className="w-[235px] h-[220px] object-cover" />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold text-[#FB2E86]">{label}</p>
        </div>
        <p className="text-[24px] font-bold text-[#151875]">{price}₮</p>
      </div>
    </div>
  );
};
