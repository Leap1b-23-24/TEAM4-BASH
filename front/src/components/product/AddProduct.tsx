"use client";

import { AddPhotoAlternateOutlined, ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { AddProductTwo } from "./AddProductTwo";
import { useProduct } from "../providers/ProductProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { CustomInput } from "../customs/CustomInput";
import { useState } from "react";
import { Upload } from "../upload/page";

type Props = {
  productImage: string;
};

const validationSchema = yup.object({
  productName: yup.string().required(),
  additionInfo: yup.string().required(),
  barCode: yup.string().required(),
  mainPrice: yup.number().required(),
  quantity: yup.number().required(),
  mainCategory: yup.string().required(),
  secondCategory: yup.string().required(),
  // color: yup.string().required(),
  // size: yup.string().required(),
  tag: yup.string().required(),
});

export const AddProduct = (props: Props) => {
  const { postProduct } = useProduct();
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      productName: "",
      additionInfo: "",
      barCode: "",
      productImage: "",
      mainPrice: 0,
      quantity: 0,
      mainCategory: "",
      secondCategory: "",
      color: "",
      size: "",
      tag: "",
      createdAt: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await postProduct(
        values.productName,
        values.additionInfo,
        values.barCode,
        imageUrl,
        values.mainPrice,
        values.quantity,
        values.mainCategory,
        values.secondCategory,
        values.color,
        values.size,
        values.tag,
        values.createdAt
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
        <div className="basis-0 grow flex flex-col gap-8">
          <div className="w-full bg-white p-6 rounded-xl flex flex-col gap-4">
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
                placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон"
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
                placeholder="#12345"
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

            <div className="flex items-center gap-3 relative">
              <div className="border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px] relative">
                <img
                  src={imageUrl}
                  className="w-[125px] h-[125px] object-cover"
                />
              </div>
              <div className="absolute ml-[52px]">
                <AddPhotoAlternateOutlined />
              </div>

              <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center">
                <button className="text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
                  +
                </button>
              </div>
              <div className="absolute left-32 top-4 opacity-0.5">
                <Upload imageUrl={imageUrl} setImageUrl={setImageUrl} />
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

        <div className="basis-0 grow  flex flex-col rounded-lg justify-between">
          <div className="rounded-lg bg-white flex p-6 flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-base">Ерөнхий ангилал</label>
              <CustomInput
                type="text"
                placeholder="Сонгох"
                name="mainCategory"
                value={formik.values.mainCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mainCategory &&
                  Boolean(formik.errors.mainCategory)
                }
                helperText={
                  formik.touched.mainCategory && formik.errors.mainCategory
                }
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-base">Дэд ангилал</label>
              <CustomInput
                type="text"
                placeholder="Сонгох"
                name="secondCategory"
                value={formik.values.secondCategory}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.secondCategory &&
                  Boolean(formik.errors.secondCategory)
                }
                helperText={
                  formik.touched.secondCategory && formik.errors.secondCategory
                }
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
                  placeholder="Сонгох"
                  name="tag"
                  value={formik.values.tag}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.tag && Boolean(formik.errors.tag)}
                  helperText={formik.touched.tag && formik.errors.tag}
                />
              </div>

              <p className="text-[#5E6166] text-sm">
                Санал болгох: Гутал , Цүнх , Эмэгтэй{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 flex justify-end gap-5">
        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Ноорог
        </button>

        <button
          type="button"
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
