"use client";

import { ChevronLeft, Dashboard } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { EditProductOne } from "./EditProductOne";
import { EditProductTwo } from "./EditProductTwo";
import { useFormik } from "formik";
import * as yup from "yup";
import OneProductData from "../ProductData";
import { useContext, useState } from "react";
import { DashboardContext } from "../../Providers/DashboardProvider";
import { CustomInput } from "../../customs/CustomInput";
import { CustomDeliveryStatus } from "../../customs/CustomDeliveryStatus";

const validationSchema = yup.object({
  productName: yup.string().required(),
  additionInfo: yup.string().required(),
  barCode: yup.number().required(),
  productImage: yup.array().required(),
  mainPrice: yup.number().required(),
  quantity: yup.number().required(),
  mainCategory: yup.string().required(),
  secondCategory: yup.string().required(),
  color: yup.array().required(),
  size: yup.array().required(),
  tag: yup.array().required(),
});

export const EditProduct = () => {
  const router = useRouter();
  const { selectedProd } = useContext(DashboardContext);

  const formik = useFormik({
    initialValues: {
      productName: selectedProd.productName,
      additionInfo: selectedProd.additionInfo,
      barCode: selectedProd.barCode,
      productImage: selectedProd.productImage,
      mainPrice: selectedProd.mainPrice,
      quantity: selectedProd.quantity,
      mainCategory: selectedProd.mainCategory,
      secondCategory: selectedProd.secondCategory,
      color: selectedProd.color,
      size: selectedProd.size,
      tag: selectedProd.tag,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values),
  });

  console.log(formik.errors);

  const handleTags = (value: string[]) => {
    formik.setFieldValue("tag", value);
  };

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
        <EditProductOne
          productName={formik.values.productName}
          productNameOnChange={formik.handleChange}
          additionInfo={formik.values.additionInfo}
          additionInfoOnChange={formik.handleChange}
          barCode={formik.values.barCode}
          barCodeOnChange={formik.handleChange}
          productImage={formik.values.productImage}
          productImageOnChange={formik.handleChange}
          mainPrice={formik.values.mainPrice}
          mainPriceOnChange={formik.handleChange}
          quantity={formik.values.quantity}
          quantityOnChange={formik.handleChange}
        />
        <EditProductTwo
          mainCategory={formik.values.mainCategory}
          mainCategoryOnChange={formik.handleChange}
          secondCategory={formik.values.secondCategory}
          secondCategoryOnChange={formik.handleChange}
          color={formik.values.color}
          colorOnChange={formik.handleChange}
          size={formik.values.size}
          sizeOnChange={formik.handleChange}
          tag={formik.values.tag}
          tagOnChange={handleTags}
        />
      </div>

      <div className="px-8 flex justify-end gap-5">
        <button
          onClick={() => router.push("/dashboard/product")}
          className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg"
        >
          Буцах
        </button>

        <button
          type="button"
          onClick={() => {
            formik.handleSubmit();
          }}
          className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg"
        >
          Шинэчлэх
        </button>
      </div>
    </div>
  );
};
