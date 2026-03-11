"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: "who-we-help", label: "ვის ვეხმარებით", href: "/who-we-help" },
  { id: "how-to-join", label: "როგორ შემოგიერთდეთ", href: "/how-to-join" },
  { id: "founders", label: "დამფუძნებლები", href: "/founders" },
  { id: "partners", label: "პარტნიორები", href: "/partners" },
  { id: "contact", label: "დაგვიკავშირდით", href: "/contact" },
];

export function GlassNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const active = links.find((l) => l.href === pathname)?.id ?? "home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4">
      <nav
        className="w-[80%] justify-between flex items-center gap-1 px-2 py-2 rounded-full font-georgian h-[70px]"
        style={{
          transition: "all 0.5s ease",
          background: scrolled
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          // boxShadow: scrolled
          //   ? "0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(255,255,255,0.05)"
          //   : "0 4px 16px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
      >
        <Link
          href="/"
          className="px-4 py-2 font-bold tracking-tight text-default-blue whitespace-nowrap text-2xl"
        >
          გაასპორტულე
        </Link>

        {/* Divider */}
        <div className="w-px h-4 bg-white/20 mx-1" />

        {/* Nav Links */}
        <div className="flex flex-row gap-10">
          {links.map(({ id, label, href }) => {
            const isActive = active === id;
            return (
              <Link
                key={id}
                href={href}
                className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 text-sm
    after:absolute after:bottom-1 after:left-4 after:right-4 after:h-[2px] after:w-[calc(0%)] after:bg-default-blue after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]
    ${isActive ? "text-default-blue" : "text-default-blue/60"}`}
                style={{
                  background: isActive
                    ? "rgba(255,255,255,0.18)"
                    : "transparent",
                  boxShadow: isActive
                    ? "inset 0 1px 0 rgba(255,255,255,0.35), 0 1px 3px rgba(0,0,0,0.1)"
                    : "none",
                }}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
