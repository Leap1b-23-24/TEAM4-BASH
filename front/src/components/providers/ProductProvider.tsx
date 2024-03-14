"use client";

import { api } from "@/src/common";
import { AxiosError } from "axios";
import { PropsWithChildren, createContext, useContext } from "react";

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

type ProductContextType = {
  postProduct: (
    productName: string,
    additionInfo: string,
    barCode: number,
    productImage: string,
    mainPrice: number,
    quantity: number,
    mainCategory: string,
    secondCategory: string,
    color: string,
    size: string,
    tag: string
  ) => void;
};

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const postProduct = async (
    productName: string,
    additionInfo: string,
    barCode: number,
    productImage: string,
    mainPrice: number,
    quantity: number,
    mainCategory: string,
    secondCategory: string,
    color: string,
    size: string,
    tag: string
  ) => {
    try {
      const { data } = await api.post(
        "http://localhost:8008/product/add",
        {
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
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  const getProduct = async () => {
    try {
      const { data } = await api.get("http://localhost:8008/product/plus");
    } catch {}
  };

  return (
    <ProductContext.Provider
      value={{
        postProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
