type CustomInputProps = {
  placeholder: string;
};

export const CustomInput = (props: CustomInputProps) => {
  const { placeholder, ...rest } = props;

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        {...rest}
        className="w-full bg-[#F7F7F8] rounded-lg py-2 pl-3 border-2 text-[black]"
      />
    </div>
  );
};
