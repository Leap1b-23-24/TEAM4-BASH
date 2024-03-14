import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { CustomInput } from "../customs/CustomInput";

type FormikProps = {
  productName: string;
  additionInfo: string;
  barCode: number;
  productImage: string;
  mainPrice: number;
  quantity: number;
  onChange: any;
};

export const AddProductOne = (props: FormikProps) => {
  const {
    productName,
    additionInfo,
    barCode,
    productImage,
    mainPrice,
    quantity,
  } = props;

  return (
    <div className="basis-0 grow flex flex-col gap-6">
      <div className="basis-0 w-full grow bg-white p-6 rounded-xl flex flex-col gap-4">
        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Бүтээгдэхүүний нэр</p>

          <input
            type="text"
            placeholder="Нэр"
            className="w-full py-2 pl-2 bg-[#F7F7F8] rounded-lg"
            name="productName"
            value={productName}
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Нэмэлт мэдээлэл</p>
          <input
            type="text"
            placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон"
            className="w-full py-2 pl-2 bg-[#F7F7F8] rounded-lg border-2"
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Барааны код</p>
          <input
            type="text"
            placeholder="#1122"
            className="w-full py-2 pl-2 bg-[#F7F7F8] rounded-lg border-2"
          />
        </div>
      </div>

      <div className="w-full rounded-xl p-6 gap-3 flex flex-col bg-white">
        <p className="font-[600] text-[18px]">Бүтээгдэхүүний зураг</p>

        <div className="flex items-center gap-3">
          <div className="border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px] relative"></div>
          <div className="absolute ml-[52px]">
            <AddPhotoAlternateOutlined />
          </div>

          <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center">
            <p className="text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
              +
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-6 rounded-xl flex gap-4 bg-white">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
          <input
            type="text"
            placeholder="Үндсэн үнэ"
            className="w-full py-2 pl-2 bg-[#F7F7F8] rounded-lg border-2"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">
            Үлдэгдэл тоо ширхэг
          </p>
          <input
            type="text"
            placeholder="Үлдэгдэл тоо ширхэг"
            className="w-full py-2 pl-2 bg-[#F7F7F8] rounded-lg border-2"
          />
        </div>
      </div>
    </div>
  );
};
