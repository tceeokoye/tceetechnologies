import Image from "next/image";
import Link from "next/link";
import handleWhatsAppClick from "@/helpers/whatsapp";
import arrowRightIcon from "../../public/images/icon/arrow-right.svg";
import ShopHeader from "./ShopHeader";

const TeleCommunications = (props) => {
  const {
    header,
    title,
    logo,
    dataSubs,
    otherServicesMobieView,
    otherServicesDesktopView,
    whatsappNumber,
    motto
  } = props;
  return (
    <section className="relative z-20 mt-5 pt-10 px-5 md:px-8">
      <ShopHeader header={header} title={title} logo={logo} subTitle=" All subscription plan is valid for 30 days" />
      {/* <p className="text-center mb-2 animate-shimmering-silver-text leading-none text-2xl font-bold md:text-4xl">
        {header}
      </p>
      <p className="text-center font-light mb-7 text-sm md:text-base">
        {title}
      </p>
      
      <div className="w-80 h-80 mx-auto bg-gray-400 rounded-full overflow-hidden max-[584px]:h-52 max-[584px]:w-52">
        <Image
          src={logo}
          alt={`${header} logo`}
          className="w-full h-full object-cover"
          priority
          loading="eager"
        />
      </div>
      <p className="text-center mb-10 animate-float font-light text-sm md:text-base">
        All subscription plan is valid for 30 days
      </p> */}
      <div className="flex flex-wrap max-[950px]:gap-[6%] gap-[7.5%] max-[950px]:px-3 px-20">
        {" "}
        {dataSubs.map((subInfo, index) => {
          return (
            <div
              key={index}
              className={`border ${subInfo.companyBorderColor} max-[584px]:sticky max-[584px]:top-16 static top-0 flex flex-col shadow-2xl rounded-lg ${subInfo.companyColor} py-3 mb-10 max-[584px]:w-full max-[950px]:w-[47%] w-[28.3%]`}
            >
              <div className="h-20 rounded-full overflow-hidden mt-3 mb-5 w-20 mx-auto">
                <Image
                  src={subInfo.logo}
                  alt="data subscription plan"
                  className="w-full h-full object-cover"
                  priority
                  loading="eager"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between ">
                {" "}
                <div className="w-full px-5 space-y-3">
                  {subInfo.dataInfo.map((subInfoObj, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        handleWhatsAppClick(
                          `Hello! ${header}, I am contacting you from your website, please I want to purchase subscription for ${subInfo.type} ${subInfoObj.data} whose price is ₦${subInfoObj.price} as advertise on the webiste`,
                          whatsappNumber
                        )
                      }
                      className="flex justify-between cursor-pointer w-full rounded-md bg-black-50 py-1.5 px-4"
                    >
                      <p>{subInfoObj.data}</p>{" "}
                      <p>
                        <span className="text-sm">₦</span>
                        {subInfoObj.price}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center mb-4 mt-6">
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        `Hello! ${header}, I am contacting you from your website, please I want to purchase subscription for ${subInfo.type}`,
                        whatsappNumber
                      )
                    }
                    className={`hover:scale-105 transition-transform duration-100 flex items-center space-x-2 rounded-md bg-black/70 h-10 px-4`}
                  >
                    <p>Contact Vendor</p>{" "}
                    <Image
                      alt={"arrow right icon"}
                      src={arrowRightIcon}
                      priority
                      loading="eager"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {otherServicesDesktopView}
      </div>
      {otherServicesMobieView}
      <p className="animate-float text-center mt-10 underline">
       {motto} 
      </p>


      <Link
                  href="/shop"
                    className={`hover:scale-105 transition-transform duration-100 my-7 w-max mx-auto flex items-center space-x-2 rounded-md bg-black/70 h-10 px-5`}
                  >
                    <p>Go to shop</p>{" "}
                    <Image
                      alt={"arrow right icon"}
                      src={arrowRightIcon}
                      priority
                      loading="eager"
                    />
                  </Link>
    </section>
  );
};

export default TeleCommunications;
