"use client";

import { Container } from "@mui/material";
import { useRouter } from "next/navigation";

export default function OrderCompleted() {
  const router = useRouter();

  return (
    <div className="w-[full] h-[full] bg-[white]">
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

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex  gap-40 items-center h-[full] pt-10 pb-20">
          <img src="/clock.png" className="pb-[30%]" />

          <div className="flex flex-col gap-10 w-[70%] h-[fit] pb-30 items-center">
            <div className="relative">
              <div className="relative ">
                <img src="/ring.png" width={"100%"} height={80}></img>
                <div className="absolute bottom-2 left-2.5">
                  <img src="/Ellipse.png"></img>
                </div>
              </div>
              <div className="absolute bottom-4 left-5">
                <img src="/Vector.png"></img>
              </div>
            </div>

            <p className="text-[36px] text-[#101750] font-[800]">
              Таны захиалга амжилттай
            </p>

            <p className="text-[#8D92A7] text-[16px] font-[600] text-center">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 hours. You will receive an email
              confirmation when your order is completed.
            </p>

            <button
              className="bg-[#FF1788] w-[30%] py-3 rounded text-[white] hover-bg-[#FF1788]"
              onClick={() => {
                router.push("/home");
              }}
            >
              Үргэлжлүүлэх
            </button>
          </div>

          <img src="/Group.png" className="pt-[50%] "></img>
        </div>
      </Container>
    </div>
  );
}
