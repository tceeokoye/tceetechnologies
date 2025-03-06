import Image from "next/image";

import handleWhatsAppClick from "@/helpers/whatsapp";

const sendMessageHandler = (name, type) => {
  handleWhatsAppClick(
    `Hello, I hope you're having a good day. Could you please provide me with the cost estimate for the ${name} ${type}?`,
    "+2348105175500"
  );
};


import React from 'react';

const Products = (props) => {
  return (
    <div className="border-primary1 border-t-2 border-opacity-50 mx-5 mt-5 pt-3 gap-7 grid col-span-1 md:pt-7 md:mx-12 size1:grid-cols-2 size2:grid-cols-3 size4:grid-cols-4">
      {props.productInfo.map((productData, index) => (
        <div
          key={index}
          className={"w-full grid-cols-1 my-4 mx-2 pb-6 sticky top-16 size1:static size1:top-0 flex flex-col"} // Ensure each grid item behaves as a flex container
        >
          <div className="relative px-3 bg-gray-700">
            <Image
              src={productData.imageUrl}
              alt="product"
              loading="eager"
              className="h-auto w-piw1 -mb-3 pt-3 rounded md:pt-5"
              width={540}
              height={388}
            />
          </div>
          <div className="flex flex-col justify-between flex-grow rounded-lg border border-primary p-5 mt-2 bg-primary">
            <div>
              <div className="flex justify-between text-white">
                <div className="space-y-2">
                  <p className="font-semibold text-base md:text-lg">{productData.name}</p>
                  <p className="text-sm md:text-base">{productData.type}</p>
                </div>
                <a
                  href={productData.link}
                  target="_blank"
                  className="flex items-center"
                >
                  <p className="text-xs">Live Project</p>{" "}
                  <div className="ml-1">
                    <img
                      src="/images/icon/arrow-right.svg"
                      alt="arrow right icon"
                      className="h-4 w-4 transform -rotate-45"
                      width={16}
                      height={16}
                    />
                  </div>
                </a>
              </div>
              <p className="text-base text-primary1 ">
                {productData.description}
              </p>
            </div>
            <div className="flex items-center border-t border-primary1 pt-2 justify-between">
              <button
                onClick={() => {
                  sendMessageHandler(productData.name, productData.type);
                }}
                className="bg-primary px-5 py-1 rounded-lg text-white shadow-custom-shadow2"
              >
                Buy
              </button>
              <p className="text-primary1">$ Negotiable</p>
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
};

export default Products;
