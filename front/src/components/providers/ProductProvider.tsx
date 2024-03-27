"use client";

import { api } from "@/src/common";
import { setRef } from "@mui/material";
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
  star: number;
  starCount: number;
  productName: string;
  additionInfo: string;
  barCode: string;
  productImage: string[];
  mainPrice: number;
  quantity: number;
  mainCategory: string;
  secondCategory: string;
  color: string[];
  size: string;
  tag: string[];
  createdAt: Date;
};

export type Category = {
  _id: string;
  category: string;
};

type SelectedProdProps = {
  id: string;
  star: number;
  starCount: number;
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

type ToCartProps = {
  sel: Product;
  count: number;
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
  postCategory: (category: string) => void;
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

  categoryList: Category[];
  setCategoryList: Dispatch<SetStateAction<Category[]>>;

  allProduct: Product[];
  setAllProduct: Dispatch<SetStateAction<Product[]>>;

  toCart: Product[];
  setToCart: Dispatch<SetStateAction<Product[]>>;

  fromLocalStorage: ToCartProps[];
  setFromLocalStorage: Dispatch<SetStateAction<ToCartProps[]>>;
  detail: Product | null;
  setDetail: Dispatch<SetStateAction<Product | null>>;
};

export const ProductProvider = ({ children }: PropsWithChildren) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [refresh, setRefresh] = useState(1);
  const [selectedProd, setSelectedProd] = useState<Product | null>(null);
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const [deliveryStatus, setDeliveryStatus] = useState("");
  const [toCart, setToCart] = useState<ToCartProps[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  const [detail, setDetail] = useState<Product | null>(null);

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
      const { data } = await api.post("/product/editProduct", params, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      toast.success(data.message, {
        position: "top-center",
      });

      router.push("/dashboard/product");

      setRefresh((prev) => prev + 1);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  const postCategory = async (category: string) => {
    try {
      const { data } = await api.post(
        "/category/add",
        {
          category,
        },
        {
          headers: {
            Authorization: localStorage.getItem("secret"),
          },
        }
      );

      toast.success(data.message, {
        position: "top-center",
      });

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

  const getCategory = async () => {
    try {
      const { data } = await api.get("/category/get", {
        headers: {
          Authorization: localStorage.getItem("secret"),
        },
      });

      setCategoryList(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllProduct = async () => {
    try {
      const { data } = await api.get("/product/allPro");

      setAllProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const rawData = localStorage.getItem("productInCart");
    if (!rawData) {
      setIsSaved(true);
      return;
    }
    setToCart(JSON.parse(rawData));

    setIsSaved(true);
  }, []);

  useEffect(() => {
    if (!isSaved) return;
    localStorage.setItem("productInCart", JSON.stringify(toCart));
  }, [toCart]);

  useEffect(() => {
    getProduct();
    getCategory();
    getAllProduct();
  }, [refresh]);

  console.log("toCart", toCart);

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
        postCategory,
        categoryList,
        setCategoryList,
        allProduct,
        setAllProduct,
        toCart,
        setToCart,
        detail,
        setDetail,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
