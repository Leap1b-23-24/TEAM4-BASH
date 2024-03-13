"use client";
function CustomInput({ Question, Label }: { Question: string; Label: string }) {
  return (
    <div className="w-full h-fit flex flex-col gap-[8px]">
      <label className="font-[600] text-[16px] text-[#121316] font-sans">
        {Label}
      </label>
      <input
        type="text"
        placeholder={`${Question}`}
        className="input input-bordered w-full"
      />
    </div>
  );
}
export default CustomInput;
