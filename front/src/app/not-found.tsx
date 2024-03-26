import { Container } from "@mui/material";
import { Footer } from "../components/layout/AdminHomeFooter";
import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export default function Page() {
  return (
    <div className="w-[full] h-[full] bg-[white]">
      <div className="bg-[#7E33E0] py-4">
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <div className="flex gap-20">
            <div className="flex gap-2">
              <EmailOutlined sx={{ color: "#FFF", width: 18, pt: 0.2 }} />
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                info@ecommerce.mn
              </p>
            </div>
            <div className="flex gap-2">
              <CallOutlined sx={{ color: "#FFF", width: 18 }} />
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                77123456
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex gap-1">
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                Нэвтрэх
              </p>
              <PersonOutlined sx={{ color: "#FFF", width: 20 }} />
            </div>

            <div className="flex gap-1">
              <p className="font-semibold text-[16px] text-[#F1F1F1] font-sans">
                Хадгалах
              </p>
              <FavoriteBorderOutlined sx={{ color: "#FFF", width: 16 }} />
            </div>

            <ShoppingCartOutlined sx={{ color: "#FFF", width: 19 }} />
          </div>
        </Container>
      </div>

      <div className="bg-white py-2">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="flex gap-16 items-center">
            <p className="font-[700] text-[34px] text-[#0D0E43]">Ecommerce</p>

            <div className="flex gap-8">
              <div className="flex hover:text-[#FB2E86]">
                <p className="text-[16px] font-normal">Нүүр</p>
                <ExpandMoreOutlined />
              </div>

              <p className="text-[16px] font-normal hover:text-[#FB2E86]">
                Ангилал
              </p>
            </div>
          </div>

          <div className="flex">
            <input
              type="text"
              className="border-2 border-[#E7E6EF] width-[315px] h-8"
            />
            <div>
              <Search
                sx={{
                  bgcolor: "#FB2E86",
                  height: 31,
                  width: 35,
                  p: 0.5,
                  color: "#FFF",
                }}
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="w-[full] h-[full] py-20 ">
        <Container sx={{ justifyContent: "center", alignItems: "center" }}>
          <div className="w-[1020px] h-[677px]  pt-[80px] pl-[90px] relative">
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

      <Footer />
    </div>
  );
}
