import OneTable from "./ProductTableMini";
import OneProductData from "./productData";
const ProductData = [
  "",
  "Бүтээгдэхүүн",
  "Ангилал",
  "Үнэ",
  "Үлдэгдэл",
  "Зарагдсан",
  "Нэмсэн огноо",
];
function ProductTable() {
  return (
    <section className="w-[1170px] rounded-xl h-[692px] flex flex-col divide-y divide-black bg-white">
      <header className="flex felx-row">
        {ProductData.map((product, index) => (
          <div
            style={{
              width:
                product === ""
                  ? `${"68px"}`
                  : product === "Ангилал"
                  ? `${"214px"}`
                  : "156.8px",
            }}
            key={index}
            className="flex items-center justify-start py-[14px] pl-[24px] font-[600] text-[12px] font-sans text-[#3F4145]"
          >
            {product}
          </div>
        ))}
      </header>
      <main className="w-full h-fit flex flex-col overflow-y-auto divide-y divide-black">
        {OneProductData.map((product, index) => (
          <OneTable
            key={index}
            img={product.img}
            ProductName={product.ProductName}
            ProductNumber={product.ProductNumber}
            Category={product.Category}
            Price={product.Price}
            Total={product.Total}
            SoldTotal={product.SoldTotal}
            AddDate={product.AddDate}
          />
        ))}
      </main>
    </section>
  );
}
export default ProductTable;
