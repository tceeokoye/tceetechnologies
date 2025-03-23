import Head from "next/head";
import mercyCuisineLogo from "../../public/images/shop/catering/mercy-cuisine/mercy-cuisine-logo.jpg";
import ShopInfo from "@/components/shop/catering/ShopInfo";

const whatsappNumber = "+2347065508780";

const products = [
  { name: "Egusi Soup", imageUrl: "egusi-soup.jpg" },
  { name: "Fried Rice", imageUrl: "fried-rice.jpg" },
  { name: "Bitter Leaf Soup", imageUrl: "bitter-leaf-soup.jpg" },
  { name: "Jollof Rice", imageUrl: "jollof-rice.jpg" },
  { name: "Uziza Soup", imageUrl: "uziza-soup.jpg" },
  { name: "Tomato Stew", imageUrl: "tomato-stew.jpg" }, 
  { name: "White Rice", imageUrl: "white-rice.jpg" },
  { name: "Oha Soup", imageUrl: "oha-soup.jpg" },
  { name: "Spaghetti", imageUrl: "spaghetti.jpg" },
  { name: "Ukazi Soup", imageUrl: "ukazi-soup.jpg" },
  { name: "Yam Porridge", imageUrl: "porridge-yam.jpg" },
  { name: "Okro and Ogbono Soup", imageUrl: "okoro-ogbono-soup.jpg" },
  { name: "Vegetable Soup", imageUrl: "vegetable-soup.jpg" },
];

const MercyCuisine = () => {
  return (
    <>
      <Head>
        <title>
          Mercy's Cuisine: Order Pot of food online | Authentic Homemade Meals Online
        </title>
        <meta
          name="description"
          content="Specializes in freshly cooked pots of delicious meals made to order. Discover authentic homemade dishes crafted with care and delivered straight to your door. Order now for a taste of home-cooked goodness"
        />
        <meta
          name="keywords"
          content="Mercy's Cuisine, pot cooking, homemade meals, order food online, delicious dishes, home-cooked, comfort food, online ordering"
        />
        <meta name="author" content="Mercy Cuisine specializes" />
        <meta
          property="og:title"
          content="Mercy's Cuisine: Order Pot of food online | Authentic Homemade Meals Online"
        />
        <meta
          property="og:description"
          content="Specializes in freshly cooked pots of delicious meals made to order. Discover authentic homemade dishes crafted with care and delivered straight to your door. Order now for a taste of home-cooked goodness"
        />
        <meta
          property="og:image"
          content="https://www.tceetechnologies.com/images/shop/catering/mercy-cuisine/mercy-cuisine-social-preview.png"
        />
      </Head>
    
{/* <div className="flex justify-center items-center h-96">
      <div className="relative w-20 h-40 bg-gray-300 rounded-lg overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gray-500"></div>
        <div className="absolute top-0 right-0 w-2 h-full bg-gray-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-full bg-gray-500"></div>
        <div className="absolute top-2 left-2 right-2 bottom-2 bg-gray-400"></div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-2 bg-gray-500 rounded-full"></div>
      </div>
    </div> */}




      <ShopInfo
        header="Mercy's Cuisine"
        title="Order for your delicious pot of food."
        logo={mercyCuisineLogo}
        subTitle="We deliver to any location."
        products={products}
        whatsappNumber={whatsappNumber}
        shopImageFolder="mercy-cuisine"
      />
    </>
  );
};

export default MercyCuisine;
