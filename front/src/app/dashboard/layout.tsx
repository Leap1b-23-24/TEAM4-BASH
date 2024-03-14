import { AdminSideBar } from "@/src/components/admin/AdminSideBar";
import Footer from "@/src/components/layout/AdminHomeFooter";
import { Header } from "@/src/components/layout/Header";
import { ProductProvider } from "@/src/components/providers/ProductProvider";
import { PropsWithChildren } from "react";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full max-w-[1700px] m-auto min-w-[769px]">
      <ProductProvider>
        <Header />
        <div className="flex h-screen">
          <AdminSideBar />
          {children}
        </div>
        <ToastContainer />
      </ProductProvider>
    </div>
  );
}
