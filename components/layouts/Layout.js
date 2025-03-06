import Image from "next/image";

import MainNavigation from "./Main-Navigation.js";

import heroImage from "../../public//images/hero.png";

const Layout = (props) => {
  return (
    <>
      {" "}
      <div className="fixed z-0 bottom-0 right-0 left-0 top-0 z-20 bg-primary h-screen w-full">
        {" "}
        <Image
          src={heroImage}
          alt="Dynamic Horizon: The Visual Canvas of tcee-tech's Portfolio"
          // style={{ filter: "brightness(0.1)" }}
          className="h-full w-full object-cover opacity-10"
          priority
          loading="eager"
        />{" "}
      </div>
      <div className="relative">
        <MainNavigation />
        <main className="relative z-30">{props.children}</main>
      </div>
    </>
  );
};

export default Layout;
