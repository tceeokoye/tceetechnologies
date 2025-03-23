import Head from "next/head";

import mtnLogo from "../../public/images/logo/mtn-logo.jpg";
import airtelLogo from "../../public/images/logo/airtel-logo.jpg";
import etisalatLogo from "../../public/images/logo/etisalat-logo.jpg";
import gloLogo from "../../public/images/logo/glo-logo.jpg";
import maijCorperationLogo from "../../public/images/shop/maij-corperation/maij-corperation-logo.jpg";
import TeleCommunications from "@/components/shop/Telecommunications";
import OtherServices from "@/components/cyndi-data-vendor/OtherServices";

const whatsappContact = "+2347063285552";

const MiajCorporation = () => {
  const listOfSub = [
    {
      logo: mtnLogo,
      type: "MTN",
      companyColor: "bg-yellow-400",
      companyBorderColor: "border-yellow-400",
      dataInfo: [
        { data: "500MB", price: "350" },
        { data: "1GB", price: "450" },
        { data: "2GB", price: "700" },
        { data: "3GB", price: "1000" },
        { data: "5GB", price: "1600" },
        { data: "10GB", price: "3200" },
      ],
    },

    {
      logo: airtelLogo,
      type: "Airtel",
      companyColor: "bg-red-500",
      companyBorderColor: "border-red-500",
      dataInfo: [
        { data: "500MB", price: "350" },
        { data: "1GB", price: "450" },
        { data: "2GB", price: "750" },
        { data: "5GB", price: "1650" },
        { data: "10GB", price: "3300" },
      ],
    },
    {
      logo: gloLogo,
      type: "Glo",
      companyColor: "bg-green-950",
      companyBorderColor: "border-green-950",
      dataInfo: [
        { data: "500MB", price: "350" },
        { data: "1GB", price: "450" },
        { data: "2GB", price: "800" },
        { data: "3GB", price: "1150" },
        { data: "5GB", price: "1600" },
        { data: "10GB", price: "3200" },
      ],
    },
    {
      logo: etisalatLogo,
      type: "9Mobile",
      companyColor: "bg-green-500",
      companyBorderColor: "border-green-500",
      dataInfo: [
        { data: "500MB", price: "250" },
        { data: "1GB", price: "350" },
        { data: "2GB", price: "450" },
        { data: "3GB", price: "1000" },
        { data: "4GB", price: "1500" },
        { data: "5GB", price: "2000" },
        { data: "10GB", price: "3000" },
        { data: "20GB", price: "5500" },
        { data: "30GB", price: "7500" },
      ],
    },
  ];

  const writingServices = [
    "Ghost Writing",
    "Project Writing",
    "Short Story Writing",
    "Editing",
  ];
  return (
    <>
      <Head>
        <title>
          Miaj Corporation | Data Subscriptions & Professional Writing Services
        </title>
        <meta
          name="description"
          content="Welcome to Miaj Corporation, your premier destination for top-quality data subscriptions and professional writing services. Explore our diverse range of offerings, including ghostwriting, project writing, short story creation, and meticulous editing. Whether you're seeking insightful data or expertly crafted content, Miaj Corporation is your trusted partner in achieving excellence."
        />
        <meta
          name="keywords"
          content="Miaj Corporation, data subscriptions, writing services, ghostwriting, project writing, short story writing, editing, professional writing, data analysis, content creation, research, quality writing, expert editing"
        />
        <meta name="author" content="Miaj Corporation" />
        <meta
          property="og:title"
          content="Miaj Corporation | Data Subscriptions & Professional Writing Services"
        />
        <meta
          property="og:description"
          content="Welcome to Miaj Corporation, your premier destination for top-quality data subscriptions and professional writing services. Explore our diverse range of offerings, including ghostwriting, project writing, short story creation, and meticulous editing. Whether you're seeking insightful data or expertly crafted content, Miaj Corporation is your trusted partner in achieving excellence."
        />
        <meta
          property="og:image"
          content="https://www.tceetechnologies.com/images/shop/maij-corperation/maij-corperation-social-preview.png"
        />
      </Head>
      <TeleCommunications
        header="Miaj Corporation"
        title="Data vendor and writing expert"
        logo={maijCorperationLogo}
        dataSubs={listOfSub}
        whatsappNumber={whatsappContact}
        motto="Intentional all at once"
        style="max-[584px]:flex hidden"
        otherServicesMobieView={
          <OtherServices
            image={maijCorperationLogo}
            whatsappNumber={whatsappContact}
            title="Writing Service"
            storeName="Miaj Corporation"
            servicesInfo={writingServices}
            style="max-[584px]:flex hidden"
          />
        }
        otherServicesDesktopView={
          <OtherServices
            image={maijCorperationLogo}
            whatsappNumber={whatsappContact}
            title="Writing Service"
            storeName="Miaj Corporation"
            servicesInfo={writingServices}
            style="max-[584px]:hidden flex"
          />
        }
      />

      {/* <SectionOne /> */}
    </>
  );
};

export default MiajCorporation;
