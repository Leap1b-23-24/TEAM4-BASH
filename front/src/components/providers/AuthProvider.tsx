"use client";

import { api } from "@/src/common";
import { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";
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

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type User = {
  _id?: string;
  name: string;
  email: string;
  password: string;
  userImage: string;
};

type AuthContextType = {
  isLogged: Boolean;
  signUp: (email: string, name: string, password: string) => void;
  login: (email: string, password: string) => void;

  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;

  allUser: User[];
  setAllUser: Dispatch<SetStateAction<User[]>>;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [allUser, setAllUser] = useState<User[]>([]);
  const [refresh, setRefresh] = useState(1);
  const router = useRouter();
  const pathname = usePathname();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post(
        "https://team4-bash.onrender.com/auth/login",
        {
          email,
          password,
        }
      );
      const { token } = data;
      localStorage.setItem("token", token);

      setIsLogged(true);

      if (pathname == "/auto/login") {
        router.push("/dashboard");
      }

      if (pathname == "/home/auto/login") {
        router.push("/home");
      }

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

  const signUp = async (email: string, name: string, password: string) => {
    try {
      const { data } = await api.post(
        "https://team4-bash.onrender.com/auth/sign",
        {
          email,
          name,
          password,
        }
      );

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);

      toast.success(data.message, {
        position: "top-center",
      });

      if (pathname == "/home/auto/signup") {
        router.push("/home/auto/login");
      }

      if (pathname == "/auto/sign") {
        router.push("/auto/login");
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message, {
          hideProgressBar: true,
          position: "top-center",
        });
      }
    }
  };

  const getUser = async () => {
    try {
      const { data } = await api.get(
        "https://team4-bash.onrender.com/auth/user",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      setUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllUser = async () => {
    try {
      const { data } = await api.get(
        "https://team4-bash.onrender.com/auth/all"
      );

      setAllUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    }
  }, [refresh]);

  useEffect(() => {
    getUser();
    getAllUser();
  }, [refresh]);

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signUp,
        login,
        user,
        setUser,
        allUser,
        setAllUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
