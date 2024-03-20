"use client";

import { api } from "@/src/common";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

type AuthContextType = {
  isLogged: Boolean;
  signUp: (email: string, name: string, password: string) => void;
  login: (email: string, password: string) => void;
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);
      router.push("/home");
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
      const { data } = await api.post("/auth/sign", {
        email,
        name,
        password,
      });

      const { token } = data;

      localStorage.setItem("token", token);

      setIsLogged(true);

      toast.success(data.message, {
        position: "top-center",
      });

      router.push("/auto/login");
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message ?? err.message, {
          hideProgressBar: true,
          position: "top-center",
        });
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        signUp,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
