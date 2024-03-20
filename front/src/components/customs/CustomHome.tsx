type CustomProps = {
  image: string;
  label: string;
  text: string;
  price: number;
};
export const CustomItem = (props: CustomProps) => {
  const { image, label, text, price } = props;

  return (
    <div className="w-[235px] basis-0 grow rounded-2xl overflow-hidden border-2">
      <img src={image} className="w-[235px] h-[220px] object-cover" />
      <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <p className="text-[20px] font-bold">{label}</p>
          <p className="text-[16px] font-normal">{text}</p>
        </div>
        <p className="text-[24px] font-bold flex justify-end pt-2">{price}₮</p>
      </div>
    </div>
  );
};
