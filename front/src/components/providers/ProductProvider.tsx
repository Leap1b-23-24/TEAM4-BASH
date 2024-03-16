"use client";

import { api } from "@/src/common";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

export type Product = {
  productName: string;
  additionInfo: string;
  barCode: string;
  productImage: string;
  mainPrice: number;
  quantity: number;
  mainCategory: string;
  secondCategory: string;
  color: string;
  size: string;
  tag: string;
  createdAt: Date;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

type ProductContextType = {
  postProduct: (
    productName: string,
    additionInfo: string,
    barCode: string,
    productImage: string,
    mainPrice: number,
    quantity: number,
    mainCategory: string,
    secondCategory: string,
    color: string,
    size: string,
    tag: string,
    createAt: Date
  ) => void;

  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product[]>>;
};

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState(1);

  const router = useRouter();

  const postProduct = async (
    productName: string,
    additionInfo: string,
    barCode: string,
    productImage: string,
    mainPrice: number,
    quantity: number,
    mainCategory: string,
    secondCategory: string,
    color: string,
    size: string,
    tag: string,
    createdAt: Date
  ) => {
    try {
      const { data } = await api.post(
        "/product/add",
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
          createdAt,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      toast.success(data.message, {
        position: "top-center",
      });

      router.push("/dashboard/product");

      setRefresh(refresh + 1);
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          hideProgressBar: true,
          position: "top-center",
        });
      }
    }
  };

  const getProduct = async () => {
    try {
      const { data } = await api.get("/product/plus", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setProductList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, [refresh]);

  return (
    <ProductContext.Provider
      value={{
        postProduct,
        productList,
        setProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
