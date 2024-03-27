import { CustomShopList } from "../customs/CustomShopList";
import { useProduct } from "../providers/ProductProvider";

export const ListView = () => {
  const { allProduct } = useProduct();

  return (
    <div className="flex flex-col gap-8 py-4">
      {allProduct.map((item, index) => {
        return (
          <CustomShopList
            key={index}
            image={item.productImage}
            label={item.productName}
            price={item.mainPrice}
            color={item.color}
            additionInfo={item.additionInfo}
            star={item.star}
            starCount={item.starCount}
          />
        );
      })}
    </div>
  );
};
