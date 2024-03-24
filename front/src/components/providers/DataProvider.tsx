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

export type Review = {
  _id: string;
  // star1: string;
  // star2: string;
  // star3: string;
  // star4: string;
  // star5: string;
  comment: string;
  createdAt: Date;
};

type DataContextType = {
  postReview: (
    // star1: string,
    // star2: string,
    // star3: string,
    // star4: string,
    // star5: string,
    comment: string
  ) => void;

  star: Review[];
  setStar: Dispatch<SetStateAction<Review[]>>;
};

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [star, setStar] = useState<Review[]>([]);
  const [refresh, setRefresh] = useState(1);

  const postReview = async (
    // star1: string,
    // star2: string,
    // star3: string,
    // star4: string,
    // star5: string,
    comment: string
  ) => {
    try {
      const { data } = await api.post(
        "/review/rate",
        {
          // star1,
          // star2,
          // star3,
          // star4,
          // star5,
          comment,
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
    getReview();
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        postReview,
        star,
        setStar,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
