import { AdminHomeFooter } from "@/src/components/layout/AdminHomeFooter";
import { AdminHomeHeader } from "@/src/components/layout/AdminHomeHeader";
import { ProductProvider } from "@/src/components/providers/ProductProvider";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full max-w-[1700px] m-auto min-w-[769px]">
      <ProductProvider>
        <AdminHomeHeader />
        {children}
        <AdminHomeFooter />
        <ToastContainer />
      </ProductProvider>
    </div>
  );
}
