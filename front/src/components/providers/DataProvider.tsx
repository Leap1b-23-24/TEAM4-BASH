// "use client";

// import { api } from "@/src/common";
// import { AxiosError } from "axios";
// import {
//   Dispatch,
//   PropsWithChildren,
//   SetStateAction,
//   createContext,
//   useContext,
//   useState,
// } from "react";
// import { toast } from "react-toastify";

// const DataContext = createContext<DataContextType>({} as DataContextType);

// type DataContextType = {
//   postComment: (comment: string, productId: string, userId: string) => void;

//   comment: Comment[];
//   setComment: Dispatch<SetStateAction<Comment[]>>;
// };

// export const DataProvider = ({ children }: PropsWithChildren) => {
//   return (
//     <DataContext.Provider
//       value={{
//         postComment,
//         comment,
//         setComment,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
