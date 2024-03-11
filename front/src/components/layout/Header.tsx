export const Header = () => {
  return (
    <div className="flex bg-black w-full justify-center">
      <div className="justify-between flex px-6 py-2 w-[1600px]">
        <img src="pinelogo.png" className="w-[36px] py-2" />

        <div className="flex gap-6">
          <img src="bell.png" className="py-3 w-[28px]" />

          <div className="flex gap-5">
            <img src="container.png" className="w-[46px]" />
            <p className="text-white text-[16px] font-normal pt-4">Username</p>
          </div>
        </div>
      </div>
    </div>
  );
};
