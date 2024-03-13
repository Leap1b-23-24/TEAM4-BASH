import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import StepFooter from "./StepFooter";
import Steps from "./Steps";
import HeaderText from "./HeaderText";
import ButtonInput from "./ButtonInput";
import PineconeLogo from "./PineconeLogo";

const selectData = ["mai2", "mai2", "mai3"];

function Step2() {
  return (
    <section className="w-full h-full bg-white">
      <header className="w-full h-fit p-[44px]">
        <PineconeLogo />
      </header>
      <main className="w-full h-full flex flex-col gap-[71px] items-center">
        <Steps label="2" />
        <div className="w-[452px] h-fit flex flex-col gap-[20px] p-[24px] ">
          <HeaderText label="Бүс нутгийн мэдээлэл" />
          <CustomSelect label="Хот/Аймаг" options={selectData} />
          <CustomInput Label="Сум/Дүүрэг" Question="Сум/Дүүрэг" />
          <CustomInput Label="Хороо" Question="Хороо" />
          <ButtonInput Label="Дараах" />
        </div>
      </main>
      <StepFooter />
    </section>
  );
}
export default Step2;
