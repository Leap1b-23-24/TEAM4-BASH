"use client";

import {
  NotificationsNoneOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import { useAuth } from "../providers/AuthProvider";

export const Header = () => {
  const { user, isLogged } = useAuth();

  return (
    <div className="flex bg-black w-full justify-center py-3">
      <div className="justify-between flex px-10 w-[1700px]">
        <Image
          alt="logo"
          src="/pinelogo.png"
          width={30}
          height={30}
          className="cursor-pointer"
        />

        <div className="flex gap-8 items-center">
          <NotificationsNoneOutlined className="text-white" />
          <div className="flex gap-6 items-center">
            <PersonOutlineOutlined className="text-white" />
            <p className="text-white text-[14px] font-normal">
              {isLogged ? user?.name : "Username"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
