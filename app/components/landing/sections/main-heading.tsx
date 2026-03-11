import Image from "next/image";
import React from "react";
import Header from "../header";

const MainHeading = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* ── MOBILE (< md): stacked ── */}
      <div className="flex flex-col min-h-screen md:hidden">
        <div className="flex flex-col justify-center px-6 pt-24 pb-8 flex-1">
          <Header
            title="გაასპორტულე - დაეხმარე ქართულ სპორტს განვითარებაში"
            description="ჩვენი აზრით სპორტი ანვითარებს ადამიანს როგორც პიროვნულად ასევე მორალურად. ჩვენი ვალია შევქმნათ ისეთი გარემო, სადაც სპორტი ყველასთვის ხელმისაწვდომი იქნება."
          />
        </div>
        <div
          className="relative w-full h-[50vh]"
          style={{
            clipPath: "polygon(6% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#ECF2FC",
          }}
        >
          <Image
            src="/images/landing/khvicha.png"
            alt="Khvicha Kvaratskhelia"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 10%" }}
          />
          <span className="absolute bottom-10 right-4 font-semibold text-xs text-default-blue z-10">
            ხვიჩა კვარაცხელია
          </span>
          <span className="absolute bottom-5 right-4 font-semibold text-xs text-default-blue z-10">
            პროექტის მეგობარი
          </span>
        </div>
      </div>

      {/* ── TABLET (md–lg) ── */}
      <div className="hidden md:flex lg:hidden relative w-full min-h-screen">
        <div
          className="absolute top-0 right-0 h-full w-[55%]"
          style={{
            clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#ECF2FC",
          }}
        >
          <Image
            src="/images/landing/khvicha.png"
            alt="Khvicha Kvaratskhelia"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 10%" }}
          />
          <span className="absolute top-[62%] right-5 font-semibold text-sm text-default-blue z-10">
            ხვიჩა კვარაცხელია
          </span>
          <span className="absolute top-[67%] right-5 font-semibold text-sm text-default-blue z-10">
            პროექტის მეგობარი
          </span>
        </div>
        <div
          className="absolute top-0 left-0 h-full flex items-center"
          style={{ width: "50%" }}
        >
          <div className="px-8">
            <Header
              title="გაასპორტულე - დაეხმარე ქართულ სპორტს განვითარებაში"
              description="ჩვენი აზრით სპორტი ანვითარებს ადამიანს როგორც პიროვნულად ასევე მორალურად. ჩვენი ვალია შევქმნათ ისეთი გარემო, სადაც სპორტი ყველასთვის ხელმისაწვდომი იქნება."
            />
          </div>
        </div>
      </div>

      {/* ── DESKTOP (≥ lg) ── */}
      <div className="hidden lg:block relative w-full h-screen">
        <div
          className="absolute top-0 right-0 h-full w-[60%]"
          style={{
            clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 100%)",
            backgroundColor: "#ECF2FC",
          }}
        >
          <Image
            src="/images/landing/khvicha.png"
            alt="Khvicha Kvaratskhelia"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center -15%" }}
          />
          <span className="absolute top-[60%] right-6 font-semibold text-sm text-default-blue z-10">
            ხვიჩა კვარაცხელია
          </span>
          <span className="absolute top-[65%] right-6 font-semibold text-sm text-default-blue z-10">
            პროექტის მეგობარი
          </span>
        </div>
        <div
          className="absolute top-0 left-0 h-full flex items-center"
          style={{ width: "42%" }}
        >
          <div className="w-full px-6 xl:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]">
            <Header
              title="გაასპორტულე - დაეხმარე ქართულ სპორტს განვითარებაში"
              description="ჩვენი აზრით სპორტი ანვითარებს ადამიანს როგორც პიროვნულად ასევე მორალურად. ჩვენი ვალია შევქმნათ ისეთი გარემო, სადაც სპორტი ყველასთვის ხელმისაწვდომი იქნება. ჩვენი პლატფორმის მეშვეობით შეგიძლია აირჩიო და დაეხმარო ადამიანებს, გუნდებს და პროექტებს. ყველა ხარჯი გამჭირვალე და შენთვის ხელმისაწვდომია!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeading;
