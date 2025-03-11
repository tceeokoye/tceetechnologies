import Head from "next/head";
import EbrightaluminiumLogo from "../../public/images/shop/building/E-bright-aluminium/ebrightlogo.svg";
import ShopInfo from "@/components/shop/building/Shopinfo";

const whatsappNumber = "+2347062872929";

const products = [
    { name: "Double window", imageUrl: "window.svg"},
    { name: "Window frame", imageUrl: "window-frame.svg" },
    { name: "Double  window", imageUrl: "doublewindow.svg" },
    { name: "Single", imageUrl: "single-set.svg" },
    { name: "Side view", imageUrl: "side-view.svg"},
    { name: "Ongoing job", imageUrl: "ongoing-job.svg" },
    { name: "mounting", imageUrl: "mounting.svg"},
    { name: "Cubicle", imageUrl: "cubicle.svg" },
    { name: "Divider", imageUrl: "divider.svg" },
    { name: "Single set", imageUrl: "single-set2.svg" },
    { name: "Ready for distribution", imageUrl: "ready-for-distribution.svg" },
    { name: "cubicle", imageUrl: "cubicle2.svg" },
    { name: "window set", imageUrl: "window-set.svg" },
];


const EbrightAluminium = () => {
  return (
    <>
      <Head>
        <title>
        E-bright aluminium: For all kinds of almaco windows, doors and other aluminium constructions.
        </title>
        <meta
          name="description"
          content="For all kinds of almaco windows, doors and other aluminium constructions."
        />
        
        <meta name="author" content="E-bright aluminium" />
        <meta
          property="og:title"
          content=" E-bright aluminium: For all kinds of almaco windows, doors and other aluminium constructions."
        />
        <meta
          property="og:description"
          content="For all kinds of almaco windows, doors and other aluminium constructions."
        />
        <meta
          property="og:image"
          content="https://tceetechnologies-w3fh.vercel.app/images/shop/building/E-bright-aluminium/ebrightlogo.svg"
        />
      </Head>

      <ShopInfo
        header="E-BRIGHT ALUMINIUM"
        title="For all kinds of almaco windows, doors and other aluminium constructions."
        logo={EbrightaluminiumLogo}
        subTitle="we give you the best you deserve."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="E-bright-aluminium"
      />
    </>
  );
};

export default EbrightAluminium;