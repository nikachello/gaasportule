"use client";

import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Image from "next/image";
import { useState } from "react";

const appStates = [
  {
    description: "აირჩიე ვისი დახმარება გსურს",
    href: "/images/landing/how-app-works/1.webp",
  },
  {
    description: "გახსენი და ნახე დეტალები",
    href: "/images/landing/how-app-works/2.webp",
  },
  {
    description: "აირჩიე გადახდის მეთოდი",
    href: "/images/landing/how-app-works/3.webp",
  },
  {
    description: "დაელოდე შედეგებს",
    href: "/images/landing/how-app-works/4.webp",
  },
];

const HowTheAppWorks = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? appStates.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === appStates.length - 1 ? 0 : i + 1));

  return (
    <Section bg="sky">
      <Container>
        <h1 className="text-center text-3xl md:text-4xl font-bold text-default-blue">
          როგორ მუშაობს აპლიკაცია
        </h1>

        {/* Desktop — all 4 side by side */}
        <div className="hidden md:flex flex-row justify-between mt-15 gap-6">
          {appStates.map((state, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 flex-1"
            >
              <div className="relative w-full aspect-[9/16] max-w-[300px]">
                <Image
                  src={state.href}
                  alt={state.description}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-bold text-default-blue text-center max-w-[160px]">
                {index + 1}. {state.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile — carousel/slider */}
        <div className="flex md:hidden flex-col items-center mt-10 gap-6">
          <div className="flex flex-row items-center gap-4 w-full">
            <button
              onClick={prev}
              className="bg-default-blue text-white rounded-full w-10 h-10 shrink-0 flex items-center justify-center text-xl font-bold"
            >
              ‹
            </button>

            <div className="flex flex-col items-center flex-1 gap-4">
              <div className="relative w-full aspect-[9/16] max-w-[200px] mx-auto">
                <Image
                  src={appStates[current].href}
                  alt={appStates[current].description}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xl font-bold text-default-blue text-center">
                {current + 1}. {appStates[current].description}
              </p>
            </div>

            <button
              onClick={next}
              className="bg-default-blue text-white rounded-full w-10 h-10 shrink-0 flex items-center justify-center text-xl font-bold"
            >
              ›
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex flex-row gap-2">
            {appStates.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background:
                    i === current
                      ? "var(--color-default-blue)"
                      : "rgba(var(--color-default-blue-rgb), 0.25)",
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowTheAppWorks;
