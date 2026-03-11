import React from "react";

type SectionProps = {
  children: React.ReactNode;
  bg?: "default" | "muted" | "primary" | "gray" | "sky";
  noPadding?: boolean;
};

const bgVariants = {
  default: "bg-white",
  muted: "bg-gray-100",
  primary: "bg-default-blue text-white",
  gray: "bg-[#F3FBFE]",
  sky: "bg-light-blue",
};

export default function Section({
  children,
  bg = "default",
  noPadding = false,
}: SectionProps) {
  return (
    <section className={`${noPadding ? "" : "py-24"} ${bgVariants[bg]}`}>
      {children}
    </section>
  );
}
