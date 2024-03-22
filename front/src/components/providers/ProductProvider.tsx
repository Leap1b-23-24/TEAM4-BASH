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
  _id: string;
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
  tag: string[];
  createdAt: Date;
};

type SelectedProdProps = {
  id: string;
  productName: string;
  additionInfo: string;
  barCode: string;
  productImage: string[];
  mainPrice: number | string;
  quantity: number | string;
  mainCategory: string;
  secondCategory: string;
  color: string[];
  size: string[];
  tag: string[];
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType
);

type ProductContextType = {
  postProduct: (
    productName: string,
    additionInfo: string,
    barCode: string,
    productImage: string[],
    mainPrice: number,
    quantity: number,
    mainCategory: string,
    secondCategory: string,
    color: string[],
    size: string[],
    tag: string[],
    createAt: Date
  ) => void;
  deleteProduct: (productId: string) => void;

  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product[]>>;
  refresh: number;
  setRefresh: Dispatch<SetStateAction<number>>;
  getProduct: () => void;
  editProduct: (params: SelectedProdProps) => void;
  selectedProd: Product | null;
  setSelectedProd: Dispatch<SetStateAction<Product | null>>;
  deliveryStatus: string;
  setDeliveryStatus: Dispatch<SetStateAction<string>>;
};

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [refresh, setRefresh] = useState(1);
  const [selectedProd, setSelectedProd] = useState<Product | null>(null);
  const [deliveryStatus, setDeliveryStatus] = useState("");

  console.log(refresh);

  const router = useRouter();

  const postProduct = async (
    productName: string,
    additionInfo: string,
    barCode: string,
    productImage: string[],
    mainPrice: number,
    quantity: number,
    mainCategory: string,
    secondCategory: string,
    color: string[],
    size: string[],
    tag: string[],
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

  const deleteProduct = async (productId: string) => {
    try {
      const { data } = await api.post(
        "/product/delete",
        {
          productId,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      setRefresh(refresh + 1);
      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const editProduct = async (params: SelectedProdProps) => {
    try {
      await api.post("/product/editProduct", params, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      router.push("/dashboard/product");

      setRefresh((prev) => prev + 1);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
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
        deleteProduct,
        refresh,
        setRefresh,
        getProduct,
        editProduct,
        selectedProd,
        setSelectedProd,
        deliveryStatus,
        setDeliveryStatus,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
