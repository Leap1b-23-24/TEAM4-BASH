import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { CustomInput } from "../customs/CustomInput";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Upload } from "../upload/page";

type FormikProps = {
  productName: string;
  productError: boolean | undefined;
  nameOnChange: (e: ChangeEvent<any>) => void;
  nameOnBlur: (e: ChangeEvent<any>) => void;
  nameHelperText: string | false | undefined;

  additionInfo: string;
  infoError: boolean | undefined;
  infoOnChange: (e: ChangeEvent<any>) => void;
  infoOnBlur: (e: ChangeEvent<any>) => void;
  infoHelperText: string | false | undefined;

  barCode: string;
  codeError: boolean | undefined;
  codeOnChange: (e: ChangeEvent<any>) => void;
  codeOnBlur: (e: ChangeEvent<any>) => void;
  codeHelperText: string | false | undefined;

  mainPrice: number;
  priceError: boolean | undefined;
  priceOnChange: (e: ChangeEvent<any>) => void;
  priceOnBlur: (e: ChangeEvent<any>) => void;
  priceHelperText: string | false | undefined;

  quantity: number;
  quantityError: boolean | undefined;
  quantityOnChange: (e: ChangeEvent<any>) => void;
  quantityOnBlur: (e: ChangeEvent<any>) => void;
  quantityHelperText: string | false | undefined;

  imageUrl: string[];
  setImageUrl: Dispatch<SetStateAction<string[]>>;
};

type Props = {
  productImage: string;
};

export const AddProductOne = (props: FormikProps) => {
  const {
    productName,
    productError,
    nameOnChange,
    nameOnBlur,
    nameHelperText,

    additionInfo,
    infoError,
    infoOnChange,
    infoOnBlur,
    infoHelperText,

    barCode,
    codeError,
    codeOnChange,
    codeOnBlur,
    codeHelperText,

    mainPrice,
    priceError,
    priceOnChange,
    priceOnBlur,
    priceHelperText,

    quantity,
    quantityError,
    quantityOnChange,
    quantityOnBlur,
    quantityHelperText,

    imageUrl,
    setImageUrl,
  } = props;

  return (
    <div className="basis-0 grow flex flex-col gap-8">
      <div className="w-full bg-white p-6 rounded-xl flex flex-col gap-4">
        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Бүтээгдэхүүний нэр</p>
          <CustomInput
            type="text"
            placeholder="Нэр"
            name="productName"
            value={productName}
            onChange={nameOnChange}
            onBlur={nameOnBlur}
            error={productError}
            helperText={nameHelperText}
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Нэмэлт мэдээлэл</p>
          <CustomInput
            type="text"
            placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон"
            name="additionInfo"
            value={additionInfo}
            onChange={infoOnChange}
            onBlur={infoOnBlur}
            error={infoError}
            helperText={infoHelperText}
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Барааны код</p>
          <CustomInput
            type="text"
            placeholder="#12345"
            name="barCode"
            value={barCode}
            onChange={codeOnChange}
            onBlur={codeOnBlur}
            error={codeError}
            helperText={codeHelperText}
          />
        </div>
      </div>

      <div className="w-full rounded-xl p-6 gap-3 flex flex-col bg-white">
        <p className="font-[600] text-[18px]">Бүтээгдэхүүний зураг</p>

        <div className="flex items-center gap-3 relative">
          {imageUrl?.map((item, index) => {
            return (
              <div
                key={index}
                className="border-dashed border-2 rounded-lg w-[125px] h-[125px] relative"
              >
                <img src={item} className="w-[125px] h-[125px] object-cover" />
              </div>
            );
          })}

          {!imageUrl && (
            <div className="absolute ml-[52px]">
              <AddPhotoAlternateOutlined />
            </div>
          )}

          <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center relative">
            <button className="text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
              +
            </button>

            <div className="absolute top-4 right-6 opacity-0">
              <Upload imageUrl={imageUrl} setImageUrl={setImageUrl} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-6 rounded-xl flex gap-4 bg-white">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
          <CustomInput
            type="text"
            placeholder="#12345"
            name="mainPrice"
            value={mainPrice}
            onChange={priceOnChange}
            onBlur={priceOnBlur}
            error={priceError}
            helperText={priceHelperText}
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">
            Үлдэгдэл тоо ширхэг
          </p>
          <CustomInput
            type="text"
            placeholder="#12345"
            name="quantity"
            value={quantity}
            onChange={quantityOnChange}
            onBlur={quantityOnBlur}
            error={quantityError}
            helperText={quantityHelperText}
          />
        </div>
      </div>
    </div>
  );
};
