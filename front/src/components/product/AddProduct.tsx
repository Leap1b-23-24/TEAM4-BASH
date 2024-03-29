"use client";

import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { AddProductTwo } from "./AddProductTwo";
import { useProduct } from "../providers/ProductProvider";
import { useFormik } from "formik";
import * as yup from "yup";
import { AddProductOne } from "./AddProductOne";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "@mui/material";

type Props = {
  productImage?: string;
  isColor?: string[];
  setIsColor?: Dispatch<SetStateAction<string[]>>;
  isSize?: string[];
  setIsSize?: Dispatch<SetStateAction<string[]>>;
};

const validationSchema = yup.object({
  productName: yup.string().required(),
  additionInfo: yup.string().required(),
  barCode: yup.string().required(),
  mainPrice: yup.number().required(),
  quantity: yup.number().required(),
  mainCategory: yup.string().required(),
  secondCategory: yup.string().required(),
});

export const AddProduct = (props: Props) => {
  const { postProduct, editProduct, selectedProd, setSelectedProd } =
    useProduct();

  const [imageUrl, setImageUrl] = useState<string[]>(
    selectedProd?.productImage ?? []
  );
  const [isColor, setIsColor] = useState<string[]>(selectedProd?.color ?? []);
  const [isSize, setIsSize] = useState<string[]>(selectedProd?.size ?? []);

  const handleTags = (value: string[]) => {
    formik.setFieldValue("tag", value);
  };

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      productName: selectedProd ? selectedProd.productName : "",
      additionInfo: selectedProd ? selectedProd?.additionInfo : "",
      barCode: selectedProd ? selectedProd?.barCode : "",
      mainPrice: selectedProd ? selectedProd?.mainPrice : 0,
      quantity: selectedProd ? selectedProd?.quantity : 0,
      mainCategory: selectedProd ? selectedProd?.mainCategory : "",
      secondCategory: selectedProd ? selectedProd?.secondCategory : "",
      color: selectedProd ? selectedProd?.color : [],
      size: selectedProd ? selectedProd?.size : [],
      tag: selectedProd ? selectedProd?.tag : [],
      createdAt: new Date(),
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      !selectedProd
        ? await postProduct(
            values.productName,
            values.additionInfo,
            values.barCode,
            imageUrl,
            values.mainPrice,
            values.quantity,
            values.mainCategory,
            values.secondCategory,
            isColor,
            isSize,
            values.tag
          )
        : await editProduct({
            _id: selectedProd._id,
            productName: values.productName,
            additionInfo: values.additionInfo,
            barCode: values.barCode,
            productImage: imageUrl,
            mainPrice: values.mainPrice,
            quantity: values.quantity,
            mainCategory: values.mainCategory,
            secondCategory: values.secondCategory,
            color: isColor,
            size: isSize,
            tag: values.tag,
            merchId: "",
            star: 0,
            starCount: 0,
            productSoldQnty: 0,
            createdAt: new Date(),
          });
    },
  });

  return (
    <div className="w-full h-screen bg-[#F7F7F8]">
      <div className="flex py-2 bg-white">
        <div
          onClick={() => {
            router.push("/dashboard/product");
            setSelectedProd(null);
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
        <AddProductOne
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          //product
          productName={formik.values.productName}
          productError={
            formik.touched.productName && Boolean(formik.errors.productName)
          }
          nameOnChange={formik.handleChange}
          nameOnBlur={formik.handleBlur}
          nameHelperText={
            formik.touched.productName && formik.errors.productName
          }
          //addition info
          additionInfo={formik.values.additionInfo}
          infoError={
            formik.touched.additionInfo && Boolean(formik.errors.additionInfo)
          }
          infoOnChange={formik.handleChange}
          infoOnBlur={formik.handleBlur}
          infoHelperText={
            formik.touched.additionInfo && formik.errors.additionInfo
          }
          //barCode
          barCode={formik.values.barCode}
          codeError={formik.touched.barCode && Boolean(formik.errors.barCode)}
          codeOnChange={formik.handleChange}
          codeOnBlur={formik.handleBlur}
          codeHelperText={formik.touched.barCode && formik.errors.barCode}
          //price
          mainPrice={formik.values.mainPrice}
          priceError={
            formik.touched.mainPrice && Boolean(formik.errors.mainPrice)
          }
          priceOnChange={formik.handleChange}
          priceOnBlur={formik.handleBlur}
          priceHelperText={formik.touched.mainPrice && formik.errors.mainPrice}
          //quantity
          quantity={formik.values.quantity}
          quantityError={
            formik.touched.quantity && Boolean(formik.errors.quantity)
          }
          quantityOnChange={formik.handleChange}
          quantityOnBlur={formik.handleBlur}
          quantityHelperText={formik.touched.quantity && formik.errors.quantity}
        />

        <AddProductTwo
          isSize={isSize}
          setIsSize={setIsSize}
          isColor={isColor}
          setIsColor={setIsColor}
          //main
          mainCategory={formik.values.mainCategory}
          mainOnChange={formik.handleChange}
          mainOnBlur={formik.handleBlur}
          mainError={
            formik.touched.mainCategory && Boolean(formik.errors.mainCategory)
          }
          mainHelperText={
            formik.touched.mainCategory && formik.errors.mainCategory
          }
          //second
          secondCategory={formik.values.secondCategory}
          secondOnChange={formik.handleChange}
          secondOnBlur={formik.handleBlur}
          secondError={
            formik.touched.secondCategory &&
            Boolean(formik.errors.secondCategory)
          }
          secondHelperText={
            formik.touched.secondCategory && formik.errors.secondCategory
          }
          //tag
          tagOnChange={handleTags}
          tag={formik.values.tag}
        />
      </div>

      <div className="px-8 flex justify-end gap-5">
        <button className="border-2 px-6 py-2 bg-white hover:bg-black hover:text-white text-[18px] font-semibold rounded-lg">
          Ноорог
        </button>

        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
          disabled={
            !formik.isValid ||
            imageUrl.length == 0 ||
            isColor.length == 0 ||
            isSize.length == 0
          }
          disableElevation
          sx={{
            border: 1,
            px: 2,
            py: 1,
            borderColor: "#888",
            color: "#000",
            "&:hover": {
              bgcolor: "#000",
              color: "#FFF",
            },
            borderRadius: 2,
          }}
        >
          {!selectedProd ? "Нийтлэх" : "Шинэчлэх"}
        </Button>
      </div>
    </div>
  );
};
