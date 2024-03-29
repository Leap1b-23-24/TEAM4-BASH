"use client";

import Image from "next/image";
import { useProduct } from "../providers/ProductProvider";
import { useEffect, useState } from "react";

export const AdminTable = () => {
  const { address, productList } = useProduct();
  const [no, setNo] = useState(1);

  const tableHead = ["№", "Бүтээгдэхүүн", "Зарагдсан", "Үнэ"];
  return (
    <div className="basis-0 grow bg-[#FFFFFF] rounded-xl py-[16px] px-[24px]">
      <div>
        <div className="flex justify-between mb-[20px]">
          <p className="text-[18px] leading-[24px] font-semibold">
            Шилдэг бүтээгдэхүүн
          </p>
          <div className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer">
            <img className="w-[7.41px] h-[12px]" src="./rightArr.svg"></img>
          </div>
        </div>
        <table className="w-[fill]">
          <thead>
            <tr className="border-b-[1px] border-[#D6D8DB]">
              {tableHead.map((item, index) => (
                <th
                  key={index}
                  className="px-[24px], py-[12px] bg-[#ECEDF0] text-[#3F4145] 
                text-[12px] leading-[16px] font-semibold"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {productList.map((item, index) => {
              return (
                <tr key={index} className="border-b-[1px] border-[#ECEDF0]">
                  <td className="py-[16px] px-[24px]">{index + 1}</td>
                  <td className="flex gap-[12px] p-[16px]">
                    <Image
                      width={40}
                      height={40}
                      src={item.productImage[0]}
                      alt="product image"
                    ></Image>
                    <div className="basis-0 grow flex flex-col gap-[4px]">
                      <p className="text-[14px] leading-[16px] font-semibold text-[#121316] line-clamp-1">
                        {item.productName}
                      </p>
                      <p className="text-[14px] leading-[20px] font-normal text-[#3F4145]">
                        {item.barCode}
                      </p>
                    </div>
                  </td>
                  <td className="py-[16px] pl-[28px] text-[14px] leading-[20px] font-normal text-[#121316]">
                    {item.productSoldQnty}
                  </td>
                  <td className="py-[16px] pl-[34px] text-[14px] leading-[20px] font-normal text-[#121316] whitespace-nowrap">
                    {Intl.NumberFormat().format(
                      item.mainPrice * item.productSoldQnty
                    )}
                    ₮
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
