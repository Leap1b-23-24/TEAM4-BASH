import {
  CalendarToday,
  FileDownloadOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";

export const DashboardIncome = () => {
  const data = [
    {
      id: "#ddd",
      gmail: "zolooo sara",
      phone: "8888",
      payment: "1300",
      date: "2023-10-22",
    },
    {
      id: "#ddd",
      name: "zoloo",
      gmail: "zolooo sara",
      date: "2023-10-22",
      time: "10:20",
      payment: "1300",
    },
  ];

  return (
    <div className="flex justify-center w-full bg-[#F7F7F8]">
      <div className="py-4 flex flex-col gap-6 ">
        <div className="border-2 border-[#ECEDF0] rounded-2xl overflow-hidden">
          <div className="p-6 flex justify-between bg-white border-b-2">
            <p className="text-xl font-bold">Орлого</p>
            <div className="flex border-2 bg-[#1C20240A] rounded-lg px-4 py-2 gap-2 items-center">
              <FileDownloadOutlined />
              <p className="text-sm font-semibold">Хуулга татах</p>
            </div>
          </div>

          <div className="p-6 flex justify-between bg-white">
            <p className="text-[28px] font-bold">22221</p>

            <div className="flex gap-2">
              <button className="text-sm font-semibold py-2 px-4 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
                Өнөөдөр
              </button>
              <button className="text-sm font-semibold py-2 px-6 border-2 rounded-xl text-[#3F4145] hover:text-white hover:bg-[#18BA51] bg-white">
                7 хоног
              </button>
              <button className="text-sm font-semibold text-[#3F4145] py-2 px-4 border-2 rounded-xl  hover:text-white hover:bg-[#18BA51] bg-white flex gap-2 items-center">
                <CalendarToday className="w-4 h-4" />
                <p>Сараар</p>
                <KeyboardArrowDownOutlined />
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden">
          <div className="py-4 px-6 flex bg-white border-b-2">
            <p className="text-sm font-semibold text-[#3F4145]">
              Захиалгын ID дугаар
            </p>
            <p className="text-sm font-semibold text-[#3F4145] pl-24">
              Захиалагч
            </p>
            <p className="text-sm font-semibold text-[#3F4145] pl-60">Төлбөр</p>
            <p className="text-sm font-semibold text-[#3F4145] pl-40">Огноо</p>
          </div>

          {data.map((item, index) => {
            return (
              <div className="bg-white px-6 py-4 flex border-b-2" key={index}>
                <p className="text-[14px] font-semibold text-[#121316] pt-2">
                  {item.id}
                </p>

                <div className="pl-[205px]">
                  <p className="text-base font-normal text-[#121316] whitespace-nowrap">
                    {item.gmail}
                  </p>
                  <p className="text-[14px] font-normal text-[#121316]">
                    {item.phone}
                  </p>
                </div>
                <p className="text-[16px] font-normal text-[#121316] pt-2 pl-[228px]">
                  {item.payment}
                </p>
                <p className="text-[14px] font-normal text-[#121316] pt-2 pl-[174px] whitespace-nowrap">
                  {item.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
