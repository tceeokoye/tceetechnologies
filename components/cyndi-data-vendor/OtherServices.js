import Image from "next/image";

import handleWhatsAppClick from "@/helpers/whatsapp";
import arrowRightIcon from "../../public/images/icon/arrow-right.svg";

const OtherServices = (props) => {
  const {style, title, image, storeName, servicesInfo, whatsappNumber} = props;
    return <div
    className={`${style} flex-col relative top-0 shadow-2xl transform rounded-lg bg-black-50 py-3 mb-10 max-[584px]:w-full max-[918px]:w-[47%] w-[28.3%]`}
  >
    <p className="text-[27px] mt-3 mb-2 text-center font-medium max-[1200px]:text-[23px]">
      {title}
    </p>
    <div className="w-full px-5 space-y-3 text-center">
      <div className="h-20 rounded-full overflow-hidden mb-5 w-20 mx-auto">
        <Image
          src={image}
          alt="other services"
          className="w-full h-full object-cover"
          priority
          loading="eager"
        />
      </div>
      {servicesInfo.map((service, index) => <p key={index} onClick={() => 
        handleWhatsAppClick(
          `Hello! ${storeName}, I am contacting you from your website, please what is the price for ${service}`,
          whatsappNumber
        )} className="w-full bg-black/70 cursor-pointer py-1 px-3">
       {service}
      </p>)}
    </div>
    <div className="flex justify-center mb-4 mt-6">
      <button
       onClick={() => 
        handleWhatsAppClick(
          `Hello! ${storeName}, I am contacting you from your website, please I want prices for your ${title}`,
          whatsappNumber
        )}
       className={`hover:scale-105 transition-transform duration-100 rounded-sm bg-black/70 flex items-center space-x-2  h-10 px-4`}>
         <p>Contact Vendor</p>  <Image alt={"arrow right icon"} src={arrowRightIcon} priority loading="eager" />
      </button>
    </div>
  </div>
}

export default OtherServices;