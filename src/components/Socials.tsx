import Image from "next/image";

const Socials = () => {
    return (
        <div className="flex p-5 pt-0 justify-around items-end">
    <div className="mb-2">
      <div className="cursor-pointer">
      <Image alt="facebook logo" width={30} height={30} src="/images/facebook-white.svg"/>
      </div>
  
    </div>
   
<div className=" ">
<div className="cursor-pointer">
<Image alt="instagram logo" width={40} height={40} src="/images/instagram-white.svg"/>
</div>
</div>
  
       

<div className="mb-2 ">
  <div className="cursor-pointer">
  <Image alt="soundcloud logo" width={40} height={40} src="/images/soundcloud-white.png"/>
  </div>
</div>
<div className="mb-2 ">
<div className="cursor-pointer">
<Image alt="bandcamp" width={40} height={40} src="/images/bandcamp-white.png"/>
</div>
</div>
<div className="mb-2">
<div className="cursor-pointer">
<Image alt="spotify" width={32} height={32} src="/images/spotify-white.png"/>
</div>
</div>
<div className="mb-2">
<div className="cursor-pointer">
<Image alt="merch store" width={32} height={32} src="/images/store-white-2.png"/>
</div>
</div>
</div>
    )
}
export default Socials;
