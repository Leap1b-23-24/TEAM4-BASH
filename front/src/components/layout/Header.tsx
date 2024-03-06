export const Header = () => {
  return (
    <div className="flex bg-black justify-between px-10 py-4">
      <img src="pinelogo.png" alt="" width={36} />

      <div className="flex gap-8">
        <img src="bell.png" alt="" width={32} />

        <div className="flex gap-4">
          <img src="container.png"></img>
          <p className="text-white text-[14px] font-normal pt-2">Username</p>
        </div>
      </div>
    </div>
  );
};
