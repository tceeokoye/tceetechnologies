import SectionOne from "@/components/about/SectionOne";
import Footer from "@/components/layouts/Footer";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Obichukwu Truth Chinemerem - tcee-tech</title>
        <meta
          name="description"
          content="Learn about Obichukwu Truth Chinemerem, a Front End Software Engineer specializing in web development, application development and Back End development. Discover his passion for coding and creating meaningful digital experiences."
        />
        <meta
          name="keywords"
          content="tcee-tech, About Me, Front End Software Engineer, Web Development, Application Development, Back End Development"
        />
        <meta name="author" content="Obichukwu Truth Chinemerem" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="About Obichukwu Truth Chinemerem - tcee-tech"
        />
        <meta
          property="og:description"
          content="Explore the profile of Obichukwu Truth Chinemerem, a skilled Front End Software Engineer. Discover my journey, expertise, and passion for creating digital solutions."
        />
      </Head>
      <SectionOne /> 
      <Footer />
    </>
  );
};

export default About;
