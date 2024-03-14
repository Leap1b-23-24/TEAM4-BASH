"use client";

import { AddPhotoAlternateOutlined, ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { AddProductTwo } from "./AddProductTwo";
import { AddProductOne } from "./AddProductOne";
import { useProduct } from "../providers/ProductProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";
import { CustomInput } from "../customs/CustomInput";

const validationSchema = yup.object({
  productName: yup.string().required(),
  additionInfo: yup.string().required(),
  barCode: yup.string().required(),
  productImage: yup.string().required(),
  mainPrice: yup.string().required(),
  quantity: yup.string().required(),
  mainCategory: yup.string().required(),
  secondCategory: yup.string().required(),
  color: yup.string().required(),
  size: yup.string().required(),
  tag: yup.string().required(),
});

export const AddProduct = () => {
  const { postProduct } = useProduct();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      productName: "",
      additionInfo: "",
      barCode: 0,
      productImage: "",
      mainPrice: 0,
      quantity: 0,
      mainCategory: "",
      secondCategory: "",
      color: "",
      size: "",
      tag: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await postProduct(
        values.productName,
        values.additionInfo,
        values.barCode,
        values.productImage,
        values.mainPrice,
        values.quantity,
        values.mainCategory,
        values.secondCategory,
        values.color,
        values.size,
        values.tag
      );
    },
  });

  return (
    <div className="w-full h-screen bg-[#F7F7F8]">
      <div className="flex py-2 bg-white">
        <div
          onClick={() => {
            router.push("/dashboard/product");
          }}
          className="cursor-pointer pl-4"
        >
          <div className="pt-3">
            <ChevronLeft className="w-[36px] h-[36px]" />
          </div>
        </div>
        <p className="text-[18px] font-normal py-4 px-5">Бүтээгдэхүүн нэмэх</p>
      </div>

      <div className="p-8 flex w-full gap-10">
        <div className="basis-0 grow flex flex-col gap-6">
          <div className="basis-0 w-full grow bg-white p-6 rounded-xl flex flex-col gap-4">
            <div className="gap-2 flex flex-col">
              <p className="text-[14px] font-semibold">Бүтээгдэхүүний нэр</p>

              <CustomInput
                type="text"
                placeholder="Нэр"
                name="productName"
                value={formik.values.productName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.productName &&
                  Boolean(formik.errors.productName)
                }
                helperText={
                  formik.touched.productName && formik.errors.productName
                }
              />
            </div>

            <div className="gap-2 flex flex-col">
              <p className="text-[14px] font-semibold">Нэмэлт мэдээлэл</p>
              <CustomInput
                type="text"
                placeholder="Нэр"
                name="additionInfo"
                value={formik.values.additionInfo}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.additionInfo &&
                  Boolean(formik.errors.additionInfo)
                }
                helperText={
                  formik.touched.additionInfo && formik.errors.additionInfo
                }
              />
            </div>

            <div className="gap-2 flex flex-col">
              <p className="text-[14px] font-semibold">Барааны код</p>
              <CustomInput
                type="text"
                placeholder="Нэр"
                name="barCode"
                value={formik.values.barCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.barCode && Boolean(formik.errors.barCode)}
                helperText={formik.touched.barCode && formik.errors.barCode}
              />
            </div>
          </div>

          <div className="w-full rounded-xl p-6 gap-3 flex flex-col bg-white">
            <p className="font-[600] text-[18px]">Бүтээгдэхүүний зураг</p>

            <div className="flex items-center gap-3">
              <div className="border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px] relative"></div>
              <div className="absolute ml-[52px]">
                <AddPhotoAlternateOutlined />
              </div>

              <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center">
                <p className="text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
                  +
                </p>
              </div>
            </div>
          </div>

          <div className="w-full p-6 rounded-xl flex gap-4 bg-white">
            <div className="flex flex-col gap-1 w-full">
              <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
              <CustomInput
                type="text"
                placeholder="Нэр"
                name="mainPrice"
                value={formik.values.mainPrice}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mainPrice && Boolean(formik.errors.mainPrice)
                }
                helperText={formik.touched.mainPrice && formik.errors.mainPrice}
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-[16px] font-semibold font-inter">
                Үлдэгдэл тоо ширхэг
              </p>
              <CustomInput
                type="text"
                placeholder="Нэр"
                name="quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.quantity && Boolean(formik.errors.quantity)
                }
                helperText={formik.touched.quantity && formik.errors.quantity}
              />
            </div>
          </div>
        </div>

        <AddProductTwo
          mainCategory={formik.values.mainCategory}
          secondCategory={formik.values.secondCategory}
          color={formik.values.color}
          size={formik.values.size}
          tag={formik.values.tag}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          // error={
          //   formik.touched.mainCategory && Boolean(formik.errors.mainCategory)
          // }
        />
      </div>

      <div className="px-8 flex justify-end gap-5">
        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Ноорог
        </button>

        <button
          className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Нийтлэх
        </button>
      </div>
    </div>
  );
};
