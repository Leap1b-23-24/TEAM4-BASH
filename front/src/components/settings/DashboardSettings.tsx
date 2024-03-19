import CheckIcon from '@mui/icons-material/Check';
export const DashboardSettings = ()=>{
return(
    <div className="w-full h-screen bg-[#F7F7F8] text-[black] py-20 px-40">
        <div className="w-[729px] h-[304px] rounded-lg border-1 bg-[white] flex gap-4 py-8 px-7  flex-col">
          <p className="text-[18px] font-bold"> Дэлгүүрийн профайл үүсгэх</p>
          <div className="flex flex-col gap-2 ">
            <div className="border-2 rounded-lg h-[60px] w-[676px] flex flex-row gap-4 py-3 px-4 ">
            <input type="checkbox"   className="checkbox w-[24px] border-1 rounded-xl border-black " />
                {/* <CheckIcon color="success" sx={{ fontWeight: 'bold' , width:24, height:24}} /> */}
                <p className='font-[16px] h-[24px] w-[60%]  '>Дэлгүүрийн төрлөө оруулна уу</p>
                <button className='rounded-lg bg-[white] border-2 py-1 h-[36px] px-2 font-[14px] w-[30%] font-bold'>Дэлгүүрийн төрөл</button>
            </div>
            <div className="border-2 rounded-lg h-[60px] w-[676px] flex flex-row gap-4 py-3 px-4 ">
            <input type="checkbox"   className="checkbox w-[24px] border-1 rounded-xl  border-black" />
                {/* <CheckIcon color="success" sx={{ fontWeight: 'bold' , width:24, height:24}} /> */}
                <p className='font-[16px] h-[24px] w-[60%]  '>Эхний бүтээгдэхүүнээ нэмнэ үү</p>
                <button className='rounded-lg bg-[white] border-2 py-1 h-[36px] px-2 font-[14px] w-[30%] font-bold'>Бүтээгдэхүүн нэмэх</button>
            </div>
            <div className="border-2 rounded-lg h-[60px] w-[676px] flex flex-row gap-4 py-3 px-4 ">
            <input type="checkbox"   className="checkbox w-[24px] border-1 rounded-xl border-black" />
                <p className='font-[16px] h-[24px] w-[60%] '>Хүргэлтийг тохируулна уу</p>
                <button className='rounded-lg bg-[white] border-2 py-1 h-[36px] px-2 font-[14px] w-[30%] font-bold'>Хүргэлт тохируулах</button>
            </div>
          </div>
        </div>
    </div>
  
)
}