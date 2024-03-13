import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import StepFooter from "./StepFooter";
import Steps from "./Steps";
import HeaderText from "./HeaderText";
import ButtonInput from "./ButtonInput";
import PineconeLogo from "./PineconeLogo";

const selectData = ["mai", "mai2", "mai3"];

function Step3() {
  return (
    <section className="w-full h-full bg-white">
      <header className="w-full h-fit p-[44px]">
        <PineconeLogo />
      </header>
      <main className="w-full h-full flex flex-col gap-[81px] items-center">
        <Steps label="3" />
        <div className="w-[452px] h-fit flex flex-col gap-[20px] p-[24px] ">
          <HeaderText label="Жоохон танилцья" />
          <div className="font-[400] font-sans text-[16px] text-[#121316] mb-[12px] w-full h-fit">
            <p>
              Энэ мэдээллийг дэлгүүрийн тохиргоонд туслах зорилгоор ашиглана.
            </p>
          </div>
          <CustomSelect
            label="Та борлуулалт хийж байсан туршлагатай юу?"
            options={selectData}
          />
          <CustomSelect
            label="Та ямар төрлийн бүтээгдэхүүн борлуулах вэ?"
            options={selectData}
          />
          <ButtonInput Label="Дараах" />
        </div>
      </main>
      <StepFooter />
    </section>
  );
}
export default Step3;
