import OneTable from "./ProductTableMini";
import OneProductData from "./ProductData";

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
    <section className="w-full rounded-xl flex flex-col divide-y divide-[#D6D8DB] bg-white">
      <header className="flex flex-row">
        {ProductData.map((product, index) => (
          <div
            style={{
              width:
                product === ""
                  ? `${"90px"}`
                  : product === "Ангилал"
                  ? `${"240px"}`
                  : "180px",
            }}
            key={index}
            className="flex items-center py-[14px] font-[600] text-[12px] font-sans text-[#3F4145]"
          >
            {product}
          </div>
        ))}
      </header>
      <main className="w-full h-fit flex flex-col overflow-y-auto divide-y divide-[#D6D8DB]">
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
