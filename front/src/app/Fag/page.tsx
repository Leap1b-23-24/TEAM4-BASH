import { AdminRectangle } from "@/src/components/admin/AdminRectangle";
import { AdminText } from "@/src/components/admin/AdminText";

export  default function Page(){
    return(
<div className="flex flex-col text-[black] w-[full] h-[fit] bg-[white] gap-20 pb-20 ">
<AdminRectangle  title="FAQ" title1="Faq"/>  
<div className="flex flex-row gap-20 items-center  px-80 ">
    <div className="flex flex-col gap-10 w-[566px] h-[fit]"> 
    <p className="text-4xl text-[#1D3178] font-bold">Generel Information</p> 
    <div><AdminText text="Eu dictumst cum at sed euismood condimentum?"
    text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/></div>
    <AdminText text="Magna bibendum est fermentum eros." text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
    <AdminText text="Odio muskana hak eris conseekin sceleton?" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
    <AdminText text="Elit id blandit sabara boi velit gua mara?"
    text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis."/>
    </div>
        <div className="flex flex-col gap-20 w-[566px] h-[fit] bg-[#F6F5FF] pl-10 pt-20 pb-20">
            <p className="text-[24px] text-[#1D3178] font-bold">Ask a Question</p>
            <div className="flex flex-col gap-8">
                <input type="text" placeholder="Your Name *" className="w-[445px] h-[50px] border-2 rounded-lg px-3 bg-[white]"></input>
                <input type="text" placeholder="Your Name *" className="w-[445px] h-[50px] border-2 rounded-lg px-3 bg-[white]"></input>
                <input type="text" placeholder="Type Your Message*" className="w-[445px] h-[197px] h-[50px] border-2 rounded-lg px-3 pt-5 pb-40 bg-[white]"></input>
                <button className="bg-[#FB2E86] w-[156px] h-[48px] text-[white] rounded">Send Mail</button>
            </div>
        </div>
</div>

</div>

    )
}