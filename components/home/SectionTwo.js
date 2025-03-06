import { useRouter } from "next/router";

import Products from "../UI/Products";
import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const brandsWorkedWith = [
  {
    logo: "bestmantech-logo",
    alt: "BestManTech Collaboration: Partnering with tcee-tech on a Meaningful Journey",
  },
  {
    logo: "optimum-computers-logo",
    alt: "Optimum Computers Affiliation: Navigating the Tech Landscape with tcee-tech",
  },
  {
    logo: "udobatech-logo",
    alt: "udobatech Collaboration: Fueling Innovation Alongside tcee-tech",
  },
  {
    logo: "call-a-doc-logo",
    alt: "Call A Doc Partnership: Empowering Healthcare Technology with tcee-tech",
  },
];

const SectionTwo = () => {
  const router = useRouter();

  const seeMoreHandler = () => {
    router.replace("/shop");
  };
  const sendMessageHandler = () => {
    handleWhatsAppClick(
      "Hello! 👋 I just visited your portfolio and I'm truly inspired by your journey and skills. I'd love to connect and potentially discuss collaboration opportunities or seek advice in the field. Looking forward to chatting with you further! 🚀",
      "+2348105175500"
    );
  };

  const videoIds = ["UqOb7JOXNWc", "wp1chKaIYbY", "OFjW-Sjc_VQ", "pEygELhyBQw"];

  const productInfo = [
    {
      name: "Prep",
      type: "Website",
      imageUrl: "/images/prep.png",
      link: "https://prep-six.vercel.app/",
      description:
        "With comprehensive guides on topics like interview preparation, common interview questions, and salary negotiation.",
    },

    {
      name: "Links",
      type: "Website",
      imageUrl: "/images/links-image.png",
      link: "https://social-links-rust.vercel.app/",
      description:
        "Elevate your social media engagement with this platform's innovative features and strategies",
    },

   
    {
      name: "MacLinks",
      type: "Website",
      imageUrl: "/images/mac-links-image.png",
      link: "https://mac-link.vercel.app/",
      description:
        "Enjoy the flexibility to choose from an array of customization options, enabling you to brand your academy and create a seamless extension of your professional identity.",
    },
    {
      name: "EduLab",
      type: "Website",
      imageUrl: "/images/edu-lab-image.png",
      link: "https://edu-lab-delta.vercel.app/",
      description:
        "A vibrant online platform dedicated to celebrating the transformative power of education",
    },
    {
      name: "Real-Estate",
      type: "Website",
      imageUrl: "/images/real-estate-image.png",
      link: "https://real-estate-tau-swart.vercel.app/",
      description:
        "Showcases an extensive range of exceptional properties, catering to diverse needs and preferences",
    },
  ];

  return (
    <>
      
      <div className="w-full mt-20">
        <p className="text-xl font-medium mx-5 md:mx-12 md:text-2xl">
         Software for sale
        </p>
        <Products productInfo={productInfo} />
        <div className="flex justify-center my-10">
          <button
            className="transition-transform duration-300 transform hover:scale-105 focus:outline-none border px-4 py-3"
            onClick={seeMoreHandler}
          >
            See More
          </button>
        </div>

        <p className="text-xl pl-5 font-medium md:pl-12 md:text-2xl">
          My team mate (Opulence) Few of many Mobile Apps.
        </p>
        <hr className="border-t-2 opacity-50 my-5 mx-3 md:mx-12" />
      </div>
      <div className=" space-x-5 flex pb-3 mx-5 md:mx-20 overflow-x-auto">
        {videoIds.map((videoId, index) => (
          <div className="flex-shrink-0 border" key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              className="h-[200px] w-[300px]"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>{" "}

      <div className="relative mt-24 mb-32 px-5 md:px-12">
        <p className="text-xl font-medium md:text-2xl">Some brands I've worked with</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        <div className="space-x-auto flex flex-wrap justify-evenly pt-3 h-max">
          {brandsWorkedWith.map((brandsWorkedWithData, index) => (
            <div key={index} className="h-24 mb-5 mx-3 w-40 md:w-52">
              <Image
                src={`/images/logo/${brandsWorkedWithData.logo}.svg`}
                alt={brandsWorkedWithData.alt}
                className="h-full w-full"
                width={208}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="pb-10 space-y-5 px-5 md:px-12">
        <p className="text-lg">Let's build magic together</p>
        <hr className="border-t-2 my-3 border-primary1 opacity-50" />
        {/* <p className="leading-loose text-lg font-light ">
          "I am deeply passionate about crafting elegant and efficient solutions
          for intricate challenges, and I am thrilled at the opportunity to
          apply my skills to your forthcoming project. With comprehensive
          experience encompassing both front-end and back-end development, I
          possess the flexibility to operate across a spectrum of programming
          languages and frameworks. From designing responsive mobile
          applications and websites to engineering robust server architectures,
          I possess the technical prowess required to construct scalable and
          secure systems tailored to your requirements. However, my focus
          extends beyond mere coding. As a software engineer, I recognize the
          significance of collaboration, effective communication, and empathy. I
          collaborate closely with stakeholders to ensure that I deliver not
          just any solution, but the right solution. Moreover, I possess an
          unyielding enthusiasm to understand your business, objectives, and
          your users on a deeper level. Whether you seek a dedicated full-time
          professional, an adept part-time consultant, a troubleshooter for your
          code, or a skilled contract developer, I am enthusiastic to learn
          about your project. Please feel free to contact me through any of my
          social media channels - I am eager to initiate our collaboration. Your
          project holds great promise, and I am eagerly looking forward to
          joining forces with you to embark on this journey."
        </p> 
        <button
          onClick={sendMessageHandler}
          className="flex items-center bg-black px-5 py-3 text-white rounded-sm"
        >
          Send Message
          <Image
            src="/images/icon/arrow-right.svg"
            alt="Message Icon: Reach Out and Connect with tcee-tech"
            className="h-4 w-4 ml-2"
            width={16}
            height={16}
          />
        </button>
      </div> */}
    </>
  );
};
export default SectionTwo;
