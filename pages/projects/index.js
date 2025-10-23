import Footer from "@/components/layouts/Footer";
import Head from "next/head";

const projects = [
  // {
  //   title: "Jack",
  //   type: "Website, Andriod & IOS App.",
  //   technology: "Next.js, TailwindCss, Flutter",
  //   status: "Deployed to Production",
  //   description:
  //     "Market for car parts",
  //   link: "https://staging.jack.parts",
  // },
  {
    title: "Janet Memorial Hospital",
    type: "Website",
    technology: "Next.js, TailwindCss",
    status: "Deployed to Production",
    description:
      "Highlights an intuitive user experience, integrating a dynamic interactive map for location tracking, seamless appointment booking functionality, and a sleek interface presenting hospital services. Witness my ability to blend aesthetics with practicality in this skillfully crafted website.",
    link: "https://www.janetmemorialhospital.com/",
  },
  {
    title: "Cenepad (Customer)",
    type: "Website.",
    technology: "JavaScript, Node.js,  MongoDB",
    status: " In Development",
    description: "HEALTCARE RIGHTS & DIGNITY FOR EVERY WOMAN: Breaking barriers to access comprehensive healthcare and support services, from reproductive health to diabetes care, while advocating for a more equitable future",
    link: "https://www.cenpadng.org",
  },
  {
    title: "COHAAF (Customer)",
    type: "Website.",
    technology: "JavaScript, Node.js,  MongoDB",
    status: "Deployed to Production",
    description: "CHIZARAM OGAZI HOPE AND AID FOUNDATION (COHAAF) is a non profitable and non political entity registered under the law. It is founded by Barr. (Mrs.) Chizaram Queenette Ogazi, with the cardinal object of improving the well being of the less privileged in rural communities as commanded by Almighty God",
    link: "https://cohaaf.vercel.app",
  },
  {
    title: "Duoiba",
    type: "Website",
    technology: "Next.js, Node.js, TailwindCss, MongoDB",
    status: "Deployed to Production",
    description:
      "Duoiba helps merchants and vendors sell more to customers online by providing an e-commerce marketplace for them to get their own online stores, because online shops help businesses sell more to customers online. ",
    link: "https://duoiba.com",
  },
  {
    title: "Telecomsdata",
    type: "Mobile App.",
    technology: "Flutter, Node.js, MongoDB",
    status: "Deployed to Production",
    description: "Get more for less with the Bulk Data Purchase app! This app lets you buy a bunch of data all at once, saving you time and money.",
    link: "https://play.google.com/store/search?q=Telecomsdata&c=apps",
  },
  {
    title: "CALL-A-DOC",
    type: "Website",
    technology: "Next.js",
    status: "In Development",
    description:
      "This project showcases my proficiency in creating a seamless platform for scheduling virtual doctor appointments via video calls and chat. ",
    link: "",
  },
  {
    title: "Maureen Eugene",
    type: "Website",
    technology: "Next.js",
    status: "Deployed to Production",
    description:
      "In building this Content Writer Portfolio Website, I've meticulously orchestrated design and content to harmonize, creating a digital space that truly reflects the essence of the content writer's craft.",
    link: "https://maureenportfoliowebsite.vercel.app/",
  },

  {
    title: "Ologwu Samuel",
    type: "Website",
    technology: "Next.js",
    status: "Deployed to Production",
    description:
      "Portfolio website of a product designer",
    link: " https://ologwusamuel.vercel.app/",
  },
//{
 //   title: "Lizzy Match Tips",
 //   type: "Mobile App.",
 //   technology: "Flutter",
  //  status: "Deployed to Production",
  //  description: "Elevate your football predictions with the Match Tips app, your go-to companion for unlocking the secrets of every match. Immerse yourself in a world of expert analyses, strategic insights, and precise predictions",
   // link: "https://play.google.com/store/apps/details?id=tester.kma.lizzyfixedmatchtips",
  //},
];

