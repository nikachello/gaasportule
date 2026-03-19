"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { UserRound } from "lucide-react";

const links = [
  { id: "who-we-help", label: "ვის ვეხმარებთ", href: "#who-we-help" },
  { id: "how-to-join", label: "როგორ შემოგიერთდეთ", href: "#how-to-join" },
  { id: "founders", label: "დამფუძნებლები", href: "#founders" },
  { id: "partners", label: "პარტნიორები", href: "#partners" },
  { id: "contact", label: "დაგვიკავშირდით", href: "#footer" },
];

const glassStyle: React.CSSProperties = {
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
};

export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop */}
      <nav
        className="hidden md:flex w-[90%] max-w-5xl items-center px-4 py-2 rounded-full font-georgian min-h-[70px]"
        style={{
          transition: "all 0.5s ease",
          background: scrolled
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0.06)",
          ...glassStyle,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-bold tracking-tight text-default-blue whitespace-nowrap text-lg shrink-0 pr-3"
        >
          გაასპორტულე
        </a>

        <div className="w-px h-4 bg-white/20 shrink-0" />

        {/* Nav links */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none flex-1 min-w-0">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="relative px-3 py-2 rounded-full font-medium transition-all duration-300 text-xs lg:text-sm whitespace-nowrap
                text-default-blue/60 hover:text-default-blue/90
                after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[2px]
                after:w-0 after:bg-default-blue after:transition-all after:duration-300
                hover:after:w-[calc(100%-1.5rem)]
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="shrink-0 ml-2">
          <Link
            href="/platform"
            className="px-4 py-2 rounded-full text-xs lg:text-sm font-semibold text-white bg-default-blue hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            შესვლა
          </Link>
        </div>
      </nav>

      {/* Mobile */}
      <div className="flex md:hidden w-full flex-col gap-2">
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

          <div className="flex items-center gap-2">
            <Link
              href="/platform"
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              <UserRound className="w-4 h-4 text-default-blue" />
            </Link>

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
                  transform: menuOpen
                    ? "translateY(7px) rotate(45deg)"
                    : "none",
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
          </div>
        </nav>

        {/* Mobile dropdown */}
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
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="px-6 py-4 text-base font-medium border-b border-white/10 last:border-none transition-all duration-200"
              style={{ color: "rgba(var(--color-default-blue-rgb), 0.6)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
