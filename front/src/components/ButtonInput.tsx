"use client";
import { usePathname, useRouter } from "next/navigation";

function ButtonInput({ Label }: { Label: string }) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="w-full h-[88px] flex flex-row justify-between items-end">
      <button
        className="btn btn-circle"
        onClick={() => {
          pathname === "/step1"
            ? router.push("/")
            : pathname === "/step2"
            ? router.push("/step1")
            : pathname === "/step3"
            ? router.push("/step2")
            : router.push("/");
        }}
      >
        <img src="./arrow_back.png" alt="arrow" className="w-[24px] h-[24px]" />
      </button>
      <input
        type="button"
        value={`${Label}`}
        className="btn bg-[#D6D8DB] text-[#1C20243D] font-sans text-[16px] font-[600] "
        onClick={() => {
          pathname === "/step1"
            ? router.push("/step2")
            : pathname === "/step2"
            ? router.push("/step3")
            : pathname === "/step3"
            ? router.push("/")
            : router.push("/");
        }}
      />
    </div>
  );
}
export default ButtonInput;
