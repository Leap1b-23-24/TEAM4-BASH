import { Container } from "@mui/material";

const data = [
  "Хувцас",
  "Камер, хэрэгсэл",
  "Ухаалаг утас, таблет",
  "Чихэвч",
  "Гэр ахуйн бараа",
];
const label = ["Бидний тухай", "Холбоо барих", "Түгээмэл асуулт хариулт"];

export const Footer = () => {
  return (
    <div className="py-24 bg-[#EEEFFB]">
      <Container
        sx={{
          display: "flex",
          gap: 24,
        }}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[38px] font-[800]">eCommerce</p>

          <div className="">
            <input
              type="text"
              placeholder="Email"
              className="w-[250px] h-[41px] border pl-4 rounded"
            />
            <button className="bg-[#FB2E86] py-[8px] px-3 rounded text-[16px] font-[500] text-[#EEEFFB]">
              Бүртгүүлэх
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-[16px] font-normal text-[#8A8FB9]">Хаяг</p>
            <p className="text-[16px] font-normal text-[#8A8FB9]">
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              Гурван гол - 401 тоот
            </p>
          </div>
        </div>
        <div className="flex gap-24">
          <div className="flex flex-col gap-7">
            <p className="text-[22px] font-[800]">Ангилал</p>
            <div className="flex flex-col gap-4  whitespace-nowrap">
              {data.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-[16px] font-normal text-[#8A8FB9]"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <p className="text-[22px] font-[800]">Бусад</p>
            <div className="flex flex-col gap-4">
              {label.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="text-[16px] font-normal text-[#8A8FB9] whitespace-nowrap"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
