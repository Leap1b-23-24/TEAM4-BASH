import { Card } from "@mui/material";
import { useData } from "../../providers/DataProvider";
import { useAuth } from "../../providers/AuthProvider";
type AllUnelgeeProps = {
  productId?: string;
};
export const AllUnelgee = (props: AllUnelgeeProps) => {
  const { allComment } = useData();
  const { productId } = props;

  const productComment = allComment.filter(
    (item) => item.productId == productId
  );

  return (
    <div className="flex flex-col gap-4">
      <p className="text-[18px] font-[800] text-[#1D3178]">Нийт үнэлгээ:</p>

      <Card sx={{ p: 3 }}>
        {productComment.map((item, index) => {
          // const user = allUser.filter((user) => user._id === item._id);

          return (
            <div key={index} className="flex flex-col gap-4 py-4">
              <p className="text-[18px] font-[800] text-[#1D3178]">{}</p>
              <p className="text-[17px] text-[#9295AA] font-normal">
                {item.comment}
              </p>
              <p className="border-dashed border-b-2 border-[#BFC6E0] w-full"></p>
            </div>
          );
        })}
      </Card>
    </div>
  );
};
