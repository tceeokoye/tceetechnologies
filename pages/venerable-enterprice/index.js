import Link from "next/link";
import Image from "next/image";
import React from "react";

import ShopHeader from "@/components/shop/ShopHeader";

import venerableEnterpriceLogo from "../../public/images/shop/venerable-enterprice/venerable-enterprice-logo.jpg";
import arrowRightIcon from "../../public/images/icon/arrow-right.svg";
import Head from "next/head";
import handleWhatsAppClick from "@/helpers/whatsapp";
import CommonShopUI from "@/components/shop/UI/CommShopUI";

const venerableEnterpriceServies = [
  {
    title: "Services",
    info: [
      "Project writing",
      "Project Analyis",
      "Proof reading",
      "Seminar writing",
      "Sourcing of project & seminar topics",
      "Thesis"
    ],
  },

  {
    title: "Services Breakdown",
    info: [
      "Statistical Analysis which includes T-tests, ANOVA, Correlation, Probits, Ch0-square test analysis etc.",
      "Project Proposals(full and part project)",
      "Training on project writing and project analysis"
    ],
  },
];

const VenerableEnterprice = () => {
  return (
    <> 
      <Head>
        <title>Venerable Enterprise: Professional Services for Project Writing, Analysis, and More</title>
        <meta
          name="description"
          content="Venerable Enterprise offers comprehensive solutions for project writing, analysis, proofreading, seminar development, and more. Our expert team provides project proposals, statistical analysis, and training services to empower success. Explore our professional services today."
        />
        <meta
          name="keywords"
          content="Venerable Enterprise, project writing, project analysis, proofreading services, seminar development, statistical analysis, project proposals, training services, research support, data analysis, proposal writing, project management, statistical consulting, data interpretation, research methodology, academic suppor"
        />
        <meta name="author" content="Cyndi Data Vendor" />
        <meta
          property="og:title"
          content="Venerable Enterprise: Professional Services for Project Writing, Analysis, and More"
        />
        <meta
          property="og:description"
          content="Venerable Enterprise offers comprehensive solutions for project writing, analysis, proofreading, seminar development, and more. Our expert team provides project proposals, statistical analysis, and training services to empower success. Explore our professional services today."
        />
        <meta
          property="og:image"
          content="https://tcee-tech.com/images/shop/venerable-enterprice/venerable-enterprice-social-preview.png"
        /> 
      </Head>
      <section className="py-20 px-5 md:px-8">
      <ShopHeader
        header="Venerable Enterprice"
        title="We ensure quality and timely delivery of service"
        logo={venerableEnterpriceLogo}
        subTitle="Client satisfaction is our priority"
      />
     <CommonShopUI products={venerableEnterpriceServies}/>

      <div className="flex justify-center mb-12 mt-14">
                  <button
                    onClick={() =>
                      handleWhatsAppClick(
                        "Hello! Venerable Enterprice, I am contacting you from your website, please how much is your services",
                        "+2348097189764"
                      )
                    }
                    className={`hover:scale-105 transition-transform duration-100 flex items-center space-x-2 rounded-md bg-black/70 h-14 px-4`}
                  >
                    <p>Contact Venerable Enterprice</p>{" "} 
                    <Image
                      alt={"arrow right icon"}
                      src={arrowRightIcon}
                      priority
                      loading="eager"
                    />
                  </button>
                  </div>
      <Link
                  href="/shop"
                    className={`hover:scale-105 transition-transform duration-100 my-7 w-max mx-auto flex items-center space-x-2 rounded-md bg-black/70 h-10 px-5`}
                  >
                    <p>Go to shop</p>{" "}
                    <Image
                      alt={"arrow right icon"}
                      src={arrowRightIcon}
                      priority
                      loading="eager"
                    />
                  </Link>
    </section>
     
    </>
  );
};

export default VenerableEnterprice;
