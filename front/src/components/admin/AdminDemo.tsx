"use client";
import {
  CallOutlined,
  EmailOutlined,
  ExpandMoreOutlined,
  FavoriteBorderOutlined,
  PersonOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";

import {
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { AdminScroll } from "./AdminScroll";
import { useProduct } from "../providers/ProductProvider";

export const AdminDemo = () => {
  const { productList } = useProduct();

  return (
    <div className="w-[full] h-[full] bg-[white]  ">
      <div className="bg-[#7E33E0] w-[full] py-4">
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

          <div className="flex w-[full]">
            <input
              type="text"
              className="border-2 border-[#E7E6EF] width-[full] h-8"
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
      <div className="bg-[#F6F5FF] py-8">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="w-[full] ">
            <div className="flex flex-row gap-1">
              <p className="text-base">Home</p>
              <p className=" text-base text-[#FB2E86]">. Order Complete</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[white] w-[full]  py-40  ">
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="w-[full] h-[full] flex flex-col gap-8 ">
            <p className="text-[24px] text-[#1D3178]">Hekto Demo</p>
            <p className="text-[12px] text-[#1D3178]">
              Cart/ Information/ Shipping/ Payment
            </p>
            <div className="flex flex-row gap-8 w-[full]">
              <div className=" flex flex-col gap-20 w-[70%] h-[full] rounded px-10 justify-center bg-[#F8F8FD]  ">
                <div className="flex flex-col w-[full] gap-10">
                  <p className="text-[#1D3178] text-[18px] font-bold">
                    Contact Information
                  </p>

                  <div className=" flex flex-col w-[full] gap-6">
                    <TextField
                      id="standard"
                      label="Email or mobile phone number"
                      variant="standard"
                      sx={{ width: "full", color: "#F8F8FD" }}
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Keep me up to date on news and excluive offers"
                      sx={{ color: "#8A91AB", font: "12px" }}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-[full] gap-10">
                  <p className="text-[#1D3178] text-[18px] font-bold">
                    Shipping address
                  </p>
                  <div className="flex flex-col w-[full] gap-6">
                    <div className="flex flex-row  w-[full] gap-5">
                      <TextField
                        id="standard"
                        label="First name (optional)"
                        variant="standard"
                        sx={{ width: "50%", color: "#F8F8FD" }}
                      />
                      <TextField
                        id="standard"
                        label="Last name"
                        variant="standard"
                        sx={{ width: "50%", color: "#F8F8FD" }}
                      />
                    </div>
                    <TextField
                      id="standard"
                      label="Address"
                      variant="standard"
                      sx={{ width: "full", color: "#F8F8FD" }}
                    />
                    <TextField
                      id="standard"
                      label="Appaetnentment,suit,e.t.c (optinal)"
                      variant="standard"
                      sx={{ width: "full", color: "#F8F8FD" }}
                    />
                    <TextField
                      id="standard"
                      label="City"
                      variant="standard"
                      sx={{ width: "full", color: "#F8F8FD" }}
                    />
                    <div className="flex flex-row gap-8">
                      <TextField
                        id="Bangladesh"
                        label="First name (optional)"
                        variant="standard"
                        sx={{ width: "50%", color: "#F8F8FD" }}
                      />
                      <TextField
                        id="standard"
                        label="Postal Code"
                        variant="standard"
                        sx={{ width: "50%", color: "#F8F8FD" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start w-[30%] ">
                  <button className="w-[full] h-[44px] rounded bg-[#FB2E86] text-[white] px-4 text-[16px]">
                    Continue Shipping
                  </button>
                </div>
              </div>
              <div className="flex flex-col w-[40%] gap-10">
                <div className="h-[600px]  w-[full] flex flex-col overflow-scroll relative overflow-hidden gap-5	">
                  {productList.map((item, index) => {
                    return (
                      <AdminScroll
                        key={index}
                        image={item.productImage}
                        label={item.additionInfo}
                        color={item.color}
                        price={item.mainPrice}
                      />
                    );
                  })}
                </div>
                <div className="w-[full] h-[243px] border bg-[#F4F4FC] flex flex-col justify-center gap-5 px-8 ">
                  <div className="border-b-[2px] text-[18px]  flex flex-row  py-2 ">
                    <p className="text-[18px] text-[#1D3178] w-[70%] px-2">
                      Нийлбэр:
                    </p>
                    <p className="text-[18px] font-bold text-[#151875] w-[20%] px-2 ">
                      {productList.reduce(
                        (currentValue, total) =>
                          currentValue + Number(total.mainPrice),
                        0
                      )}
                      ₮
                    </p>
                  </div>
                  <div className="border-b-[2px] text-[18px]  text-[#151875] flex flex-row  py-2  ">
                    <p className="text-[18px] text-[#1D3178] w-[70%] px-2">
                      Төлөх дүн:
                    </p>
                    <p className="text-[20px] font-bold text-[#151875] w-[20%] px-1">
                      {productList.reduce(
                        (currentValue, total) =>
                          currentValue + Number(total.mainPrice),
                        0
                      )}
                      ₮
                    </p>
                  </div>
                  <button className="bg-[#19D16F] w-[full] h-[40px] text-[white] rounded ">
                    Худалдан авах
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
