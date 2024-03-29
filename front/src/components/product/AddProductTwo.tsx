import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CustomInput } from "../customs/CustomInput";
import CustomizedHook from "./TagMui";
import { MenuItem } from "@mui/material";

const color = [
  "#8D887D",
  "#DCDDE0",
  "#0166FF",
  "#01B3FF",
  "#F9D100",
  "#AE01FF",
  "#41CC00",
  "#FF0101",
  "#cede1d",
  "#f78874",
  "#76f774",
  "#000000",
];

const size = ["Xs", "S", "M", "L", "XL", "2XL"];

type FormikProps = {
  mainCategory: string;
  mainError: boolean | undefined;
  mainOnChange: (e: ChangeEvent<any>) => void;
  mainOnBlur: (e: ChangeEvent<any>) => void;
  mainHelperText: string | false | undefined;

  secondCategory: string;
  secondError: boolean | undefined;
  secondOnChange: (e: ChangeEvent<any>) => void;
  secondOnBlur: (e: ChangeEvent<any>) => void;
  secondHelperText: string | false | undefined;

  isSize: string[];
  setIsSize: Dispatch<SetStateAction<string[]>>;

  isColor: string[];
  setIsColor: Dispatch<SetStateAction<string[]>>;
  tag: string[];
  tagOnChange: (values: string[]) => void;
};

export const AddProductTwo = (props: FormikProps) => {
  const [openColor, setOpenColor] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const category = [
    "Ухаалаг утас, таблет",
    "Чихэвч",
    "Хувцас",
    "Гэр ахуйн бараа",
  ];

  const handleClick = () => {
    setOpenColor(false);
  };

  const handleSize = () => {
    setOpenSize(false);
  };

  const {
    mainCategory,
    mainError,
    mainOnChange,
    mainOnBlur,
    mainHelperText,
    secondCategory,
    secondError,
    secondOnChange,
    secondOnBlur,
    secondHelperText,
    isSize,
    setIsSize,
    isColor,
    setIsColor,
    tagOnChange,
    tag,
  } = props;

  return (
    <div className="basis-0 grow  flex flex-col rounded-lg justify-between">
      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-base">Ерөнхий ангилал</label>
          <CustomInput
            select
            placeholder="Нэр"
            name="mainCategory"
            value={mainCategory}
            onChange={mainOnChange}
            onBlur={mainOnBlur}
            error={mainError}
            helperText={mainHelperText}
          >
            {category.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </CustomInput>
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-base">Дэд ангилал</label>
          <CustomInput
            select
            placeholder="Нэр"
            name="secondCategory"
            value={secondCategory}
            onChange={secondOnChange}
            onBlur={secondOnBlur}
            error={secondError}
            helperText={secondHelperText}
          >
            {category.map((item, index) => {
              return (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              );
            })}
          </CustomInput>
        </div>
      </div>

      <div className="rounded-lg bg-white flex p-6 flex-col gap-3 relative">
        <p className="font-semibold text-[18px]">Төрөл</p>
        <div className=" flex flex-row gap-6 items-center">
          <p className="text-sm ">Өнгө</p>

          <div className=" flex flex-row gap-6 items-center">
            {isColor?.map((item, index) => {
              return (
                <div className="relative">
                  <p
                    key={index}
                    style={{ background: item }}
                    className="w-6 h-6 rounded-[50%]"
                  />
                  <img
                    src="/x.png"
                    className="absolute top-[-6px] right-[-3px] p-[3px] w-4 bg-white border border-black rounded-[50%]"
                    onClick={() => {
                      const newcolor = isColor.filter(
                        (color) => color !== item
                      );
                      setIsColor(newcolor);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <p
            className="text-xl flex justify-center items-center bg-[#ECEDF0] p-3 h-8 w-8 rounded-[50%] relative"
            onClick={() => {
              setOpenColor(true);
            }}
          >
            +
          </p>

          {openColor && (
            <div className="absolute mt-32 w-fit h-fit p-3 border-2 bg-white flex justify-between grid grid-cols-6 gap-3 rounded-xl">
              {color.map((item, index) => {
                return (
                  <p
                    className="rounded-[50%] w-6 h-6"
                    onClick={() => {
                      const existing = isColor.find((color) => color === item);
                      if (!existing) {
                        setIsColor((prev) => [...prev, item]);
                      }

                      handleClick();
                    }}
                    key={index}
                    style={{ background: item }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="flex flex-row gap-6 items-center">
          <p className="text-sm pt-1">Хэмжээ</p>

          {isSize?.map((item, index) => {
            return (
              <p
                key={index}
                className="w-8 h-8 flex justify-center items-center rounded-[50%] bg-[#ECEDF0] text-base text-[#121316] border-2"
              >
                {item}
              </p>
            );
          })}

          <p
            className="text-xl flex justify-center items-center bg-[#ECEDF0] p-3 h-8 w-8 rounded-[50%]"
            onClick={() => {
              setOpenSize(true);
            }}
          >
            +
          </p>

          {openSize && (
            <div className="overflow-scroll w-[270px] p-2 border-2 rounded-lg absolute top-36 bg-white flex gap-1 bg-[#44e3ae]">
              {size.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-sm border px-4 py-[2px] bg-blue-500 text-white rounded-lg"
                    onClick={() => {
                      const exist = isSize.find((size) => size === item);
                      if (!exist) {
                        setIsSize((prev) => [...prev, item]);
                      }
                      handleSize();
                    }}
                    style={{ background: item }}
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          )}
        </div>

        <button className="h-[36px] w-[118px] mt-4 font-semibold border text-sm rounded-lg">
          Төрөл нэмэх
        </button>
      </div>

      <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <CustomizedHook onChange={tagOnChange} tags={tag} />
          </div>

          <p className="text-[#5E6166] text-sm">
            Санал болгох: Гутал , Цүнх , Эмэгтэй
          </p>
        </div>
      </div>
    </div>
  );
};
