"use client";

import { Button } from "@mui/material";

export default function OrderCompleted() {
  return (
    <div className="flex flex-col text-[black] w-[full] h-[fit] bg-[white] gap-20 pb-40  items-center justufy-items-center">
      <div className="flex bg-[#F6F5FF] h-[100px] w-full min-w-[1300px] items-center px-80 ">
        <div className="flex flex-row gap-1">
          <p className="text-base">Home</p>
          <p className=" text-base text-[#FB2E86]">. Order Complete</p>
        </div>
      </div>

      <div className="flex flex-row gap-20 items-center h-[423px]">
        <img src="/clock.png" className="pb-60" />
        <div className="flex flex-col gap-10 w-[625px] h-[fit] pb-30 items-center">
          <div className="relative">
            <div className="relative ">
              <img src="/ring.png" width={87} height={80}></img>
              <div className="absolute bottom-2 left-2.5">
                <img src="/Ellipse.png"></img>
              </div>
            </div>
            <div className="absolute bottom-4 left-5">
              <img src="/Vector.png"></img>
            </div>
          </div>

          <p className="text-[36px] text-[#101750]">Таны захиалга амжилттай</p>
          <p className="text-[#8D92A7] text-[16px]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <button className="bg-[#FF1788] w-[208px] h-[59px] rounded text-[white] hover-bg-[#FF1788]">
            Үргэлжлүүлэх
          </button>
          <Button variant="contained">Contained</Button>
        </div>
        <img src="/Group.png" className="pt-80"></img>
      </div>
    </div>
  );
}
