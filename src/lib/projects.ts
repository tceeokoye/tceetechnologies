import CohaafImage from "@/assets/projects/cohaaf.svg";
import ConnectAfricaImage from "@/assets/projects/connectAfrica.svg";
import ElgreenImage from "@/assets/projects/Elgreen.svg";
import MartafImage from "@/assets/projects/martAf.svg";
import OnaAgaWebApp from "@/assets/projects/onaagabg.svg";
import type { StaticImageData } from "next/image";

// Reusable two-phone mockup screen pair
export interface DualPhoneMockup {
  leftImage: string | StaticImageData; // Primary mockup image
  rightImage: string; // Right phone image path (e.g. "/portfolio_app.png")
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  date: string;
  description: string;
  image: any;         // Main cover image (shown on landing page & top of project page)
  liveUrl: string;    // URL for "View Live ↗" button

  // ========================================================
  // 1. ABOUT PROJECT SECTION
  // ========================================================
  about: {
    text: string;
    // 3 Mockups displayed under "About Project"
    mockup1: DualPhoneMockup; // 1st Mockup card
    mockup2: DualPhoneMockup; // 2nd Mockup card
    mockup3: DualPhoneMockup; // 3rd Mockup card
  };

  // ========================================================
  // 2. CHALLENGE SECTION
  // ========================================================
  challenge: {
    title: string; // e.g. "Challenge:"
    text: string;
    mockup: DualPhoneMockup; // Mockup card displayed under "Challenge"
  };

