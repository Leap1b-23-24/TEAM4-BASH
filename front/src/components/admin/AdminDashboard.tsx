export const AdminDashboard = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-white w-[15%] h-full pt-6 gap-4 flex flex-col">
        <div className="flex pl-6 gap-4 border-black py-3">
          <img src="menu.png" alt="" width={24} />
          <p className="text-lg font-semibold">Хяналтын самбар</p>
        </div>
        <div className="flex pl-6 gap-5 border-black py-3">
          <img src="bag.png" alt="" width={18} />
          <p className="text-lg font-semibold">Захиалга</p>
        </div>
        <div className="flex pl-6 gap-3 border-black py-3">
          <img src="lead.png" pl-6 alt="" width={26} />
          <p className="text-lg font-semibold">Орлого</p>
        </div>
        <div className="flex pl-6 gap-5  border-black py-3">
          <img src="list.png" alt="" width={22} />
          <p className="text-lg font-semibold">Бүтээгдэхүүн</p>
        </div>
        <div className="flex pl-6 gap-4 border-black py-3">
          <img src="set.png" alt="" width={24} />
          <p className="text-lg font-semibold">Тохиргоо</p>
        </div>
      </div>

      <div className="w-[85%] bg-[#000]"></div>
    </div>
  );
};
