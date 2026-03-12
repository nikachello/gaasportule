"use client";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

const links = [
  { label: "ვის ვეხმარებით", href: "#who-we-help" },
  { label: "როგორ შემოგიერთდეთ", href: "#how-to-join" },
  { label: "დამფუძნებლები", href: "#founders" },
  { label: "პარტნიორები", href: "#partners" },
];

const handleNav = (e: React.MouseEvent, href: string) => {
  e.preventDefault();
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Footer = () => {
  return (
    <Section bg="dgray">
      <Container>
        <div className="text-white py-8 md:py-12">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-4">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-bold tracking-tight text-white whitespace-nowrap text-3xl md:text-4xl lg:text-5xl shrink-0"
            >
              გაასპორტულე
            </a>

            {/* Nav links */}
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm md:text-base"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-1">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                კონტაქტი
              </p>
              <a
                href="tel:+995500121221"
                className="font-bold text-base md:text-lg hover:text-white/70 transition-colors duration-200"
              >
                +995 500 121 221
              </a>
              <a
                href="mailto:help@gaasportule.ge"
                className="font-bold text-base md:text-lg hover:text-white/70 transition-colors duration-200"
              >
                help@gaasportule.ge
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mt-8 md:mt-12 mb-4 md:mb-6" />

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-white/30 text-xs">
            <p>
              © {new Date().getFullYear()} გაასპორტულე. ყველა უფლება დაცულია.
            </p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hover:text-white/60 transition-colors duration-200"
            >
              ზევით ↑
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
