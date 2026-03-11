"use client";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Image from "next/image";
import { useState } from "react";

const availableJoinOptions = [
  {
    id: 0,
    optionName: "მინდა დავეხმარო",
    description:
      "დასახმარებლად საჭიროა, რომ გაიაროთ შექმნათ ანგარიში და გაიაროთ რეგისტრაცია. უნდა აირჩიოთ თუ ვისი დახმარება გსურთ და მიყვეთ ინსტრუქციას. ასევე შეგიძლიათ აირჩიოთ ყოველთვიური დახმარება",
    imgSrc: "/images/landing/how-to-join/1.webp",
  },
  {
    id: 1,
    optionName: "მჭირდება დახმარება",
    description:
      "დახმარების მისაღებად საჭიროა ვერიფიკაცია. ამისთვის უნდა გამოგვიგზავნოთ ელ-ფოსტა, ჩვენი წარმომადგენელი დაგიკავშირდებათ, გესტუმრებათ ადგილზე, გაეცნობა თქვენს პრობლემებს და დაგეხმარებათ მათ გადაჭრაში",
    imgSrc: "/images/landing/how-to-join/1.webp",
  },
];

const HowToJoin = () => {
  const [option, setOption] = useState<number>(0);

  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Left — buttons + description */}
          <div className="w-full md:w-3/4 flex flex-col gap-6">
            {/* Pills */}
            <div className="flex flex-row gap-3 flex-wrap">
              {availableJoinOptions.map((availableOption) => {
                const isActive = option === availableOption.id;
                return (
                  <button
                    key={availableOption.id}
                    onClick={() => setOption(availableOption.id)}
                    className="px-7 py-5 rounded-full font-bold text-3xl transition-all duration-300 cursor-pointer whitespace-nowrap w-fit"
                    style={{
                      background: isActive
                        ? "var(--color-default-blue)"
                        : "transparent",
                      color: isActive ? "white" : "var(--color-default-blue)",
                      border: "2px solid var(--color-default-blue)",
                    }}
                  >
                    {availableOption.optionName}
                  </button>
                );
              })}
            </div>

            {/* Description */}
            <p className="text-2xl text-gray-700 leading-relaxed">
              {availableJoinOptions[option].description}
            </p>
          </div>

          {/* Right — image */}
          <div className="w-full md:w-1/4 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-[9/16]">
              <Image
                src={availableJoinOptions[option].imgSrc}
                alt={availableJoinOptions[option].optionName}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowToJoin;
