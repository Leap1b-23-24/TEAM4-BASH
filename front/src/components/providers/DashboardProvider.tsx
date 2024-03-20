"use client";
import { api } from "@/src/common";
import { AxiosError } from "axios";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { toast } from "react-toastify";

export const DashboardContext = createContext<DashboardContextType>(
  {} as DashboardContextType
);

type SelectedProdProps = {
  productName: string;
  additionInfo: string;
  barCode: string;
  productImage: string[];
  mainPrice: number;
  quantity: number;
  mainCategory: string;
  secondCategory: string;
  color: string[];
  size: string[];
  tag: string[];
};

type DashboardContextType = {
  selectedProd: SelectedProdProps[];
  setSelectedProd: Dispatch<SetStateAction<SelectedProdProps[]>>;
  deliveryStatus: string;
  setDeliveryStatus: Dispatch<SetStateAction<string>>;
};

const editProduct = async (params: SelectedProdProps) => {
  try {
    await api.post("editProduct", params);
  } catch (err) {
    if (err instanceof AxiosError) {
      toast.error(err.response?.data.message ?? err.message);
    }
  }
};

export const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [selectedProd, setSelectedProd] = useState<SelectedProdProps[]>([]);
  const [deliveryStatus, setDeliveryStatus] = useState("");

  return (
    <DashboardContext.Provider
      value={{
        selectedProd,
        setSelectedProd,
        deliveryStatus,
        setDeliveryStatus,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
