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

type DashboardContextType = {
  selectedProd: {};
  setSelectedProd: Dispatch<SetStateAction<{}>>;
};

export const DashboardProvider = ({ children }: PropsWithChildren) => {
  const [selectedProd, setSelectedProd] = useState({});

  const getSelectedProduct = async () => {
    try {
      const { data } = await api.get("");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message);
      }
    }
  };

  return (
    <DashboardContext.Provider value={{ selectedProd, setSelectedProd }}>
      {children}
    </DashboardContext.Provider>
  );
};
