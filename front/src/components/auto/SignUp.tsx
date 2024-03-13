export const SignUp = () => {
  return (
    <div className="border-2 w-full h-screen bg-white px-14 py-10">
      <div className="flex gap-1 justify-start">
        <img src="pine.png" alt="" />
        <p className="text-3xl font-sans font-bold">pinecone</p>
      </div>

      <div className="flex h-[90%] justify-center items-center">
        <div className="flex flex-col border border-[#ECEDF0] p-10 gap-10 rounded-xl">
          <p className="text-[32px] font-bold flex justify-center">
            Бүртгүүлэх
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-normal">Таны имэйл</p>
              <input
                type="text"
                placeholder="Имэйл"
                className="border bg-[#F7F7F8] border-[#D6D8DB] w-[360px] h-[50px] rounded-lg pl-3"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[16px] font-normal">Таны нэр</p>
              <input
                type="text"
                placeholder="Нэр"
                className="border bg-[#F7F7F8] border-[#D6D8DB] w-[360px] h-[50px] rounded-lg pl-3  "
              />
            </div>

            <button className="text-[18px] font-normal bg-black text-white py-4 rounded-lg">
              Дараах
            </button>

            <div className="py-6 border-y-2 border-[#ECEDF0] flex flex-col items-center gap-4 mt-2">
              <div className="flex gap-2 px-[88px] py-4 rounded-lg bg-[#F7F7F8] cursor-pointer">
                <img src="google.png" className="object-cover" />
                <p className="text-[16px] font-normal">Google-ээр нэвтрэх</p>
              </div>

              <div className="flex gap-2 px-[78px] py-4 rounded-lg bg-[#F7F7F8] cursor-pointer">
                <img src="micro.png" className="object-cover" />
                <p className="text-[16px] font-normal">Microsoft-оор нэвтрэх</p>
              </div>

              <div className="flex gap-2 px-[92px] py-4 rounded-lg bg-[#F7F7F8] cursor-pointer">
                <img src="apple.png" className="object-cover" />
                <p className="text-[16px] font-normal">Apple-аар нэвтрэх</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <p className="text-[14px] text-[#525252] hover:font-semibold hover:border-b-2 border-black">
              Бүртгэлтэй юу?
            </p>
            <p className="text-[14px] text-[#525252] hover:font-semibold hover:border-b-2 border-black">
              Нэвтрэх
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-6 right-20 border-2 border-[#DADCE0] rounded-xl">
        <div className="flex py-2 border-b-2">
          <img src="google.png" className="py-3 pl-5" />
          <p className="text-[17px] text-[#5F6368] font-semibold py-3 pr-14 pl-3">
            Sign in to Pinecone with Google
          </p>
          <img src="x.png" className="py-[18px] px-6" />
        </div>

        <div className="py-4 flex gap-4 px-5">
          <img src="pro.webp" className="w-10 rounded-[50%] py-1" />
          <div>
            <p className="text-[16px] text-[#3C4043]">Chekist</p>
            <p className="text-[14px] text-[#5F6368]">chekist.ot@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
