"use client";
import React, { useState } from "react";
import Section from "../../layout/section";
import Container from "../../layout/container";
import Image from "next/image";

const helpTypes = [
  {
    image: "/images/landing/help-types/1.png",
    heading: "ინდივიდუალური",
    description:
      "დაეხმარე კონკრეტულ ადამიანს: ფორმა, ვარჯიში ან ჩემპიონატზე გამგზავრების დაფინანსება.",
  },
  {
    image: "/images/landing/help-types/2.png",
    heading: "გუნდური",
    description:
      "დაეხმარე გუნდს ეკიპირების შეძენაში, შეკრების დაფინანსებაში ან ჩემპიონატზე გამგზავრებაში",
  },
  {
    image: "/images/landing/help-types/3.png",
    heading: "ინფრასტრუქტურა",
    description:
      "შექმენი სპორტული გარემო, დარბაზის ეკიპირება, მოედანი ან სხვა.",
  },
];

const WhoWeHelp = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? helpTypes.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === helpTypes.length - 1 ? 0 : i + 1));

  return (
    <Section bg="gray">
      <Container>
        <div className="flex flex-col md:flex-row gap-4 md:gap-0">
          {/* Left Panel */}
          <div className="w-full md:w-1/2 text-center bg-white rounded-xl p-6 md:p-10 flex flex-col justify-between gap-6">
            <h1 className="text-2xl md:text-4xl font-bold">ვის ვეხმარებით</h1>
            <p className="text-base md:text-xl">
              პროექტი შეიქმნა იმისთვის, რომ დავეხმაროთ ახალგაზრდა სპორტსმენებს,
              ბავშვებს შეზღუდული შესაძლებლობით და ადამიანებს, რომლებსაც
              სხვადასხვა პრობლემა გააჩნიათ. გვსურს მათ მივცეთ იმედი და
              დავეხმაროთ სირთულეების გადალახვაში.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="text-center rounded-xl p-4 font-bold text-default-blue bg-light-blue text-sm md:text-base">
                ახალგაზრდა სპორტსმენები, გუნდები
              </div>
              <div className="text-center rounded-xl p-4 font-bold text-default-blue bg-light-blue text-sm md:text-base">
                შეზღუდული შესაძლებლობის მქონე ბავშვები
              </div>
              <div className="text-center rounded-xl p-4 font-bold text-default-blue bg-light-blue text-sm md:text-base">
                სხვადასხვა პრობლემის მქონე ადამიანები
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full md:w-1/2 bg-default-blue rounded-xl p-6 md:p-10 text-white flex flex-col items-center gap-4 md:gap-5">
            <h1 className="text-2xl md:text-4xl font-bold text-center">
              დახმარების ტიპები
            </h1>

            {/* Image + Side Arrows */}
            <div className="flex flex-row items-center w-full gap-3 flex-1">
              <button
                onClick={prev}
                className="bg-white text-default-blue rounded-full w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center font-bold text-xl hover:bg-opacity-80 transition"
              >
                ‹
              </button>

              <div className="relative flex-1 min-h-[200px] md:min-h-[250px]">
                <Image
                  src={helpTypes[current].image}
                  alt="Help type"
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={next}
                className="bg-white text-default-blue rounded-full w-9 h-9 md:w-10 md:h-10 shrink-0 flex items-center justify-center font-bold text-xl hover:bg-opacity-80 transition"
              >
                ›
              </button>
            </div>

            {/* Heading + Description */}
            <p className="font-bold text-2xl md:text-3xl text-center">
              {helpTypes[current].heading}
            </p>
            <p className="text-center text-base md:text-lg min-h-[50px] md:min-h-[60px]">
              {helpTypes[current].description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhoWeHelp;
