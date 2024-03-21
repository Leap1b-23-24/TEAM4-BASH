type TitleProps={
    text:string;
    text1:string;
}
export const AdminText =({text, text1}:TitleProps)=>{
    return(
        <div className="w-[fit] py-2 px-2 flex flex-col gap-4">
<p className="text-[17px] font-bold text-[#1D3178]"> {text}</p>
<p className="text-[16px] text-[#A1ABCC]">{text1}</p>
        </div>
    )
}