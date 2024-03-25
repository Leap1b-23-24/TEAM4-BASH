import { Card } from "@mui/material";

export const AllUnelgee = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[18px] font-[800] text-[#1D3178]">Нийт үнэлгээ:</p>

      <Card sx={{ p: 3 }}>
        <div className="flex flex-col gap-4 py-4">
          <p className="text-[18px] font-[800] text-[#1D3178]">Name</p>
          <p className="text-[17px] text-[#9295AA] font-normal">User comment</p>
          <p className="border-dashed border-b-2 border-[#BFC6E0] w-full"></p>
        </div>
      </Card>
    </div>
  );
};
