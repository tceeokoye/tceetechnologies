import Image from "next/image";

const socialInfo = [
  {
    imageName: "github",
    link: "https://github.com/tceeokoye",
    value: "Tceeservices",
  },
  {
    imageName: "twitter",
    link: "https://x.com/Tcee_tech",
    value: "Tcee_tech",
  },
  {
    imageName: "linkedin",
    link: "https://www.linkedin.com/in/tceetechnologies",
    value: "tceetechnologies",
  },
  {
    imageName: "facebook",
    link: "https://facebook.com/victor.opulence",
    value: "Tc Obichukwu",
  },
];

const Socials = () => {
  return (
    <div className="mt-28 mb-16">
      <div className="border border-primary1 backdrop-filter backdrop-blur-sm flex gap-4 p-6 flex-col justify-center items-center size1:flex-row">
        <p className="text-lg ">Find me on:</p>
      <div className="flex justify-evenly flex-wrap gap-4">  {socialInfo.map((socialInfoData, index) => {
          return (
            <a
              key={index}
              href={socialInfoData.link}
              target="_blank"
              className="flex items-center"
            >
              <div className="h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={`/images/icon/${socialInfoData.imageName}-icon.gif`}
                  alt={`Connect on ${socialInfoData.imageName}: Join Tcee-tech's Network on Social Media`}
                  className="w-full h-full"
                  width={43.7}
                  height={43.7}
                />
              </div>{" "}
              {/* <p className="font-extralight ml-2">{socialInfoData.value}</p> */}
            </a>
          );
        })} </div>
      </div>
    </div>
  );
};

export default Socials;
