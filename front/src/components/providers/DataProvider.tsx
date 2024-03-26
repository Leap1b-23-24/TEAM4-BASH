"use client";

import { api } from "@/src/common";
import { AxiosError } from "axios";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

const DataContext = createContext<DataContextType>({} as DataContextType);

export type Comment = {
  _id: string;
  productId: string;
  userId: string;
  comment: string;
  createdAt: Date;
};

type DataContextType = {
  postComment: (comment: string, productId: string, userId: string) => void;

  comment: Comment[];
  setComment: Dispatch<SetStateAction<Comment[]>>;
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [refresh, setRefresh] = useState(1);

  const postComment = async (
    comment: string,
    productId: string,
    userId: string
  ) => {
    try {
      const { data } = await api.post(
        "/comment/rate",
        {
          comment,
          productId,
          userId,
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

  return (
    <DataContext.Provider
      value={{
        postComment,
        comment,
        setComment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
