type CustomProps = {
  image: string;
  label: string;
  text: string;
  price: number;
};
export const Custom = (props: CustomProps) => {
  const { image, label, text, price } = props;

  return (
    <div className="w-[235px] rounded-2xl overflow-hidden border-2 text-[black]">
      <div>
        <img src={image} />
        <div className="p-4 flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold">{label}</p>
            <p className="text-[16px] font-normal">{text}</p>
          </div>
          <p className="text-[24px] font-bold flex justify-end">{price}</p>
        </div>
      </div>
    </div>
  );
};
