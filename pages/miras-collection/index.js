import Head from "next/head";
import mirasCollectionLogo from "../../public/images/shop/clothing/miras-collection/miras-collection-logo.jpg";
import ShopInfo from "@/components/shop/clothing/ShopInfo";

const whatsappNumber = "+2348106443888";

const products = [
    { name: "Gold jewelry", imageUrl: "gold-jewelry.jpg" },
  { name: "Jewelry Case", imageUrl: "jewelry-case.jpg" },
  { name: "Male Urban Necklace", imageUrl: "male-urban-necklace.jpg" },
  { name: "Blue Male Urban Necklace", imageUrl: "male-urban-necklace-blue.jpg" },
  { name: "CK watch and bead combo", imageUrl: "ck-watch-and-bead-combo.jpg" },
  { name: "Cartier Wristwatch", imageUrl: "cartier-wristwatch.jpg" },
  { name: "Jewelry Set", imageUrl: "jewelry-set.jpg" },
  { name: "Infinity Necklace", imageUrl: "infinity-necklace.jpg" },
  { name: "Cartier Eye glass", imageUrl: "cartier-eye-glass.jpg" },
  { name: "Smokers watch", imageUrl: "smokers-watch.jpg" }, 
  { name: "Grade A VCA bracelet", imageUrl: "grade-a-vca-bracelet.jpg" },
  { name: "Watch and Bracelet Combo", imageUrl: "watch-and-bracelet-combo.jpg" },
  { name: "Hermes Bag", imageUrl: "hermes-bag.jpg" },
  { name: "Swead leather mont blanc", imageUrl: "swead-leather-mont-blanc.jpg" },
  { name: "Active chronograph poedagr", imageUrl: "active-chronograph-poedagr.jpg" },
  { name: "Gucci belt", imageUrl: "gucci-belt.jpg" },
];


const MirasCollection = () => {
  return (
    <>
      <Head>
        <title>
          Mira's Collection - Purchase Jewelry, Bags, and Slippers
        </title>
        <meta
          name="description"
          content="Discover different range of exquisite jewelry, high-quality bags, and comfortable slippers at Mira's Collection. Explore our latest collection and elevate your style today."
        />
        <meta
          name="keywords"
          content="Mira's Collection, bags, jewelry, slippers, fashion accessories"
        />
        <meta name="author" content="Mira's Collection" />
        <meta
          property="og:title"
          content="Mira's Collection - Purchase Jewelry, Bags, and Slippers"
        />
        <meta
          property="og:description"
          content="Discover different range of exquisite jewelry, high-quality bags, and comfortable slippers at Mira's Collection. Explore our latest collection and elevate your style today."
        />
        <meta
          property="og:image"
          content="https://tcee-tech.com/images/shop/clothing/miras-collection/miras-collection-social-preview.png"
        />
      </Head>

      <ShopInfo
        header="Mira's collection"
        title="We deal on all kinds of bags, jewelry and slippers"
        logo={mirasCollectionLogo}
        subTitle="Quality never goes out of style..."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="miras-collection"
      />
    </>
  );
};

export default MirasCollection;
