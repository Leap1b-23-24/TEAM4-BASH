export const Header = () => {
  return (
    <div className="flex bg-black w-full justify-center">
      <div className="justify-between flex px-6 w-[1700px]">
        <img src="pinelogo.png" className="py-3 w-[30px]" />

        <div className="flex gap-6">
          <img src="bell.png" alt="" className="w-[24px] py-4" />

          <div className="flex gap-4">
            <img src="container.png" className="w-[40px] py-[8px]"></img>
            <p className="text-white text-[14px] font-normal pt-[18px]">
              Username{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
