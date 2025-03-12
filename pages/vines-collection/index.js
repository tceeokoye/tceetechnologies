import Head from "next/head";
import mirasCollectionLogo from "../../public/images/shop/clothing/vines-collection/vines-collection-logo2.svg";
import ShopInfo from "@/components/shop/clothing/ShopInfo";

const whatsappNumber = "+2349063642766";

const products = [
    { name: "Gold jewelry", imageUrl: "vines-collection-logo.svg" },
  { name: "Male stainless steel necklace", imageUrl: "male-stainless-steel-necklace.svg" },
  { name: "Patek philipe chain wristwatch", imageUrl: "Patek-philipe-chain-wristwatch.svg" },
  { name: "Richard millie chronograph", imageUrl: "Richard-millie-chronograph.svg" },
  { name: "Two hears zirconia necklace", imageUrl: "Two-hears-zirconia-necklace.svg" },
  { name: "Frank muller leather wristwatch", imageUrl: "Frank-muller-leather-wristwatch.svg" },
  { name: "Butterfly zirconia necklace", imageUrl: "Butterfly-zirconia-necklace.svg" },
  { name: "Cz tennis necklace piece", imageUrl: "Cz-tennis-necklace-piece.svg" },
  { name: "Heart dainty necklace", imageUrl: "Heart-dainty-necklace.svg" },
  { name: "White heart zirconia necklace", imageUrl: "Tiny-Purple-Heart-zirconia-necklace.svg" }, 
  { name: "Pink heart dainty necklace", imageUrl: "Pink-heart-dainty-necklace.svg" },
  { name: "Tiny Purple Heart zirconia necklace", imageUrl: "Tiny-Purple-Heart-zirconia-necklace2.svg" },
  { name: "VCA cz tennis necklace", imageUrl: "VCA-cz-tennis-necklace.svg" },
  { name: "Island girls earrings", imageUrl: "Island-girls-earrings.svg" },
  { name: "Cz tennis teardrop necklace set with earrings", imageUrl: "Cz-tennis-teardrop-necklace-set-with-earrings.svg" },
  { name: "Michael kors chain", imageUrl: "Michael-kors-chain.svg" },
  { name: "Patek phillipe chain", imageUrl: "Patek-phillipe-chain.svg" },
  { name: "Rolex chain", imageUrl: "rolex-watch.jpg" },
  { name: " Gucci chronograph leather", imageUrl: "Gucci-chronograph-leather.jpg"},
];


const VinesCollection = () => {g
  return (
    <>
      <Head>
        <title>
          Vines and Jewels - Deal with all kinds of Jewelries, beads and accessories
        </title>
        <meta
          name="description"
          content="Discover different range of exquisite jewelry, high-quality beads and accessories at  Vines and Jewels. Explore our latest collection and elevate your style today."
        />
        <meta
          name="keywords"
          content="Vines and Jewels, bags, jewelry, slippers, fashion accessories"
        />
        <meta name="author" content="Vines and Jewels" />
        <meta
          property="og:title"
          content="Vines and Jewels- Purchase Jewelries, beads and accessories"
        />
        <meta
          property="og:description"
          content="Discover different range of exquisite jewelry, high-quality beads and   at  Vines and Jewels. Explore our latest collection and elevate your style today."
        />
        <meta
          property="og:image"
          content="https://tceetechnologies-w3fh.vercel.app/images/shop/clothing/vines-collection/vines-collection-logo2.svg"
        />
      </Head>

      <ShopInfo
        header=" Vines and Jewels"
        title="We Deal with all kinds of Jewelries, beads and accessories"
        logo={mirasCollectionLogo}
        subTitle="Quality never goes out of style..."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="vines-collection"
      />
    </>
  );
};

export default VinesCollection;

