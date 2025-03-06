import Image from "next/image";

const ShopHeader = (props) => {
    const {header, title, logo, subTitle} = props;
  return (
    <>
      <p className="text-center pb-2 animate-shimmering-silver-text leading-none text-2xl font-bold md:text-4xl">
        {header}
      </p>
      <p className="text-center font-light mb-7 text-sm md:text-base">
        {title}
      </p>
      <div className=" mx-auto bg-gray-400 rounded-full overflow-hidden h-52 w-52 size1:w-80 size1:h-80">
        <Image
          src={logo}
          alt={`${header} logo`}
          className="w-full h-full object-cover"
          priority
          loading="eager"
        />
      </div>
      <p className="text-center mb-10 animate-float font-light text-sm md:text-base">
       {subTitle}
      </p>
    </>
  );
};

export default ShopHeader;