  // ========================================================
  // 3. SOLUTION / FINAL SECTION (above Previous/Next buttons)
  // ========================================================
  solution: {
    title: string; // e.g. "Challenge" or "Solution"
    text: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "onaga",
    title: "Onaga",
    tagline: "Safe, reliable rides with verified drivers across Nigeria.",
    date: "May 2026",
    description: "Transportation platform for modern day mobility",
    image: OnaAgaWebApp,
    liveUrl: "https://www.onaaga.com",

    // --- ABOUT PROJECT ---
    about: {
      text: "OnaAga is a Nigeria-focused ride-hailing platform connecting riders with verified drivers. Its experience brings together transparent fares, real-time trip tracking, and a straightforward driver onboarding journey, helping riders travel with confidence while creating flexible earning opportunities for local drivers.",
      mockup1: {
        leftImage: "/onaaga-mockup-home-about.png",
        rightImage: "/portfolio_app.png",
      },
      mockup2: {
        leftImage: "/onaaga-mockup-about-benefits.png",
        rightImage: "/portfolio_mobile.png",
      },
      mockup3: {
        leftImage: "/onaaga-mockup-benefits-onboarding.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- CHALLENGE ---
    challenge: {
      title: "Challenge:",
      text: "Booking a ride can feel uncertain when passengers cannot easily verify a driver, understand the fare, or follow a trip. OnaAga addresses those concerns with driver verification, clear pricing, live GPS tracking, and dedicated support throughout the journey.",
      mockup: {
        leftImage: "/onaaga-mockup-steps-faq.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- SOLUTION ---
    solution: {
      title: "Solution",
      text: "The responsive OnaAga experience makes its rider and driver journeys easy to understand. Riders can join the launch waitlist, while drivers follow a guided registration process to submit identity, license, and vehicle documents for review. Safety, transparent fares, trip tracking, and driver support remain central throughout.",
    },
  },

  {
    id: 2,
    slug: "cohaaf",
    title: "COHAAF",
    tagline: "Building hope and supporting vulnerable communities across Nigeria.",
    date: "March 2026",
    description: "Building Hope, Transforming Lives",
    image: CohaafImage,
    liveUrl: "https://www.cohaaf.org/",

    // --- ABOUT PROJECT ---
    about: {
      text: "Chizaram Ogazi Hope and Aid Foundation (COHAAF) is a Port Harcourt-based nonprofit established in 2022. Its work supports orphaned children, elderly people, widows, and vulnerable communities through food aid, child protection, legal support, rural development, and community programs. The website brings the foundation's mission, work, milestones, and ways to get involved together.",
      mockup1: {
        leftImage: "/cohaaf-mockup-home-mission.png",
        rightImage: "/portfolio_app.png",
      },
      mockup2: {
        leftImage: "/cohaaf-mockup-programs-community.png",
        rightImage: "/portfolio_mobile.png",
      },
      mockup3: {
        leftImage: "/cohaaf-mockup-campaigns-impact.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- CHALLENGE ---
    challenge: {
      title: "Challenge:",
      text: "Visitors need to quickly understand COHAAF's wide-ranging community work and find a clear next step, whether they want to learn about its programs, volunteer, or support its initiatives. The website needed to make the organization's story and community work easy to explore.",
      mockup: {
        leftImage: "/cohaaf-mockup-stories-join.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- SOLUTION ---
    solution: {
      title: "Solution",
      text: "The responsive website introduces COHAAF's mission and programs, shares outreach and team stories, and organizes campaign and impact information. Clear paths to contact the foundation, donate, and volunteer help visitors move from learning about its work to getting involved.",
    },
  },

  {
    id: 3,
    slug: "connect-with-africa",
    title: "Connect With Africa",
    tagline: "Connecting global generosity with frontline clinics and communities.",
    date: "January 2026",
    description: "Connect with Africa bridges global generosity with local needs across Africa.",
    image: ConnectAfricaImage,
    liveUrl: "https://www.connectwithafrica.org/",

    // --- ABOUT PROJECT ---
    about: {
      text: "Connect with Africa is a humanitarian initiative that links donors, healthcare institutions, and African communities. Its website explains how the organization identifies local needs, coordinates medical supplies and equipment, supports frontline healthcare workers, and builds partnerships with local clinics. Visitors can explore its programs, view field updates, and find ways to donate, volunteer, or partner.",
      mockup1: {
        leftImage: "/connect-africa-mockup-challenge-work.png",
        rightImage: "/portfolio_app.png",
      },
      mockup2: {
        leftImage: "/connect-africa-mockup-work-initiative.png",
        rightImage: "/portfolio_mobile.png",
      },
      mockup3: {
        leftImage: "/connect-africa-mockup-impact-supplies.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- CHALLENGE ---
    challenge: {
      title: "Challenge:",
      text: "Healthcare facilities can lack essential equipment even when skilled professionals are ready to care for patients. Visitors also need a clear picture of how resources move from donors to clinics, what programs address those gaps, and how they can contribute beyond a financial donation.",
      mockup: {
        leftImage: "/connect-africa-mockup-impact-facility.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- SOLUTION ---
    solution: {
      title: "Solution",
      text: "The website leads with the frontline healthcare mission, then organizes the organization’s programs, approach, and field stories into a clear path for supporters. Dedicated calls to action connect visitors with donation, medical-supply contributions, volunteering, and partnership opportunities.",
    },
  },

  {
    id: 4,
    slug: "elgreen-consultant",
    title: "Elgreen Consultant",
    tagline: "Cleaning, facility, environmental, and agricultural services from one trusted partner.",
    date: "November 2025",
    description: "Top provider of integrated environmental and facility management solutions.",
    image: ElgreenImage,
    liveUrl: "https://elgreenglobalconsult.com/",

    // --- ABOUT PROJECT ---
    about: {
      text: "Elgreen Global Consult is a Nigerian service provider offering industrial and commercial cleaning, property maintenance, facility management, landscaping, agriculture, pest control, contracting, and waste management. Its website brings this broad service range together, highlights its sustainability and quality commitments, and gives prospective clients direct ways to request a quote or book through WhatsApp.",
      mockup1: {
        leftImage: "/elgreen-mockup-home-services.png",
        rightImage: "/portfolio_app.png",
      },
      mockup2: {
        leftImage: "/elgreen-mockup-service-landscaping.png",
        rightImage: "/portfolio_mobile.png",
      },
      mockup3: {
        leftImage: "/elgreen-mockup-agriculture-support.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- CHALLENGE ---
    challenge: {
      title: "Challenge:",
      text: "With services ranging from cleaning and facility management to landscaping, agriculture, and waste disposal, visitors need to find the right service quickly and understand how to request help. The site also needs to build confidence in service quality and communicate Elgreen's environmentally responsible approach.",
      mockup: {
        leftImage: "/elgreen-mockup-landscaping-agriculture.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- SOLUTION ---
    solution: {
      title: "Solution",
      text: "The website organizes Elgreen's services into clear categories, pairs them with gallery examples and customer reassurance, and keeps direct contact close at hand. Prominent booking and free-quote links open a WhatsApp conversation, making it straightforward for prospective clients to discuss their needs.",
    },
  },
  {
    id: 5,
    slug: "martaf",
    title: "Martaf",
    tagline: "An online marketplace connecting buyers and sellers across Africa.",
    date: "2026",
    description: "Shop products across Africa or start selling on Martaf.",
    image: MartafImage,
    liveUrl: "https://martaf.com/",

    // --- ABOUT PROJECT ---
    about: {
      text: "Martaf is an e-commerce marketplace for products across Africa, including fashion, electronics, home goods, appliances, and building materials. The storefront gives shoppers ways to search and browse categories, discover trending items, and explore product listings, while sellers can join the marketplace and manage their own products.",
      mockup1: {
        leftImage: "/martaf-mockup-home-categories.png",
        rightImage: "/portfolio_app.png",
      },
      mockup2: {
        leftImage: "/martaf-mockup-trending-products.png",
        rightImage: "/portfolio_mobile.png",
      },
      mockup3: {
        leftImage: "/martaf-mockup-catalog-benefits.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- CHALLENGE ---
    challenge: {
      title: "Challenge:",
      text: "A broad catalog needs to work for shoppers looking for different kinds of products, while sellers need a clear path to join and list their goods. The storefront must make product discovery straightforward and help users feel confident as they browse and shop.",
      mockup: {
        leftImage: "/martaf-mockup-impact-join.png",
        rightImage: "/portfolio_app.png",
      },
    },

    // --- SOLUTION ---
    solution: {
      title: "Solution",
      text: "Martaf brings category browsing, search, trending products, and seller registration into a mobile-friendly storefront. Marketplace information highlights secure transactions and delivery, while clear calls to action guide shoppers to browse and prospective vendors to become sellers.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getPrevNextProjects(slug: string): {
  prev: Project;
  next: Project;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  const safeIndex = index === -1 ? 0 : index;
  const prevIndex = safeIndex === 0 ? projects.length - 1 : safeIndex - 1;
  const nextIndex = safeIndex === projects.length - 1 ? 0 : safeIndex + 1;

  return {
    prev: projects[prevIndex],
    next: projects[nextIndex],
  };
}
