"use client";

import { api } from "@/src/common";
import { AxiosError } from "axios";
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

  allComment: Comment[];
  setAllComment: Dispatch<SetStateAction<Comment[]>>;
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [refresh, setRefresh] = useState(1);
  const [allComment, setAllComment] = useState<Comment[]>([]);

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

  const getComment = async () => {
    try {
      const { data } = await api.get("/comment/get");

      setComment(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllComment = async () => {
    try {
      const { data } = await api.get("/comment/all");

      setAllComment(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComment();
    getAllComment();
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        postComment,
        comment,
        setComment,
        allComment,
        setAllComment,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
