import Head from "next/head";
import mirasCollectionLogo from "../../public/images/shop/clothing/mariene-collection/mariene-logo2.svg";
import ShopInfo from "@/components/shop/clothing/ShopInfo";

const whatsappNumber = "+2347039259056";

const products = [
    { name: "Monogotas set", imageUrl: "sweet-perfume.svg" },
    { name: "Hayaati Lattafa", imageUrl: "hayaati-lattafa.svg" },
    { name: "Matelot  perfume", imageUrl: "matelot.svg" },
    { name: "Genie club luxe", imageUrl: "genie-club-luxe.svg" },
    { name: "My way mini", imageUrl: "My-wayy.svg"},
    { name: "Far away Edp Frangrance", imageUrl: "fair.svg" },
    { name: "Badee al oud", imageUrl: "badee.svg"},
    { name: "My dear body", imageUrl: "my-dear-body.svg" },
    { name: "Lamsat-harir-perfume", imageUrl: "lamsat-harir-perfume.svg" },
    { name: "Confetti body spray", imageUrl: "confetti.svg" },
    { name: "Imperio My way", imageUrl: "imperio-my-way.svg" },
    { name: "French latte", imageUrl: "French-latte.svg" },
    { name: "Cocktail intense", imageUrl: "cocktail-intense.svg" },
    { name: "Libre intense", imageUrl: "libre-intense.svg" },
    { name: "VEYES Perfumes", imageUrl: "rose-of-no-mans-land.svg" },
    { name: "SUGER Perfume", imageUrl: "sugar.svg" },
    { name: "ASAD Lattafa", imageUrl: "ASAD-Lattafa.svg" },
    { name: "Sweet perfume set", imageUrl: "sweet2.svg" }, 
];


const MarieneCollection = () => {
  return (
    <>
      <Head>
        <title>
         Mariene collection: Your Source for nice perfumes, wristwatches and gift packaging and delivery
        </title>
        <meta
          name="description"
          content="Your one stop destination for perfumes, body spray, watches"
        />
        
        <meta name="author" content="Mariene Collection" />
        <meta
          property="og:title"
          content=" Mariene collection: Your Source for nice perfumes, wristwatches and gift box delivery services"
        />
        <meta
          property="og:description"
          content="Your one stop destination for perfumes, body spray, watches"
        />
        <meta
          property="og:image"
          content="https://tceetechnologies-w3fh.vercel.app/images/shop/clothing/mariene-collection/marireneLogopreview.png"
        />
      </Head>

      <ShopInfo
        header="Mariene Collection"
        title="We provide perfumes, body sprays, wristwatches, and gift box delivery services."
        logo={mirasCollectionLogo}
        subTitle="Let us help you create unforgettable moments!."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="mariene-collection"
      />
    </>
  );
};

export default MarieneCollection;
