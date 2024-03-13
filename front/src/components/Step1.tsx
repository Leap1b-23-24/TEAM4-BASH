import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import StepFooter from "./StepFooter";
import Steps from "./Steps";
import HeaderText from "./HeaderText";
import ButtonInput from "./ButtonInput";
import PineconeLogo from "./PineconeLogo";
// import { useState } from "react";

function Step1() {
  // const [value, setValue] = useState("");

  return (
    <section className="w-full h-full bg-white">
      <header className="w-full h-fit p-[44px]">
        <PineconeLogo />
      </header>
      <main className="w-full h-full flex flex-col gap-[121px] items-center">
        <Steps label="1" />
        <div className="w-[452px] h-fit flex flex-col gap-[20px] p-[24px] ">
          <HeaderText label="Дэлгүүрийн мэдээлэл" />
          <CustomInput
            Label="Танай дэлгүүрийн нэр юу вэ?"
            Question="Дэлгүүрийн нэр"
          />
          <ButtonInput Label="Дараах" />
        </div>
      </main>
      <StepFooter />
    </section>
  );
}
export default Step1;
