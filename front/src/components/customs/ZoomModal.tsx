import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type ZoomModalProps = {
  image: string[];
  handleClose: Dispatch<SetStateAction<boolean>>;
  label: string;
};

export const ZoomModal = (props: ZoomModalProps) => {
  const { image, handleClose, label } = props;
  return (
    <Modal open>
      <div className="items-center flex justify-center h-full">
        <div className="p-5 bg-white rounded-md w-[500px]">
          <div className="flex justify-end cursor-pointer">
            <img
              src="/x.png"
              onClick={() => {
                handleClose(false);
              }}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#111C85] text-[28px] font-[800]">{label}</p>
            <img src={image[0]} className="w-[350px] h-[400px] rounded" />
          </div>
        </div>
      </div>
    </Modal>
  );
};
