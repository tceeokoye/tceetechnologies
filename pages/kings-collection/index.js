import Head from "next/head";
import mirasCollectionLogo from "../../public/images/shop/clothing/kings-collection/kings-collection-logo.jpg";
import ShopInfo from "@/components/shop/clothing/ShopInfo";

const whatsappNumber = "+2348167912229";

const products = [
    { name: "Cooperate Shoe", imageUrl: "cooperate-shoe.jpg" },
    { name: "Leather Jacket", imageUrl: "leather-jacket.jpg" },
    { name: "Joggers", imageUrl: "joggers.jpg" },
    { name: "Hoodie", imageUrl: "hoodie.jpg" },
    { name: "Collar Polo", imageUrl: "collar-polo.jpg" },
    { name: "Versacce Footwear", imageUrl: "versacce-footwear.jpg" },
    { name: "Timberland", imageUrl: "timberland.jpg" },
    { name: "Burbery Footwear", imageUrl: "burbery-footwear.jpg" },
    { name: "Plain Jean", imageUrl: "plain-jean.jpg" },
    { name: "Black Stock Jean", imageUrl: "black-stock-jean.jpg" },
    { name: "Sneaker", imageUrl: "sneaker.jpg" },
    { name: "Green Hoodie", imageUrl: "green-hoodie.jpg" },
    { name: "Valentino Footwear", imageUrl: "valentino-footwear.jpg" },
    { name: "Boggy Jean", imageUrl: "boggy-jean.jpg" },
    { name: "Jacket", imageUrl: "jacket.jpg" },
    { name: "Black Cooperate Shoe", imageUrl: "black-cooperate-shoe.jpg" },
    { name: "Big Neck Polo", imageUrl: "big-neck-polo.jpg" },
    { name: "Cooperate Wear", imageUrl: "cooperate-wear.jpg" }, 
    { name: "Cardigan", imageUrl: "cardigan.jpg" },
    { name: "Red Leather Jacket", imageUrl: "red-leather-jacket.jpg" },
];


const KingsCollection = () => {
  return (
    <>
      <Head>
        <title>
          King's Collection: Your Source for Sneakers, Apparel, and Men's Fashion
        </title>
        <meta
          name="description"
          content="Your one stop destination for sneakers, t-shirts, polos, jeans, boxers, and men's corporate shoes. Explore our diverse range of fashion essentials and elevate your style game today"
        />
        
        <meta name="author" content="King's Collection" />
        <meta
          property="og:title"
          content="King's Collection: Your Source for Sneakers, Apparel, and Men's Fashion"
        />
        <meta
          property="og:description"
          content="Your one stop destination for sneakers, t-shirts, polos, jeans, boxers, and men's corporate shoes. Explore our diverse range of fashion essentials and elevate your style game today"
        />
        <meta
          property="og:image"
          content="https://tcee-tech.com/images/shop/clothing/kings-collection/kings-collection-social-preview.png"
        />
      </Head>

      <ShopInfo
        header="Kings's Collection"
        title="We deal on all kinds of sneakers, t-shirt, polo, jeans, boxers, men's cooperate shoe"
        logo={mirasCollectionLogo}
        subTitle="Laying gold like dust..."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="kings-collection"
      />
    </>
  );
};

export default KingsCollection;
