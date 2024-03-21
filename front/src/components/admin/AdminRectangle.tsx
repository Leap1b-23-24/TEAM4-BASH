"useclient"
type TextProps = {
    
    title:string;
    title1:string;
}

export const AdminRectangle = ({ title,title1}:TextProps)=>{
    return(
        <div className="flex bg-[#F6F5FF] h-[286px] w-full min-w-[1300px] items-center px-80 ">
            <div className="w-[138px] h-[64px] flex flex-col gap-2">
                <p className="text-4xl text-[#101750] font-bold">{title}</p>
                <div className="flex flex-row gap-1">
                    <p className="text-base">Home</p>
                    <p>.</p>
                    <p className="tetxt-base">Pages</p>
                    <p className="text-[#FB2E86]">.</p>
                    <p className=" text-base text-[#FB2E86]">{title1}</p>
                </div>
            </div>
          
        </div>
    );
}