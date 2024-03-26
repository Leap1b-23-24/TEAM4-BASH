"use client";

import { ProductHead } from "./ProductHead";
import { useState } from "react";
import { Modal } from "@mui/material";
import { CreateCategory } from "./Addcategory";

export const DashboardCategory = () => {
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div className="w-full h-full bg-[#F7F7F8]">
      <ProductHead />

      <div className="p-8 flex flex-col gap-6">
        <button
          className="py-3 rounded-xl w-[220px] text-[16px] text-white bg-black"
          onClick={() => {
            setOpenCategory(true);
          }}
        >
          + Ангилал нэмэх
        </button>
      </div>

      <Modal open={openCategory}>
        <div onClick={() => {}}>
          <CreateCategory handleClose={setOpenCategory} />
        </div>
      </Modal>
    </div>
  );
};
