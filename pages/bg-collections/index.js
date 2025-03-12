import Head from "next/head";
import ydcClothingLogo from "../../public/images/shop/clothing/bg-collections/BG-LOGO.svg";
import ShopInfo from "@/components/shop/clothing/ShopInfo";

const whatsappNumber = "+2347011634047";

const products = [
  { name: "baggy Jeans", imageUrl: "big-trouser.svg" },
  { name: "Louise Vuitton", imageUrl: "shoes.svg" },
  { name: "Dr Martens", imageUrl: "shoes2.svg" },
  { name: "Premium quality jean short", imageUrl: "shot-jean.svg" },
  { name: "Louis Vuitton", imageUrl: "shoes3.svg" },
  { name: "PREMIUM TEES", imageUrl: "polo.svg" },
  { name: "baggy Jeans", imageUrl: "Jeans.svg" },
  { name: "Contact card", imageUrl: "complementry-card.svg" },
  {
    name: "PREMIUM TEES",
    imageUrl: "polo3.svg",
  },
  { name: "Designers shoe", imageUrl: "designersshoe.svg" },
  { name: "PREMIUM TEES", imageUrl: "polo2.svg" },
  { name: "PREMIUM TEES", imageUrl: "polo4.svg" },
  { name: "Vintage shirt", imageUrl: "vintage-shirt.jpg" },
  { name: "Sweat shirt and short", imageUrl: "sweat-shirt-and-short.jpg" },
  { name: "Denim short", imageUrl: "denim-shorts.jpg" },
  { name: "Two piece for men", imageUrl: "two-piece-for-men.jpg" },
];

const YdcClothing = () => {
  return (
    <>
      <Head>
        <title>
          BG collections: Explore fashion that fits your life, only at BG
          collections
        </title>
        <meta
          name="description"
          content="Discover stylish and unique designer outfits at BG COLLECTIONS.
          Shop our latest collections for men, crafted with premium fabrics and trendsetting designs. Upgrade your wardrobe with fashion that reflects your unique style and personality."
        />
        <meta
          name="keywords"
          content="BG COLLECTIONS, designer clothes, fashion, men's clothing, stylish apparel, high-quality Shoes, trendsetting designs"
        />
        <meta name="author" content="BG COLLECTIONS" />
        <meta
          property="og:title"
          content="BG COLLECTIONS: Designer Clothes for Every Occasion"
        />
        <meta
          property="og:description"
          content="Discover stylish and unique designer clothes at YDC Clothing. Explore our latest collections for men and women, featuring high-quality fabrics and on-trend designs. Elevate your wardrobe with fashion that speaks to your individual style."
        />
        <meta
          property="og:image"
          content="https://tceetechnologies-w3fh.vercel.app/images/shop/clothing/bg-collections/Backup_of_bg collectionlogoprev.png"
        />
      </Head>

      <ShopInfo
        header="BG Collections"
        title="We make and sell any kinds clothing."
        logo={ydcClothingLogo}
        subTitle="Your looking good is our business..."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="bg-collections"
      />
    </>
  );
};

export default YdcClothing;
