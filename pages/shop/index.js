import Link from "next/link";

import { useRef, useState } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import arrowRightIcon from "../../public/images/icon/arrow-right.svg";
import Image from "next/image";
import Head from "next/head";
import Footer from "@/components/layouts/Footer";

const animationTiming = {
  enter: 400,
  exit: 0,
};

const shopCategory = [
  {
    title: "Software",
    sub: [
      { title: "Website and Mobile App", link: "/tcee-technologies" },
     
    ],
  },
  {
    title: "Telecommunications",
    sub: [
      { title: "Cyndi Data Vendor", link: "/cyndi-data-vendor" },
      { title: "Miaj Corporation", link: "/miaj-corporation" }
    ],
  },
  {
    title: "Writing agency",
    sub: [
      { title: "Venerable Enterprice", link: "/venerable-enterprice" },
      { title: "Miaj Corporation", link: "/miaj-corporation" }
    ],
  },

  {
    title: "Catering", 
    sub: [
      { title: "Gracy's Delight Kitchen", link: "/gracys-delight-kitchen"},
      { title: "Mercy's Cuisine", link: "/mercy-cuisine" }
    ],
  },

  {
    title: "Fashion", 
    sub: [
      { title: "BG Collections", link: "/bg-collections" },
      { title: "Mariene Collection", link: "/mariene-collection" },
      { title: " Vines and Jewels", link: "/vines-collection" }
    ],
  },

  {
    title: "Building materials", 
    sub: [
      { title: "E-BRIGHT Aluminium Fabrication", link: "/E-bright-aluminium" },
      // { title: " Vines and Jewels", link: "/vines-collection" },
      // { title: "Mariene Collection", link: "/mariene-collection" }
    ],
  },
];

const Shop = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const nodeRef = useRef(null);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <Head>
        <title>Tcee-tech Shop - Explore Our Range of Products and Services</title>
        <meta
          name="description"
          content="Browse Tcee-tech Shop for a diverse range of products and services, including software solutions, telecommunications, writing agency services, and much more. Elevate your business and personal projects with our top-notch offerings."
        />
        <meta name="author" content="Tcee technologies" />
        <meta
          property="og:title"
          content="Tcee-tech Shop - Explore Our Range of Products and Services"
        />
        <meta
          property="og:description"
          content="Browse Tcee-tech Shop for a diverse range of products and services, including software solutions, telecommunications, writing agency services, and much more. Elevate your business and personal projects with our top-notch offerings."
        />
        <meta
          property="og:image"
          content="https://www.tceetechnologies.com/images/shop/TCEE.jpg"
        />
      </Head>
    <div className="">
       <div className="relative rounded-tl rounded-tr overflow-hidden flex items-center mt-8 ml-5 md:mt-20 md:ml-12 ">
          {" "}
          <div className="z-10 flex justify-center items-center bg-white flex-shrink-0 h-12 w-12 rounded-full overflow-hidden">
            {" "}
            <Image
              src="/images/icon/cart-icon.gif"
              alt="Software Marketplace: Explore and Acquire Cutting-Edge Solutions with Tcee Technologies"
              priority
              loading="eager"
              className="h-auto w-auto bg-transparent"
              width={40}
              height={40}
            />
          </div>
          <p className=" absolute container -left-[38rem] z-0 animate-slideFromLeft font-semibold text-xl md:text-3xl">
            Tcee-tech Shop
          </p>
        </div> 
      <div className=" mx-auto mt-10 px-5 md:mt-16 md:px-8">
        {shopCategory.map((shop, index) => (
          <div
            key={index}
            className="border border-primary1 bg-black/70 rounded-xl px-5 py-3 mb-5 md:px-8"
          >
            <button
              className="flex items-center justify-between w-full py-3 transition duration-300 ease-in-out"
              onClick={() => handleToggle(index)}
            >
              <span className="text-[16px] text-start font-medium text-gray-1 md:text-[24px]">
                {shop.title}
              </span>
              <div className="relative flex-shrink-0 h-[28px] w-[28px] md:h-[32px] md:w-[32px] border-[3px] border-white  rounded-full">
                <div
                  className={`absolute w-[50%] rounded-full h-[2px] bg-white inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeIndex !== index ? "rotate-90" : ""
                  } transition duration-300 ease-in-out`}
                ></div>
                <div
                  className={`absolute w-[50%] rounded-full h-[2px] bg-white inset-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                    activeIndex !== index ? "rotate-180" : ""
                  } transition duration-300 ease-in-out`}
                ></div>
              </div>
            </button>

            <CSSTransition
              nodeRef={nodeRef}
              mountOnEnter
              unmountOnExit
              in={activeIndex === index}
              timeout={animationTiming}
              classNames={{
                enter: "",
                enterActive: "OpenShop",
                exit: "",
                exitActive: "",
              }}
            >
              <div
                ref={nodeRef}
                className="max-w-[50rem] pb-2 px-2 pt-5 space-y-3 text-custom4 text-[14px] md:text-[20px]"
              >
                {shop.sub.map((store, index) => (
                  <Link className="flex justify-between items-center border-t py-3" key={index} href={store.link}>
                   <p>{store.title}</p> 
                   <Image alt={`${store.title} icon`} src={arrowRightIcon} priority loading="eager" />
                  </Link>
                ))}
              </div>
            </CSSTransition>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Shop;
