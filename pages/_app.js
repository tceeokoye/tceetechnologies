import { useEffect, useState } from "react";

import Head from "next/head";

import 'intersection-observer';
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/layouts/Footer";
import Onboarding from "@/components/UI/Onboarding";


export default function App({ Component, pageProps }) {
  const [isOnboarding, setIsOnBoarding] = useState(true); 
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnBoarding(false);
    }, 8000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <main className={`${poppins.variable} font-poppins max-w-[120rem] mx-auto`}>
      
      <Head>
       <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Opulence Developer | Front End Software Engineer',
              url: 'https://tcee-tech.com',
              logo: 'https://tcee-tech.com/favicon.ico', // URL to your logo image
            }),
          }}
        />
      <meta name="theme-color" content="#03262e" /> 
        <meta
          property="og:image"
          content="https://tcee-tech.com/images/opulence-developer-social-preview-image.png"
        />
        <meta
          property="og:url"
          content="https://tcee-tech.com"
        />
        <meta property="og:type" content="website" />
      </Head>
      {isOnboarding && <Onboarding />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      
    </main>
  );
}
