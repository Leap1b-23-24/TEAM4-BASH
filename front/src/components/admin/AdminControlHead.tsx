import {
  AttachMoney,
  ContentPasteRounded,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Container } from "@mui/material";
import { useProduct } from "../providers/ProductProvider";

export const AdminControlHead = () => {
  const { address } = useProduct();

  const arr = address.map((item, index) => item.toCart.map((item) => item));
  console.log(arr);

  const sum1 = arr.reduce(
    (sum, el) =>
      sum +
      el.reduce(
        (total, product) => total + product.count * product.sel.mainPrice,
        0
      ),
    0
  );

  const data = [
    {
      icon: <AttachMoney />,
      label: "Орлого",
      number: Intl.NumberFormat().format(sum1),
      date: "Өнөөдөр",
    },
    {
      icon: <ContentPasteRounded />,
      label: "Захиалга",
      number: 3,
      date: "Өнөөдөр",
    },
    {
      icon: <PersonOutlineOutlined />,
      label: "Хэрэглэгч",
      number: 2,
      date: "Өнөөдөр",
    },
  ];

  return (
    <div className="flex w-full gap-6 px-8 py-10">
      {data.map((item, index) => {
        return (
          <div className="basis-0 grow">
            <div
              key={index}
              className="py-4 px-8 bg-white rounded-lg gap-4 flex flex-col"
            >
              <div className="flex gap-3">
                {item.icon}
                <p className="text-base font-semibold font-inter">
                  {item.label}
                </p>
              </div>

              <p className="text-3xl font-bold">{item.number}</p>

              <p className="text-sm text-[#5E6166] font-normal">{item.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
