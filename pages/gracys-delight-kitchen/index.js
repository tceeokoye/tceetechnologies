import React from "react";
import Head from "next/head";


import GracekitchenLogo from "../../public/images/shop/catering/graces-kitchen-and-pasteries/graces-kitchen-and-pasteries-logo.svg";
import ShopInfo from "@/components/shop/catering/ShopInfo";

const whatsappNumber = "+2349163903617";

const products = [ 
  { name: "Peppered-Beaf", imageUrl: "Peppered-beaf.svg" },
  { name: "Jollof rice", imageUrl: "Jollof-rice.svg"},
  { name: "Food Tray", imageUrl: "food-tray.jpg" },
  { name: "Fried rice", imageUrl: "fried-rice.svg" },
  { name: "Fried rice", imageUrl: "fried-rice2.svg" },
  { name: "Peppered snail", imageUrl: "Peppered-snail.svg" }, 
  { name: "Jollof spaggetti", imageUrl: "spaggetti.svg" },
  { name: "Peppered Beaf", imageUrl: "Peppered-beaf2.svg"},
  { name: "Vegetable soup", imageUrl: "vagetable-soup.svg" },
  { name: "Jollof rice", imageUrl: "jollof-rice2.svg" },
  { name: "Small Chops", imageUrl: "small-chops.svg" },
  { name: "take away", imageUrl: "takeaway.svg" }, 
  { name: "Small Chops & Peppered Chicken", imageUrl: "small-chops-pappered-chicken.svg" },
  { name: "cooler of jollof rice", imageUrl: "cooler-jollof-rice.svg" },
  { name: "Peppered chicken", imageUrl: "Peppered-chicken.svg" },
  { name: "Small Chops", imageUrl: "small-chops.jpg" },
];

const Gracekitchen = () => {
  return (
    <>
      <Head>
        <title>
        Gracy's Delight Kitchen - Professional Printing Services – Flyers, Posters, Jotters, Souvenirs & More! Fast, Affordable, and High-Quality Prints for Every Need
        </title>
        <meta
          name="description"
          content="We specialize in African and contenental Dishes, Small Chops Smoothie Etc tailored to your preferences. Whether you're celebrating a birthday, wedding, or any special occasion, our delicious treats are crafted with care and creativity. Order now to experience the sweetness of Grace's!"
        />
        <meta
          name="keywords"
          content="Gracy's Delight Kitchen, African and contenental Dishes, Small Chops Smoothie Etc"
        />
        <meta name="author" content="Gracy's Delight Kitchen" />
        <meta
          property="og:title"
          content="Gracy's Delight Kitchen - African and contenental Dishes, Small Chops Smoothie Etc"
        />
        <meta
          property="og:description"
          content="We specialize in African and contenental Dishes, Small Chops Smoothie Etc tailored to your preferences. Whether you're celebrating a birthday, wedding, or any special occasion, our delicious treats are crafted with care and creativity. Order now to experience the sweetness of Grace's"
        />
        <meta
          property="og:image"
          content="https://www.tceetechnologies.com/images/shop/catering/graces-kitchen-and-pasteries/graces-kitchen-and-pasteries-logoprev.jpg"
        />
      </Head>

      <ShopInfo
        header="Gracy's Delight Kitchen"
        title="Professional Printing Services – Flyers, Posters, Jotters, Souvenirs & More! Fast, Affordable, and High-Quality Prints for Every Need"
        logo={GracekitchenLogo}
        subTitle="Your Print, Perfected – Fast, Reliable, and Budget-Friendly."
        products={products}
        shopImageFolder="graces-kitchen-and-pasteries"
        whatsappNumber= {whatsappNumber}
      />
    </>
  );
};

export default Gracekitchen;
