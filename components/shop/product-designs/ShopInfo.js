import Image from "next/image";
import Link from "next/link";

import handleWhatsAppClick from "@/helpers/whatsapp";
import arrowRightIcon from "../../../public/images/icon/arrow-right.svg";
import ShopHeader from "../ShopHeader";

const ShopInfo = (props) => {
  const {
    header,
    title,
    logo,
    subTitle,
    products,
    whatsappNumber,
    shopImageFolder,
  } = props;
  return (
    <section className="px-5 pt-16 md:px-8">
      <ShopHeader
        header={header}
        title={title}
        logo={logo}
        subTitle={subTitle}
      />
      <p className="text-center text-lg font-medium size1:text-3xl">
        Highlights
      </p>
      <div className="w-full pt-10 grid gap-7 relative grid-cols-1 size1:grid-cols-2 size2:grid-cols-3 size4:grid-cols-4">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[28rem]  bg-gray-300 rounded-lg overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gray-500"></div>
              <div className="absolute top-0 right-0 w-2 h-full bg-gray-500"></div>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-full bg-gray-500"></div>
              <div className="absolute top-2 left-2 right-2 bottom-2 bg-gray-400">
                <Image
                  src={`/images/shop/product-design/${shopImageFolder}/${product.imageUrl}`}
                  loading={index < 8 ? "eager" : "lazy"}
                  priority={index < 8 ? true : false}
                  height={717}
                  alt={`${header} ${product.name}`}
                  width={960}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-9 h-2 stainless-steel rounded-full"></div>

              <div className="flex  font-extrabold  items-center text-base absolute border border-bg-gray-500 py-1 px-5 bottom-[4.5rem] left-1/2 transform -translate-x-1/2 w-max h-7 bg-black/45 rounded-full size1:text-lg">
               <p className="animate-shimmering-silver-text">{product.name}</p> 
              </div>
              <button
                onClick={() =>
                  handleWhatsAppClick(
                    `Hello! ${header}, I am contacting you from your website, please what is the price for ${product.name}`,
                    whatsappNumber
                  )
                }
                className="flex  items-center space-x-1 absolute text-lg px-5 border border-bg-gray-500 bottom-[2rem] left-1/2 transform -translate-x-1/2 w-max h-9 backdrop-filter backdrop-blur-3xl rounded-full"
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
          );
        })}
      </div>

      <div className="flex justify-center mb-12 mt-14">
        <button
          onClick={() =>
            handleWhatsAppClick(
              `Hello! ${header}, I am contacting you from your website, please I want to make enquiry of your services.`,
              whatsappNumber
            )
          }
          className={`hover:scale-105 transition-transform duration-100 text-black flex items-center space-x-2 rounded-md bg-cartonColor py-5 px-4`}
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
  );
};

export default ShopInfo;
