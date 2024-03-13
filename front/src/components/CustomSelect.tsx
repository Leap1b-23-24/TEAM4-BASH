type CustomSelectProps = {
  label: string;
  options: (string | number)[];
};

function CustomSelect({ label, options }: CustomSelectProps) {
  return (
    <div className="w-full h-fit flex flex-col gap-[8px]">
      <p className="font-sans font-[600] text-[16px] text-[#121316]">{label}</p>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Сонгох
        </option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
export default CustomSelect;
