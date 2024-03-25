"use client";

import { DeleteOutlineOutlined, EditOutlined } from "@mui/icons-material";
import { useProduct } from "../providers/ProductProvider";
import { useState } from "react";
import { Modal } from "@mui/material";
import { useRouter } from "next/navigation";
import { Product } from "../providers/ProductProvider";

function OneTable({
  id,
  ProductName,
  ProductImage,
  ProductNumber,
  Category,
  Price,
  Total,
  SoldTotal,
  AddDate,
}: any) {
  const [remove, setRemove] = useState(false);

  const { productList, setSelectedProd, deleteProduct } = useProduct();

  const router = useRouter();

  return (
    <section id={id} className="flex flex-row items-center py-[16px]">
      <div className="w-[68px] h-fit flex justify-center items-center ">
        <input type="checkbox" className="w-[20px] h-[20px]" />
      </div>
      <div className="w-[156.8px] pl-[20px] h-fit flex items-center flex-row gap-3">
        <div className="w-[full] rounded-[50%] overflow-hidden">
          <img src={ProductImage} className="w-16 h-10" />
        </div>
        <div className="w-full h-fit flex flex-col gap-1">
          <p className="text-[14px] font-[600] text-[#121316]">{ProductName}</p>
          <p className="text-[12px] font-[400] text-[#5E6166]">
            {ProductNumber}
          </p>
        </div>
      </div>
      <div className="w-[214px] pl-[46px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {Category}
      </div>
      <div className="w-[156.8px] pl-[64px] h-fit flex items-center text-[14px] font-[400] text-[#121316] font-mono">
        {Price}₮
      </div>
      <div className="w-[156.8px] pl-[88px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {Total}
      </div>
      <div className="w-[156.8px] pl-[112px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145]">
        {SoldTotal}
      </div>
      <div className="pl-[132px] h-fit flex items-center text-[14px] font-[400] text-[#3F4145] whitespace-nowrap">
        {AddDate}
      </div>
      <div className="flex gap-6 pl-20">
        <DeleteOutlineOutlined
          className="text-[#1C20243D] cursor-pointer"
          onClick={() => {
            setRemove(true);
          }}
        />

        <EditOutlined
          onClick={() => {
            const selected = productList.find(
              (item) => item._id === id
            ) as Product;
            setSelectedProd(selected);
            router.push("/dashboard/product/addpro");
          }}
          className="text-[#1C20243D] cursor-pointer"
        />
      </div>

      {remove && (
        <Modal open>
          <div className="bg-white rounded-lg w-[384px] absolute top-[40%] left-[42%]">
            <p className="text-[20px] font-[600] text-[#171717] p-8 text-center">
              Та бүтээгдэхүүн устгахдаа <br></br> итгэлтэй байна уу?
            </p>
            <div className="w-full flex justify-between">
              <button
                className="cursor-pointer text-[18px] font-[600] border-t border-r border-black w-[50%] py-2 hover:rounded-bl-lg hover:bg-[#121316] hover:text-white"
                onClick={() => {
                  deleteProduct(id);
                }}
              >
                Тийм
              </button>
              <button
                className="cursor-pointer text-[18px] font-[600] border-t border-black  w-[50%] py-2 hover:hover:rounded-br-lg hover:bg-[#121316] hover:text-white"
                onClick={() => {
                  setRemove(false);
                }}
              >
                Үгүй
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
export default OneTable;