const myProjects = [
  {
    title: "MARTAF",
    type: "Progressive web app (PWA)",
    technology: "Next.js, TailwindCss, Django, SQL , React.js MongoDB",
    status: "In Development",
    description:
      "Martaf is a pan-African e-commerce platform aimed at connecting African manufacturers, artisans, and producers directly with consumers. By eliminating middlemen, Martaf empowers local businesses, promotes African culture, and delivers authentic products to a global audience. This platform integrates marketplace features, logistics, payment systems, and analytical tools into one user-friendly ecosystem."

  },
  {
    title: "Social Downloader",
    type: "Web Site",
    technology: "Next.js",
    status: "In Development",
    description:
      "A user-friendly website designed to effortlessly download and save videos from various social media platforms, allowing you to preserve and enjoy your favorite online content offline.",
    link: "",
  },
  {
    title: "Greener",
    type: "Mobile App",
    technology: "Flutter",
    status: "In Development",
    description:
      "we believe in the inherent rights of every woman and girl to full access to sexual and reproductive health and rights (SRHR), including safe abortion care.",
    link: "https://greenerdev.org",
  },

  {
    title: "ELGREEN GLOBAL CONSULT",
    type: "Web App",
    technology: "React.js && Tailwind Css",
    status: "Deployed for Production",
    description:
      "Top provider of integrated environmental and facility management solutions. With years of excellence, we deliver comprehensive services that keep your spaces clean, green, and productive. From industrial cleaning to agricultural production, we are your trusted partner in creating sustainable environments for business and community growth.",
    link: "https://elgreenglobalconsult.com/",
  },
];

const SectionTemplate = (props) => {
  const { type, index, projectData } = props;
  return (
    <div
      className={`flex w-full h-max ${
        type === "left" || index > 0 ? "mt-40" : "mt-5"
      }`}
    >
      {type === "left" && (
        <div className="flex-shrink-0 w-2 pt-7  overflow-hidden inline-block md:w-3">
          <div className=" h-2 bg-primary1 rotate-45 transform origin-bottom-right md:h-3"></div>
        </div>
      )}
      <div className="w-full space-y-2 h-full border-4 border-primary1 rounded-lg p-3 md:p-5">
        <p className="font-medium text-lg mb-2 leading-none md:text-2xl">
          {projectData.title}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Type:{" "}
          </span>{" "}
          {projectData.type}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Technology:
          </span>{" "}
          {projectData.technology}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Status:
          </span>{" "}
          {projectData.status}
        </p>
        <p className="text-sm leading-snug md:text-base">
          <span className="font-medium text-base text-white mr-1 md:text-lg">
            Description:
          </span>{" "}
          {projectData.description}
        </p>
        <div className="flex justify-end mt-3">
          <a
            target="_blank"
            href={projectData.status !== "In Development" && projectData.link}
            className="px-2 py-1 text-xs rounded-lg border border-primary-1 md:text-base"
          >
            {projectData.status === "In Development"
              ? "In Dev."
              : "Live Project"}
          </a>
        </div>
      </div>
      {type === "right" && (
        <div className="flex-shrink-0 w-2 pt-7  overflow-hidden inline-block md:w-3">
          <div className="h-2 bg-primary1 rotate-45 transform origin-top-left md:h-3"></div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio Projects - Tcee-tech</title>
        <meta
          name="description"
          content="Explore a diverse range of projects on Tcee-techs's portfolio. Discover personal projects and collaborations, showcasing Front-End Software Engineering expertise."
        />
        <meta
          name="keywords"
          content="Tcee-tech, Portfolio, Personal Projects, Collaborations, Front-End Software Engineer"
        />
        <meta name="author" content="Obichukwu Truth Chinemerem" />
        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Portfolio Projects - Tcee-tech"
        />
        <meta
          property="og:description"
          content="Browse a diverse collection of Front End Software Engineering projects by Obichukwu Truth Chinemerem. Discover personal projects and collaborations with clients."
        />
      </Head>
      <section className="px-3 text-primary1 mt-10 md:px-12 md:mt-28">
        <div className="flex justify-between mb-8 text-lg font-semibold md:text-3xl">
          <p className="w-[45%] animate-float text-center">Projects</p>

          <p className="w-[45%] animate-float2 text-center">
            Personal Projects
          </p>
        </div>
        <div className="flex justify-between">
          <div className="w-[47%] md:w-[49%]">
            {projects.map((projectData, index) => (
              <span key={index}>
                <SectionTemplate
                  projectData={projectData}
                  index={index}
                  type="right"
                />
              </span>
            ))}
          </div>

          <div className="w-[1%] bg-primary1 mb-40 rounded-full stainless-steel"></div>

          <div className="w-[47%] md:w-[49%]">
            {myProjects.map((projectData, index) => (
              <span key={index}>
                <SectionTemplate
                  projectData={projectData}
                  index={index}
                  type="left"
                />
              </span>
            ))}
          </div>
        </div>

        <div className=" flex justify-center my-10 md:my-20">
          <a
            target="_blank"
            href="https://github.com/tceeokoye"
            className="transition-transform duration-300 transform hover:scale-105 focus:outline-none border px-4 py-3"
          >
            See More
          </a>
        </div>
      </section>{" "}
      
      <Footer />
    </>
  );
};

export default Projects;
