"use client";
import Image from "next/image";
import { useProduct } from "../../providers/ProductProvider";
import { Cancel } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useAuth } from "../../providers/AuthProvider";

type CompProps = {
  id: string | undefined;
  productImage: string;
  productName: string;
  color: string;
  price: number;
  count: number;
};

export const Comp = (props: CompProps) => {
  const { id, productImage, productName, color, price, count } = props;
  const { toCart, setToCart } = useProduct();

  return (
    <tr className="border-b-[#E1E1E4] border-b-[1px]">
      <td id={id} className="flex items-center gap-1 py-[10px]">
        <div className="group relative cursor-pointer">
          <Image
            src={productImage}
            width={100}
            height={100}
            style={{ objectFit: "cover", width: 100, height: 100 }}
            alt="image"
            className="mix-blend-multiply"
          />
          <Cancel
            onClick={() =>
              setToCart(toCart.filter((cart) => cart.sel._id !== id))
            }
            sx={{
              "&:hover": { color: "brown" },
            }}
            className="group-hover:block hidden absolute top-0 right-0 w-[25px] h-[20px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="whitespace-nowrap text-[#000000] font-extrabold text-[14px] leading-[17.15px]">
            {productName}
          </p>
          <div className="flex gap-2 text-[#A1A8C1] text-[12px] leading-[14.7px] font-extrabold">
            <p>Өнгө:</p>
            <p>{color}</p>
          </div>
        </div>
      </td>
      <td className="py-[10px] text-[#151875] font-bold text-[14px] leading-[14px]">
        <div className="flex justify-center">
          {Intl.NumberFormat().format(price)} ₮
        </div>
      </td>
      <td className="py-[10px]">
        <div className="flex justify-center">
          <div className="w-[50%] flex justify-center gap-3 items-center text-[#BEBFC2]">
            <p
              onClick={() => {
                const clicked = toCart.find((cart) => cart.sel._id == id);
                if (!clicked) return;
                const newQty = clicked?.count - 1;
                const newCart = toCart.map((item) => {
                  if (item.sel._id === id) {
                    if (clicked?.count > 1) return { ...item, count: newQty };
                  }
                  return { ...item };
                });

                setToCart(newCart);
              }}
              className="cursor-pointer bg-[#E7E7EF] flex-basis-0 grow flex justify-center"
            >
              -
            </p>
            <p className="flex justify-center font-extrabold text-[12px] leading-[14.7px] flex-basis-0 grow">
              {count}
            </p>
            <p
              onClick={() => {
                const clicked = toCart.find((cart) => cart.sel._id == id);
                if (!clicked) return;
                const newQty = clicked.count + 1;
                const newCart = toCart.map((item) => {
                  if (item.sel._id === id) {
                    return { ...item, count: newQty };
                  }
                  return { ...item };
                });

                setToCart(newCart);
              }}
              className="cursor-pointer bg-[#E7E7EF] flex-basis-0 grow flex justify-center"
            >
              +
            </p>
          </div>
        </div>
      </td>
      <td className="py-[10px] text-[#151875] font-bold text-[14px] leading-[14px]">
        <div className="flex justify-center">
          {Intl.NumberFormat().format(count * price)} ₮
        </div>
      </td>
    </tr>
  );
};

export const OrderInCart = () => {
  const { toCart, setToCart } = useProduct();
  const { user } = useAuth();
  const router = useRouter();
  console.log(toCart);

  const tableHeader = ["Бүтээгдэхүүн", "Үнэ", "Тоо ширхэг", "Нийт"];

  const sum = toCart.reduce((total, num) => {
    return total + Number(num.sel.mainPrice * num.count);
  }, 0);

  return (
    <div className="py-[150px] flex gap-[50px]">
      <div className="w-[60%]">
        <table className="w-[100%]">
          <thead>
            <tr className="font-extrabold text-[#1D3178] text-[20px] leading-[24.5px]">
              {tableHeader.map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {toCart.map((item, index) => (
              <Comp
                key={index}
                id={item.sel._id}
                productImage={item.sel.productImage[0]}
                productName={item.sel.productName}
                color={item.sel.color[0]}
                price={item.sel.mainPrice}
                count={item.count}
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-end ">
          <Button
            disableElevation
            onClick={() => setToCart([])}
            className="py-[12px] bg-[#FB2E86] normal-case mt-[50px] font-extrabold text-[16px] leading-[19.6px] text-[#FFFFFF]"
            variant="contained"
          >
            Карт цэвэрлэх
          </Button>
        </div>
      </div>
      <div className="w-[40%]">
        <p className="mb-[35px] text-center font-extrabold text-[20px] leading-[24.5px] text-[#1D3178]">
          Нийт төлөх
        </p>
        <div className="bg-[#F4F4FC] p-5 rounded-[3px] ">
          <div className="py-[15px] flex justify-between border-b-solid border-b-[#E8E6F1] border-b-[2px]">
            <p className="text-[#1D3178] font-semibold text-[18px]">Нийлбэр:</p>
            <p className="font-bold text-[18px] leading-[18px] text-[#151875]">
              {Intl.NumberFormat().format(sum)}₮
            </p>
          </div>
          <div className="py-[15px] flex justify-between border-b-solid border-b-[#E8E6F1] border-b-[2px]">
            <p className="text-[#1D3178] font-semibold text-[18px]">Нийлбэр:</p>
            <p className="font-bold text-[18px] leading-[18px] text-[#151875]">
              {Intl.NumberFormat().format(sum)}₮
            </p>
          </div>
          <Button
            disableElevation
            className="py-[15px] bg-[#19D16F] w-full normal-case mt-[50px] font-extrabold text-[16px] leading-[19.6px] text-[#FFFFFF]"
            variant="contained"
            onClick={() => {
              if (!user) {
                router.push("/home/auto/login");
              } else {
                router.push("/home/demo");
              }
            }}
          >
            Худалдан авах
          </Button>
        </div>
      </div>
    </div>
  );
};
