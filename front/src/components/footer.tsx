"use client";
import { useRouter } from "next/navigation";

const ancherData = [
  "Холбоо барих",
  "Үйлчилгээний нөхцөл",
  "Хүргэлтийн бүс",
  "Нууцлалын бодлого",
];
const FooterLogos = ["./facebook.png", "./instagram.png", "./twitter.png"];
function Footer() {
  const router = useRouter();
  return (
    <section
      className="w-full h-fit flex flex-col divide-y divide-[#ffffff20] items-center justify-center py-[50px] px-[260px]"
      style={{ background: `${"#12A795"}` }}
    >
      <header className="w-full h-[212px]  flex flex-col items-center gap-[48px] justify-between pb-[24px]">
        <div className="flex gap-[5.5px] w-full  h-fit flex-row justify-center items-center cursor-pointer">
          <img src="./Logo.png" alt="" className="w-[31.27px] h-[26.77px]" />
          <p className="text-[20px] text-white font-[700]">Ecommerce</p>
        </div>
        <div className="flex flex-col w-full h-fit gap-[24px] items-center justify-between">
          <div className="flex flex-row w-full justify-between h-fit ">
            {ancherData.map((ancher, index) => (
              <a
                href="./"
                key={index}
                className="font-[590] text-[16px] text-white text-center"
              >
                {ancher}
              </a>
            ))}
          </div>
          <div className="w-fit gap-[18px] h-fit flex flex-row">
            {FooterLogos.map((logo, index) => (
              <img
                src={`${logo}`}
                alt=""
                key={index}
                className="w-[40px] cursor-pointer"
                onClick={() => {
                  router.push("./");
                }}
              />
            ))}
          </div>
        </div>
      </header>
      <footer className="w-full h-[70px] flex flex-col items-center text-white justify-between pt-[24px]">
        <p>© 2024 Pinecone Ecommerse LLC </p>
        <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
      </footer>
    </section>
  );
}
export default Footer;
