import {
  AttachMoney,
  ContentPasteRounded,
  PersonOutlineOutlined,
} from "@mui/icons-material";

export const AdminControlHead = () => {
  const data = [
    { icon: <AttachMoney />, label: "Орлого", amount: 235000, date: "Өнөөдөр" },
    {
      icon: <ContentPasteRounded />,
      label: "Захиалга",
      amount: 235000,
      date: "Өнөөдөр",
    },
    {
      icon: <PersonOutlineOutlined />,
      label: "Хэрэглэгч",
      amount: 235000,
      date: "Өнөөдөр",
    },
  ];

  return (
    <div className="flex w-full gap-6 px-8 py-10 text-[black]">
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

              <p className="text-3xl font-bold">{item.amount}</p>

              <p className="text-sm text-[#5E6166] font-normal">{item.date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
