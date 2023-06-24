import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
return (
    <div className="flex flex-col w-[100%] justify-center items-center p-4 pt-8">
        
    <Socials/>
    <div className="p-2">
        <Image width={150} height={150} alt="dynohunter logo"  src="/images/dynohunter-logo.png"/>
        </div>
        {/* <a href="mailto:dynohuntermusic@gmail.com">
        <div className="text-[#D0D0D0] text-[12px]">dynohuntermusic@gmail.com</div>
        </a> */}
      
        <div className="text-[10px] text-[#D0D0D0] mt-2">
            Built by CP Smith Solutions
        </div>
    </div>
)
}

export default Footer;