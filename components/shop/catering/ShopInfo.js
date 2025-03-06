import Image from "next/image";
import Link from "next/link";

import handleWhatsAppClick from "@/helpers/whatsapp";
import arrowRightIcon from "../../../public/images/icon/arrow-right.svg";
import ShopHeader from "../ShopHeader";

const ShopInfo = (props) => {
    const {header, title, logo, subTitle, products, whatsappNumber, shopImageFolder} = props;
    return <section className="px-5 pt-16 md:px-8">
    <ShopHeader
      header={header}
      title={title}
      logo={logo}
      subTitle={subTitle}
    />

    <div className="w-full pt-10 grid gap-7 relative grid-cols-1 size1:grid-cols-2 size2:grid-cols-3 size4:grid-cols-4">
      {products.map((product, index) => (
          <div key={index} className="bg-color1 shadow-md h-[550px] rounded-tl-3xl rounded-tr-3xl overflow-hidden w-full relative ">
            <div className="bg-white rounded-br-2xl w-max px-5 flex items-end h-max text-color1 absolute top-0">
              {product.name}
            </div>
            <Image
              src={`/images/shop/catering/${shopImageFolder}/${product.imageUrl}`}
              loading="eager"
              priority
              height={717}
              alt={`${header} ${product.name}`}
              width={960}
              className="h-full w-full object-cover"
            />
            <button
              onClick={() =>
                handleWhatsAppClick(
                  `Hello! ${header}, I am contacting you from your website, please what is the price for ${product.name}`,
                  whatsappNumber
                )
              }
              className="absolute bottom-3 overflow-hidden rounded- right-3 left-3 h-20 "
            >
              <div className="flex flex-col items-center justify-center text-base h-28 w-full body relative">
                <div className="light x1"></div> <div className="light x2"></div>{" "}
                <div className="light x3"></div> <div className="light x4"></div>{" "}
                <div className="light x5"></div> <div className="light x6"></div>{" "}
                <div className="light x7"></div> <div className="light x8"></div>{" "}
                <div className="light x9"></div>
                <p className="font-semibold border-b pb-0.5 mb-0.5 border-blue-100 text-sm size1:text-base">
                  {product.name}
                </p>
                <div className="flex shadow-md items-center space-x-2">
                  <p>Contact vendor</p>
                  <Image
                    alt={"arrow right icon"}
                    src={arrowRightIcon}
                    priority
                    loading="eager"
                  />
                </div>
              </div>
            </button>
          </div>
        
      ))}
    </div>

    <div className="flex justify-center mb-12 mt-14">
      <button
        onClick={() =>  
          handleWhatsAppClick(
            `Hello! ${header}, I am contacting you from your website, please I want to make enquiry of your services.`,
            whatsappNumber
          )
        }
        className={`hover:scale-105 transition-transform duration-100 flex items-center space-x-2 rounded-md bg-black/70 py-5 px-4`}
      >
        <p>Contact {header}</p>{" "}
        <Image
          alt={"arrow right icon"}
          src={arrowRightIcon}
          priority
          loading="eager"
        />
      </button>
    </div>
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
}

export default ShopInfo;