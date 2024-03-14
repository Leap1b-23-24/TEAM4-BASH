import { ChangeEvent, ChangeEventHandler, HtmlHTMLAttributes } from "react";
import { CustomInput } from "../customs/CustomInput";

type FormikProps = {
  mainCategory: string;
  secondCategory: string;
  color: string;
  size: string;
  tag: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  error?: boolean | "";
};

export const AddProductTwo = (props: FormikProps) => {
  const {
    mainCategory,
    secondCategory,
    color,
    size,
    tag,
    handleChange,
    handleBlur,
    error,
  } = props;

  return (
    <div className="basis-0 grow  flex flex-col rounded-lg justify-between">
      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-base">Ерөнхий ангилал</label>
          <CustomInput
            type="text"
            placeholder="Сонгох"
            name="mainCategory"
            value={mainCategory}
            onChange={handleChange}
            onBlur={handleBlur}
            // error={mainCategory && Boolean(mainCategory)}
            // helperText={formik.touched.productName && formik.errors.productName}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-base">Дэд ангилал</label>
          <CustomInput
            type="text"
            placeholder="Сонгох"
            name="secondCategory"
            value={secondCategory}
            onChange={handleChange}
            onBlur={handleBlur}
            // error={mainCategory && Boolean(mainCategory)}
            // helperText={formik.touched.productName && formik.errors.productName}
          />
        </div>
      </div>

      <div className="rounded-lg bg-white flex p-6 flex-col gap-3">
        <p className="font-semibold text-[18px]">Төрөл</p>
        <div className=" flex flex-row gap-6 items-center">
          <p className="text-sm ">Өнгө</p>
          <p className="text-xl flex justify-center items-center bg-[#ECEDF0] p-3 h-8 w-8 rounded-[50%]">
            +
          </p>
        </div>

        <div className="flex flex-row gap-6 items-center">
          <p className="text-sm pt-1">Хэмжээ</p>
          <p className="text-xl flex justify-center items-center bg-[#ECEDF0] p-3 h-8 w-8 rounded-[50%]">
            +
          </p>
        </div>
        <button className="h-[36px] w-[118px] mt-4 font-semibold border text-sm rounded-lg">
          Төрөл нэмэх
        </button>
      </div>

      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-base">Таг</label>
            <CustomInput
              type="text"
              placeholder="Таг нэмэх..."
              name="tag"
              value={tag}
              onChange={handleChange}
              onBlur={handleBlur}
              // error={mainCategory && Boolean(mainCategory)}
              // helperText={formik.touched.productName && formik.errors.productName}
            />
          </div>

          <p className="text-[#5E6166] text-sm">
            Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
