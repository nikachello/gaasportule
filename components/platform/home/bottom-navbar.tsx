"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  ChartNoAxesColumn,
  FolderClosed,
  House,
  MessageSquareCheck,
  PiggyBank,
} from "lucide-react";

const links = [
  {
    id: "home",
    label: "მთავარი",
    href: "/platform",
    icon: House,
    center: false,
  },
  {
    id: "wallet",
    label: "დახმარებები",
    href: "/platform/wallet",
    icon: FolderClosed,
    center: false,
  },
  {
    id: "center",
    label: "",
    href: "/platform/new",
    icon: PiggyBank,
    center: true,
  },
  {
    id: "rankings",
    label: "რეიტინგი",
    href: "/platform/rankings",
    icon: ChartNoAxesColumn,
    center: false,
  },
  {
    id: "support",
    label: "მხარდ.",
    href: "/platform/support",
    icon: MessageSquareCheck,
    center: false,
  },
] as const;

const glassStyle: React.CSSProperties = {
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
};

export function BottomNavbar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // future-proof: supports hash links if you add them back
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    router.push(href);
  };

  const isActive = (href: string, center: boolean) => {
    if (center) return false;

    if (href === "/platform") {
      return pathname === "/platform";
    }

    return pathname.startsWith(href);
  };

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-50 flex justify-center px-4 md:hidden"
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)",
      }}
    >
      <nav
        className="w-full max-w-md flex justify-around items-center px-2 py-2.5 rounded-[28px] relative"
        style={{
          background: "rgba(0, 0, 0, 0.55)",
          ...glassStyle,
        }}
      >
        {links.map(({ id, label, href, icon: Icon, center }) => {
          const active = isActive(href, center);

          if (center) {
            return (
              <a
                key={id}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="flex-1 flex justify-center items-center relative"
              >
                <div
                  className="absolute -top-7 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90"
                  style={{
                    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
                    border: "3px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 6px 24px rgba(0,0,0,0.45)",
                  }}
                >
                  <Icon size={22} color="white" />
                </div>
              </a>
            );
          }

          return (
            <a
              key={id}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-[20px] transition-all duration-200"
              style={{
                background: active ? "rgba(255,255,255,0.18)" : "transparent",
                border: active
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "1px solid transparent",
                color: active
                  ? "rgba(255,255,255,0.9)"
                  : "rgba(255,255,255,0.45)",
              }}
            >
              <Icon size={18} />
              <span
                className="text-[9px] whitespace-nowrap"
                style={{ fontWeight: active ? 500 : 400 }}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
