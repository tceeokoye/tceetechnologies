import React from "react";
import Head from "next/head";


import GracevineLogo from "../../public/images/shop/product-design/gracevine/gracevine-logo.jpg";
import ShopInfo from "@/components/shop/product-designs/ShopInfo";

const whatsappNumber = "+2348137448971";

const products = [ 
  { name: "Customize nylon", imageUrl: "customise-bags.jpg"},
  { name: "Customize Jotter", imageUrl: "customise-books.jpg"},
  { name: "Business Complimentary Card", imageUrl: "complementry-card.jpg" },
  { name: "Label", imageUrl: "customise-label.jpg" },
  { name: "Label", imageUrl: "customise-label1.jpg" },
  { name: "Invitation cards", imageUrl: "Invitation-card.jpg" },
  { name: "Invitation cards", imageUrl: "Invitation-card1.jpg" },
  { name: "Customize T-shirts", imageUrl: "customize-cap.jpg" }, 
  { name: "Customize Umbrellas", imageUrl: "customize-umbrella.jpg" },
  { name: "Customize Polo", imageUrl: "customise-polo.jpg"},
  { name: "Picture Frame", imageUrl: "picture-frames.jpg" },
  { name: "Cusomize nylon", imageUrl: "Cusomize-nylon.jpg" },
  { name: "Logo Frame", imageUrl: "logo-frame.jpg" },
  { name: "Wedding cards", imageUrl: "wedding-card.jpg" }, 
  { name: "Customize polo", imageUrl: "customise-polo2.jpg" },
  { name: "Customize polo", imageUrl: "customise-polo1.jpg" },
  { name: "Customize polo", imageUrl: "customise-polo3.jpg" },
  { name: "Traditional marriage card", imageUrl: "traditional-marriage card.jpg" },
  { name: "Cusomize nylon", imageUrl: "Cusomize-nylon2.jpg" },
  { name: "Cusomize nylon", imageUrl: "Cusomize-nylon4.jpg" },
  { name: "Cusomize nylon", imageUrl: "Cusomize-nylon5.jpg" },
  { name: "Cusomize nylon", imageUrl: "Cusomize-nylon6.jpg" },
  { name: "Customize birthday jotter", imageUrl: "customize-birthday-jotter.jpg" },
  { name: "Customize polo", imageUrl: "customise-polo4.jpg" },
  { name: "Customize polo", imageUrl: "customise-polo5.jpg" },
  { name: "Customize caps", imageUrl: "customise-cap.jpg" },
  { name: "Customize polo & caps", imageUrl: "customise-polo-cap.jpg" },
  { name: "Customize cups", imageUrl: "customise-cup.jpg" },
  { name: "Customize wedding jotter", imageUrl: "customise-wedding-jotter.jpg" },
  { name: "Customize bags", imageUrl: "customise-bags2.jpg" },
  { name: "Customize bags", imageUrl: "customise-bags1.jpg" },
  { name: "Logo", imageUrl: "gracevine-logo1.jpg" },
];

const GracevineDesigns = () => {
  return (
    <>
      <Head>
        <title>
        Gracevine printing services - From Design to Print, We’ve Got You Covered.
        </title>
        <meta
          name="description"
          content="We specialize in Your One-Stop Print Shop! Flyers, Posters, Custom Jotters, Branded Souvenirs, and More – Delivered Fast with Premium Quality!"
        />
        <meta
          name="keywords"
          content="Gracevine printing services - From Design to Print, We’ve Got You Covered."
        />
        <meta name="author" content="Gracevine printing services" />
        <meta
          property="og:title"
          content="Gracevine printing services  - African and contenental Dishes, Small Chops Smoothie Etc"
        />
        <meta
          property="og:description"
          content="Your One-Stop Print Shop! Flyers, Posters, Custom Jotters, Branded Souvenirs, and More – Delivered Fast with Premium Quality"
        />
        <meta
          property="og:image"
          content="https://www.tceetechnologies.com/images/shop/product-design/gracevine/gracevine-logo.jpg"
        />
      </Head>

      <ShopInfo
        header="Gracevine printing services"
        title="Professional Printing Services – Flyers, Posters, Jotters, Souvenirs & More! Fast, Affordable, and High-Quality Prints for Every Need"
        logo={GracevineLogo}
        subTitle="Your Print, Perfected – Fast, Reliable, and Budget-Friendly."
        products={products}
        shopImageFolder="gracevine"
        whatsappNumber= {whatsappNumber}
      />
    </>
  );
};

export default GracevineDesigns;
