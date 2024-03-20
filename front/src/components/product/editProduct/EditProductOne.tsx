import { AddPhotoAlternateOutlined } from "@mui/icons-material";
import { CustomInput } from "../../customs/CustomInput";
import Image from "next/image";

type EditProductOneProps = {
  productName: string;
  productNameOnChange: (e: React.ChangeEvent<any>) => void;
  additionInfo: string;
  additionInfoOnChange: (e: React.ChangeEvent<any>) => void;
  barCode: number;
  barCodeOnChange: (e: React.ChangeEvent<any>) => void;
  productImage: string[];
  productImageOnChange: (e: React.ChangeEvent<any>) => void;
  mainPrice: number;
  mainPriceOnChange: (e: React.ChangeEvent<any>) => void;
  quantity: number;
  quantityOnChange: (e: React.ChangeEvent<any>) => void;
};

export const EditProductOne = (props: EditProductOneProps) => {
  const {
    productName,
    productNameOnChange,
    additionInfo,
    additionInfoOnChange,
    barCode,
    barCodeOnChange,
    productImage,
    productImageOnChange,
    mainPrice,
    mainPriceOnChange,
    quantity,
    quantityOnChange,
  } = props;
  return (
    <div className="basis-0 grow flex flex-col gap-6">
      <div className="basis-0 w-full grow bg-white p-6 rounded-xl flex flex-col gap-4">
        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Бүтээгдэхүүний нэр</p>

          <CustomInput
            name="productName"
            value={productName}
            onChange={productNameOnChange}
            placeholder="Нэр"
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Нэмэлт мэдээлэл</p>
          <CustomInput
            name="additionInfo"
            onChange={additionInfoOnChange}
            value={additionInfo}
            placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон"
          />
        </div>

        <div className="gap-2 flex flex-col">
          <p className="text-[14px] font-semibold">Барааны код</p>
          <CustomInput
            name="barCode"
            onChange={barCodeOnChange}
            value={barCode}
            placeholder="#1122"
          />
        </div>
      </div>

      <div className="w-full rounded-xl p-6 gap-3 flex flex-col bg-white">
        <p className="font-[600] text-[18px]">Бүтээгдэхүүний зураг</p>

        <div className="flex items-center gap-3">
          {productImage?.length > 0 ? (
            productImage?.map((item) => (
              <div className="border-dashed border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px] relative">
                <Image src={item} alt="product image" fill />
              </div>
            ))
          ) : (
            <div className="border-dashed flex justify-center items-center border-2 border-[#D6D8DB] rounded-lg w-[125px] h-[125px]">
              <AddPhotoAlternateOutlined />
            </div>
          )}

          <div className="rounded-lg w-[125px] h-[125px] flex justify-center items-center">
            <p className="cursor-pointer text-xl flex justify-center items-center bg-[#ECEDF0] p-5 h-8 w-8 rounded-[50%]">
              +
            </p>
          </div>
        </div>
      </div>

      <div className="w-full p-6 rounded-xl flex gap-4 bg-white">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">Үндсэн үнэ</p>
          <CustomInput
            name="mainPrice"
            onChange={mainPriceOnChange}
            value={mainPrice}
            placeholder="Үндсэн үнэ"
          />
        </div>

        <div className="flex flex-col gap-1 w-full">
          <p className="text-[16px] font-semibold font-inter">
            Үлдэгдэл тоо ширхэг
          </p>
          <CustomInput
            name="quantity"
            onChange={quantityOnChange}
            value={quantity}
            placeholder="Үлдэгдэл тоо ширхэг"
          />
        </div>
      </div>
    </div>
  );
};
