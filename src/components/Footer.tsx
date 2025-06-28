import Image from "next/image";
import Socials from "./Socials";

const Footer = () => {
return (
    <div className="flex flex-col w-[100%] justify-center items-center p-4 pt-8">
        
    <Socials/>
    <div className="p-2">
        <Image width={150} height={150} alt="dynohunter logo"  src="/images/dynohunter-logo.png"/>
        </div>
      <a target="_blank" href="http://www.clarksmith.dev">
      <div className="text-[10px] text-[#D0D0D0] cursor-pointer">
            Built by CP Smith Solutions
        </div>
      </a>
       
    </div>
)
}

export default Footer;