"use client";

import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { EditProductOne } from "./EditProductOne";
import { EditProductTwo } from "./EditProductTwo";
import { useFormik } from "formik";
import * as yup from "yup";
import OneProductData from "../ProductData";

const validationSchema = yup.object({
  productName: yup.string().required(),
  additionInfo: yup.string().required(),
  barCode: yup.number().required(),
  productImage: yup.string().required(),
  mainPrice: yup.number().required(),
  quantity: yup.number().required(),
  mainCategory: yup.string().required(),
  secondCategory: yup.string().required(),
  color: yup.string().required(),
  size: yup.string().required(),
  tag: yup.string().required(),
});

type EditProdProps = {
  productName: String;
  additionInfo: String;
  barCode: Number;
  productImage: String;
  mainPrice: Number;
  quantity: Number;
  mainCategory: String;
  secondCategory: String;
  color: String;
  size: String;
  tag: String;
};

export const EditProduct = (props: EditProdProps) => {
  const router = useRouter();

  const {
    productName,
    additionInfo,
    barCode,
    productImage,
    mainPrice,
    quantity,
    mainCategory,
    secondCategory,
    color,
    size,
    tag,
  } = props;

  const selectedProd = {
    productName: "Malgaitai tsamts",
    additionInfo: "Daavuun materialaar hiigdsen",
    barCode: "0123456789",
    productImage: "/orderedProd.png",
    mainPrice: 100000,
    quantity: 3,
    mainCategory: "Emegtei huvtsas",
    secondCategory: "tsamts",
    color: ["#FFF", "#000"],
    size: ["XXL", "XL", "L", "M", "S"],
    tag: ["emegtei", "tsamts"],
  };

  const formik = useFormik({
    initialValues: {
      productName: selectedProd.productImage,
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
        <EditProductOne />
        <EditProductTwo />
      </div>

      <div className="px-8 flex justify-end gap-5">
        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Буцах
        </button>

        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Шинэчлэх
        </button>
      </div>
    </div>
  );
};
