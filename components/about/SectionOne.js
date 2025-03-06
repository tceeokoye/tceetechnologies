import Image from "next/image";

const SectionOne = () => {
  return (
    <section className="relative z-20 mt-5 py-8 px-5 md:px-12">
      <h1 className="text-3xl text-primary1 font-bold mb-4">
        My Name is <span className="text-white">Obichukwu Truth Chinemerem,</span> I
        am a <span className="text-white">Front End Software Engineer.</span>
      </h1>
      <div className="flex flex-col sm:flex-row">
        <div className=" mb-4 sm:mb-0 sm:mr-8">
          <Image
            src="/images/tceetech.svg"
            alt="Opulence Developer"
            className="border-2 rounded"
            loading="eager"
            priority
            width={600}
            height={400}
          />
        </div>
        <div className="space-y-7">
          <p className="text-lg mb-4">
            Welcome! I'm delighted to have you here to share my programming
            journey.
          </p>
          <p className="text-lg">
            It all began at the age of 10 when I laid hands on my first
            computer. The potential it held and the boundless opportunities it
            offered fascinated me. This marked the inception of my passion for
            programming, which I pursued academically and beyond.
          </p>
          <p className="text-lg">
            In my pursuit of mastery, I embarked on online programming courses
            and workshops. Devoting my time and energy, I delved into
            cutting-edge programming languages and new skill sets. My expertise
            spans embedded systems (Arduino), web development (HTML, CSS with
            Tailwind CSS), React.js, among others.
          </p>
          <p className="text-lg">
            While still in school, I joined a team that developed a platform where fellow students
            accessed lecture notes, assignments, and solutions with ease, even
            extending the service to various universities. This endeavor
            showcased my abilities while providing value to others.
          </p>
          <p className="text-lg">
            As I evolved, my appetite for knowledge and challenges grew.
            Continuously expanding my programming prowess, I've transitioned
            from coding for enjoyment to making it my profession over the past 5
            years. My commitment is unwavering: dedicating my life to
            programming and seizing every learning opportunity.
          </p>
          <p className="text-lg">
            I eagerly seek challenges that spark curiosity, thought, adaptation,
            growth, and learning. I hold the belief that each project is a
            gateway to fresh insights and a chance to exhibit my skills. I am
            confident in my ability to collaborate with you or contribute to
            your endeavors, and I am excited about what we can achieve together.
          </p>
          <p className="text-lg">
            Thank you for investing your time in exploring my programming
            journey. Please feel free to explore my portfolio, where you can
            find a selection of the projects I've undertaken. Should you need
            assistance with debugging or wish to discuss a potential project,
            don't hesitate to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
