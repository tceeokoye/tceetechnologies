import Image from "next/image";
import Certificate from "@/assets/CERTIFICATE - TCEE-cropped.svg";
import Card3D from "./Card3D";
import ScrollReveal3D from "./ScrollReveal3D";

export default function CACCertificate() {
  return (
    <div className="w-full  flex flex-col [@media(min-width:951px)]:flex-row gap-8 md:gap-4 justify-center items-center px-4 section md:px-25.75 py-12 md:py-16">
      {/* Text column (and on <= 950px, cert is in-between) */}
      <ScrollReveal3D type="flipLeft" duration={0.75} className="w-full [@media(min-width:951px)]:max-w-[57%]">
        <div className="[@media(min-width:951px)]:h-157.25 flex flex-col justify-between gap-4 [@media(min-width:951px)]:gap-0">
          {/* Top text */}
          <div>
            <h1 className="font-normal text-[32px] leading-[140%] tracking-[-1px] text-[#0F172A]">
              Certifications &amp; Credentials
            </h1>
            <p className="text-base font-normal leading-[150%] text-[#727272] mt-4">
              Corporate Affairs Commission (CAC) Certificate
            </p>
          </div>

          {/* In-between Certificate (shown on <= 950px) */}
          <div className="certificateClassMobile w-full my-4">
            <ScrollReveal3D type="zoom" duration={0.8} className="w-full max-w-[476px] mx-auto">
              <Card3D
                maxTilt={7}
                scale={1.02}
                className="w-full shadow-[0_15px_35px_rgba(0,0,0,0.12)] rounded-lg overflow-hidden"
              >
                <div className="relative bg-amber-500 overflow-hidden w-full h-[520px] sm:h-[600px] md:h-[628px]">
                  <Image
                    src={Certificate}
                    alt="tcee cac"
                    fill
                    className="object-cover"
                  />
                </div>
              </Card3D>
            </ScrollReveal3D>
          </div>

          {/* Bottom text */}
          <div>
            <p className="text-base font-normal leading-[150%] text-[#727272]">
              Limited Liability (LLC) registered with the{" "}
              <span className="text-[#282828] font-medium">
                Corporate Affairs Commission of Nigeria.
              </span>{" "}
              This certification validates the legal registration and
              operational status of the business.
            </p>
          </div>
        </div>
      </ScrollReveal3D>

      {/* Side Certificate (shown on > 950px) */}
      <ScrollReveal3D
        type="flipRight"
        delay={0.2}
        duration={0.9}
        className="w-[43%] certificateClassDesktop md:shrink-0"
      >
        <div style={{ height: "628px" }}>
          <Card3D
            maxTilt={7}
            scale={1.02}
            className="h-full w-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.22)] rounded-lg overflow-hidden"
          >
            <div
              className="relative bg-[#F3F3F3] overflow-hidden"
              style={{ height: "628px", width: "100%" }}
            >
              <Image
                src={Certificate}
                alt="tcee cac"
                fill
                className="object-cover"
              />
            </div>
          </Card3D>
        </div>
      </ScrollReveal3D>
    </div>
  );
}
