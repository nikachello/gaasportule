"use client";

import { useState, useEffect } from "react";

const links = [
  { id: "who-we-help", label: "ვის ვეხმარებით", href: "#who-we-help" },
  { id: "how-to-join", label: "როგორ შემოგიერთდეთ", href: "#how-to-join" },
  { id: "founders", label: "დამფუძნებლები", href: "#founders" },
  { id: "partners", label: "პარტნიორები", href: "#partners" },
  { id: "contact", label: "დაგვიკავშირდით", href: "#contact" },
];

const glassStyle: React.CSSProperties = {
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const NavLink = ({
    id,
    label,
    href,
    mobile = false,
  }: {
    id: string;
    label: string;
    href: string;
    mobile?: boolean;
  }) => {
    const isActive = active === id;

    if (mobile) {
      return (
        <a
          href={href}
          onClick={(e) => handleNav(e, href)}
          className="px-6 py-4 text-base font-medium border-b border-white/10 last:border-none transition-all duration-200"
          style={{
            color: "rgba(var(--color-default-blue-rgb), 0.6)",
            background: "transparent",
          }}
        >
          {label}
        </a>
      );
    }

    return (
      <a
        href={href}
        onClick={(e) => handleNav(e, href)}
        className={`relative px-2 lg:px-4 py-2 rounded-full font-medium transition-all duration-300 text-xs lg:text-sm whitespace-nowrap
        after:absolute after:bottom-1 after:left-2 after:right-2 after:h-[2px] after:w-[0%] after:bg-default-blue
        after:transition-all after:duration-300 hover:after:w-[calc(100%-1rem)]
        lg:after:left-4 lg:after:right-4 lg:hover:after:w-[calc(100%-2rem)]
        text-default-blue/60`}
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
      >
        {label}
      </a>
    );
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop */}
      <nav
        className="hidden md:flex w-[90%] max-w-5xl justify-between items-center gap-1 px-2 py-2 rounded-full font-georgian h-[70px]"
        style={{
          transition: "all 0.5s ease",
          background: scrolled
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0.06)",
          ...glassStyle,
        }}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 font-bold tracking-tight text-default-blue whitespace-nowrap text-lg shrink-0"
        >
          გაასპორტულე
        </a>

        <div className="w-px h-4 bg-white/20 mx-1 shrink-0" />

        <div className="flex flex-row gap-1 lg:gap-4 xl:gap-6 overflow-hidden">
          {links.map((link) => (
            <NavLink key={link.id} {...link} />
          ))}
        </div>
      </nav>

      {/* Mobile */}
      <div className="flex md:hidden w-full flex-col gap-2">
        {/* Mobile Top Bar */}
        <nav
          className="w-full flex justify-between items-center px-5 py-2 rounded-full font-georgian h-[60px]"
          style={{
            transition: "all 0.5s ease",
            background: scrolled
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(255, 255, 255, 0.06)",
            ...glassStyle,
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-bold tracking-tight text-default-blue text-xl"
          >
            გაასპორტულე
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-full transition-all"
            style={{
              background: menuOpen
                ? "rgba(255,255,255,0.2)"
                : "rgba(255,255,255,0.08)",
            }}
            aria-label="Toggle menu"
          >
            <span
              className="block w-4 h-[2px] bg-default-blue rounded-full transition-all duration-300"
              style={{
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-4 h-[2px] bg-default-blue rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-4 h-[2px] bg-default-blue rounded-full transition-all duration-300"
              style={{
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className="w-full rounded-3xl font-georgian overflow-hidden flex flex-col"
          style={{
            ...glassStyle,
            background: "rgba(255, 255, 255, 0.12)",
            maxHeight: menuOpen ? `${links.length * 64}px` : "0px",
            transition: "max-height 0.4s ease, opacity 0.3s ease",
            opacity: menuOpen ? 1 : 0,
          }}
        >
          {links.map((link) => (
            <NavLink key={link.id} {...link} mobile />
          ))}
        </div>
      </div>
    </header>
  );
}
