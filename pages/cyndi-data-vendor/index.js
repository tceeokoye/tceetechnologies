import Head from "next/head";

import mtnLogo from "../../public/images/logo/mtn-logo.jpg";
import airtelLogo from "../../public/images/logo/airtel-logo.jpg";
import etisalatLogo from "../../public/images/logo/etisalat-logo.jpg";
import gloLogo from "../../public/images/logo/glo-logo.jpg";
import starTimesLogo from "../../public/images/logo/star-times-logo.png";
import cyndyDataVendorFlyer from "../../public/images/shop/cyndy-data-vendor/cyndy-data-vendor-flyer.jpg";
import goTVLogo from "../../public/images/logo/gotv-logo.jpg";
import dsTVLogo from "../../public/images/logo/dstv-logo.jpg";
import TeleCommunications from "@/components/shop/Telecommunications";
import OtherServices from "@/components/cyndi-data-vendor/OtherServices";

const whatsappContact = "+2347064891660"

const CyndiDataVendor = () => {
  const listOfSub = [
    {
      logo: mtnLogo,
      type: "MTN",
      companyColor: "bg-yellow-400",
      companyBorderColor: "border-yellow-400",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "700" },
        { data: "3GB", price: "1000" },
        { data: "4GB", price: "1400" },
        { data: "5GB", price: "1600" },
        { data: "10GB", price: "3000" },
        { data: "20GB", price: "6000" },
      ],
    },

    {
      logo: airtelLogo,
      type: "Airtel",
      companyColor: "bg-red-500",
      companyBorderColor: "border-red-500",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "650" },
        { data: "3GB", price: "950" },
        { data: "4GB", price: "1300" },
        { data: "5GB", price: "1500" },
        { data: "10GB", price: "2800" },
        { data: "20GB", price: "5600" },
      ],
    },
    {
      logo: etisalatLogo,
      type: "9Mobile",
      companyColor: "bg-green-500",
      companyBorderColor: "border-green-500",
      dataInfo: [
        { data: "500MB", price: "200" },
        { data: "1GB", price: "300" },
        { data: "2GB", price: "600" },
        { data: "3GB", price: "900" },
        { data: "4GB", price: "1200" },
        { data: "5GB", price: "1400" },
        { data: "10GB", price: "2700" },
        { data: "20GB", price: "5400" },
      ],
    },
    {
      logo: gloLogo,
      type: "Glo",
      companyColor: "bg-green-950",
      companyBorderColor: "border-green-950",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "700" },
        { data: "3GB", price: "1000" },
        { data: "4GB", price: "1400" },
        { data: "5GB", price: "1600" },
        { data: "10GB", price: "3000" },
        { data: "20GB", price: "6000" },
      ],
    },

    {
      logo: goTVLogo,
      type: "GoTv",
      companyColor: "bg-green-400",
      companyBorderColor: "border-green-400",
      dataInfo: [
        { data: "Smallie", price: "1,500" },
        { data: "Jinja", price: "2,900" },
        { data: "Jolli", price: "4,200" },
        { data: "Max", price: "5,900" },
        { data: "Supa", price: "7,800" },
        { data: "Supa+", price: "12,800" },
      ],
    },
    {
      logo: dsTVLogo,
      type: "DSTV",
      companyColor: "bg-blue-400",
      companyBorderColor: "border-blue-400",
      dataInfo: [
        { data: "Padi", price: "3,200" },
        { data: "Yanga", price: "4,500" },
        { data: "XtraView", price: "4,300" },
        { data: "Access Fees", price: "4,300" },
        { data: "HDPVR Access Service", price: "4,300" },
        { data: "Confam", price: "7,600" },
        { data: "Compact+", price: "20,000" },
        { data: "Compact", price: "12,800" },
        { data: "Premium", price: "29,800" },
      ],
    },
  ];

  const otherServices = ["StarTimes Subscription"];
  return (
    <>
      <Head>
        <title>Cyndi Data Vendor: Data, DSTV and GOTV Subscriptions</title>
        <meta
          name="description"
          content="Cyndi Data Vendor: Your Source for Data, DSTV and GOTV Subscriptions. Get high-speed data plans, DSTV, and GOTV subscriptions conveniently online. Affordable prices and reliable service."
        />
        <meta
          name="keywords"
          content="Cyndi Data Vendor, data subscriptions, DSTV subscriptions, GOTV subscriptions, high-speed data plans, online subscriptions, affordable subscriptions, reliable service"
        />
        <meta name="author" content="Cyndi Data Vendor" />
        <meta
          property="og:title"
          content="Cyndi Data Vendor: Data, DSTV and GOTV Subscriptions"
        />
        <meta
          property="og:description"
          content="Cyndi Data Vendor: Your Source for Data, DSTV and GOTV Subscriptions. Get high-speed data plans, DSTV, and GOTV subscriptions conveniently online. Affordable prices and reliable service."
        />
        <meta
          property="og:image"
          content="https://tcee-tech.com/images/cynthia-data-vendor-image.png"
        />
      </Head>
      <TeleCommunications
        header="Cyndi Data Vendor"
        title="We sell affordable data plan & cable subscriptions"
        logo={cyndyDataVendorFlyer}
        dataSubs={listOfSub}
        whatsappNumber={whatsappContact}
        motto="We are TRUSTED, REALIABLE & LEGIT"
        otherServicesMobieView={
          <OtherServices
            title="OTHER SERVICES"
            whatsappNumber={whatsappContact}
            storeName="Cyndi Data Vendor"
            servicesInfo={otherServices}
            image={starTimesLogo}
            style="max-[584px]:flex hidden"
          />
        }
        otherServicesDesktopView={
          <OtherServices
            title="OTHER SERVICES"
            whatsappNumber={whatsappContact}
            storeName="Cyndi Data Vendor"
            servicesInfo={otherServices}
            image={starTimesLogo}
            style="max-[584px]:hidden flex"
          />
        }
      />
     
    </>
  );
};

export default CyndiDataVendor;
