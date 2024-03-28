import { Container } from "@mui/material";
import { AdminHomeHeader } from "../components/layout/AdminHomeHeader";
import { AdminHomeFooter } from "../components/layout/AdminHomeFooter";

export default function Page() {
  return (
    <div className="w-[full] h-[full] bg-[white]">
      <AdminHomeHeader />
      <div className="w-[full] h-[full] py-20 ">
        <Container sx={{ justifyContent: "center", alignItems: "center" }}>
          <div className="w-[1020px] py-12 pl-[90px] relative">
            <img src="/404.png"></img>
            <div className="flex flex-col gap-[50px] items-center  absolute bottom-[25%] left-[33%]">
              <p className="text-[24px] text-[#152970] font-bold ">
                Уучлаарай, таны хайсан мэдээлэл олдсонгүй
              </p>
              <button className="bg-[#FB2E86] w-[165px] py-[8px] px-3 rounded text-[16px] font-[500] text-[#EEEFFB]">
                Нүүр хуудас
              </button>
            </div>
          </div>
        </Container>
      </div>
      <AdminHomeFooter />
    </div>
  );
}
