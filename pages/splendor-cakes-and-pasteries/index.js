import React from "react";
import Head from "next/head";


import splendorCakesAndPasteriesLogo from "../../public/images/shop/catering/splendor-cakes-and-pasteries/splendor-cakes-and-pasteries-logo.jpg";
import ShopInfo from "@/components/shop/catering/ShopInfo";

const whatsappNumber = "+2348133916916";

const products = [ 
  { name: "Special bons", imageUrl: "special-bons.jpg" },
  { name: "Egg Roll", imageUrl: "egg-roll.jpg" },
  { name: "Food Tray", imageUrl: "food-tray.jpg" },
  { name: "Chin Chin", imageUrl: "chin-chin.jpg" },
  { name: "Fruit cake", imageUrl: "fruit-cake.jpg" },
  { name: "Donut", imageUrl: "donut.jpg" }, 
  { name: "Puf Puf", imageUrl: "puf-puf.jpg" },
  { name: "Naked Cake", imageUrl: "naked-cake.jpg" },
  { name: "Special Meatpie", imageUrl: "special-meatpie.jpg" },
  { name: "Banana Bread", imageUrl: "banana-bread.jpg" },
  { name: "Foil Cake", imageUrl: "foil-cake.jpg" },
  { name: "All flavors Cake", imageUrl: "all-flavors.jpg" }, 
  { name: "Whipped Cream Iced Cake", imageUrl: "whipped-cream-iced-cake.jpg" },
  { name: "Butter Iced Cake", imageUrl: "butter-iced-cake.jpg" },
  { name: "Cup Cake", imageUrl: "cup-cake.jpg" },
  { name: "Cake parfait", imageUrl: "cake-parfait.jpg" },
  { name: "Fondant Cake", imageUrl: "fondant-cake.jpg" },
  { name: "Small Chops", imageUrl: "small-chops.jpg" },
  { name: "White Wedding Cakes", imageUrl: "white-wedding-cake.jpg" },
  {
    name: "Traditional Wedding Cakes",
    imageUrl: "traditional-wedding-cake.jpg",
  },
];

const SplendorCakesAndPasteries = () => {
  return (
    <>
      <Head>
        <title>
          Splendor Cakes and Pastries - Custom Cakes and Pastries on Order
        </title>
        <meta
          name="description"
          content="We specialize in baking cakes and pastries tailored to your preferences. Whether you're celebrating a birthday, wedding, or any special occasion, our delicious treats are crafted with care and creativity. Order now to experience the sweetness of Splendor!"
        />
        <meta
          name="keywords"
          content="splendor Cakes and pastries, custom cakes, custom pastries, cake orders, pastry orders, celebration cakes, wedding cakes, birthday cakes, special occasion cakes, artisan cakes, gourmet pastries, bakery orders"
        />
        <meta name="author" content="Splendor Cakes and Pastries" />
        <meta
          property="og:title"
          content="Splendor Cakes and Pastries - Custom Cakes and Pastries on Order"
        />
        <meta
          property="og:description"
          content="We specialize in baking cakes and pastries tailored to your preferences. Whether you're celebrating a birthday, wedding, or any special occasion, our delicious treats are crafted with care and creativity. Order now to experience the sweetness of Splendor!"
        />
        <meta
          property="og:image"
          content="https://tcee-tech.com/images/shop/catering/splendor-cakes-and-pasteries/splendor-cakes-and-pasteries-social-preview.png"
        />
      </Head>

      <ShopInfo
        header="Splendor Cakes and Pasteries"
        title="We make custom cakes and pastries on order."
        logo={splendorCakesAndPasteriesLogo}
        subTitle="Home for yummy and tasty treats"
        products={products}
        shopImageFolder="splendor-cakes-and-pasteries"
        whatsappNumber="+2348133916916"
      />
    </>
  );
};

export default SplendorCakesAndPasteries;
