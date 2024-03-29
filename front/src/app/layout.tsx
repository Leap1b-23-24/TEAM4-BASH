import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProductProvider } from "../components/providers/ProductProvider";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../components/providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { AdminHomeHeader } from "../components/layout/AdminHomeHeader";
import { AdminHomeFooter } from "../components/layout/AdminHomeFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ProductProvider>
            {children}
            <ToastContainer />
          </ProductProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
