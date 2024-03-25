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

export type Review = {
  _id: string;
  productId: string;
  userId: string;
  star1: number;
  star2: number;
  star3: number;
  star4: number;
  star5: number;
  createdAt: Date;
};

type DataContextType = {
  postComment: (comment: string, productId: string, userId: string) => void;

  comment: Comment[];
  setComment: Dispatch<SetStateAction<Comment[]>>;

  allComment: Comment[];
  setAllComment: Dispatch<SetStateAction<Comment[]>>;

  starReview: (
    star1: number,
    star2: number,
    star3: number,
    star4: number,
    star5: number
  ) => void;

  star: Review[];
  setStar: Dispatch<SetStateAction<Review[]>>;
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [comment, setComment] = useState<Comment[]>([]);
  const [refresh, setRefresh] = useState(1);
  const [allComment, setAllComment] = useState<Comment[]>([]);
  const [star, setStar] = useState<Review[]>([]);

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

  const starReview = async (
    star1: number,
    star2: number,
    star3: number,
    star4: number,
    star5: number
  ) => {
    try {
      const { data } = await api.post(
        "/review/post",
        {
          star1,
          star2,
          star3,
          star4,
          star5,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getReview = async () => {
    try {
      const { data } = await api.get("/review/get", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setStar(data);
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
        starReview,
        star,
        setStar,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
