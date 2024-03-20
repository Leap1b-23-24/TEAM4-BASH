type CustomDeliveryStatusProps = {
  label: string;
};

export const CustomDeliveryStatus = (props: CustomDeliveryStatusProps) => {
  const { label } = props;
  return (
    <div
      className={`rounded-[999px] p-[4px] w-fit h-fit`}
      style={{
        backgroundColor:
          label === "Хүргэгдсэн"
            ? "#C1E6CF"
            : label === "Хүргэлтэнд гарсан"
            ? "#B7DDFF"
            : label === "Бэлтгэгдэж байна"
            ? "#ECEDF0"
            : label === "Шинэ захиалга"
            ? "#fff"
            : "#FCBABE",
      }}
    >
      <div className="py-[2px] px-[6px]">
        <p
          className={`text-sm font-normal whitespace-nowrap`}
          style={{
            color:
              label === "Хүргэгдсэн"
                ? "#0A4E22"
                : label === "Хүргэлтэнд гарсан"
                ? "#1890FF"
                : label === "Бэлтгэгдэж байна"
                ? "#3F4145"
                : label === "Шинэ захиалга"
                ? "#3F4145"
                : "#3F4145",
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
