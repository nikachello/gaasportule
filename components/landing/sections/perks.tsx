import Image from "next/image";
import React from "react";
import Section from "../../layout/section";
import Container from "../../layout/container";

const perks = [
  {
    icon: "/images/landing/perks/reliability.svg",
    title: "სანდოობა",
    description: "თქვენი თანხები სანდოდ ინახება, დაცული გადახდის მეთოდები.",
  },
  {
    icon: "/images/landing/perks/flexibility.svg",
    title: "მოხერხებულობა",
    description:
      "მარტივად აარჩიეთ და გაფილტრეთ ადამიანები. ყველა დოკუმენტი, გადახდა და შედეგები ერთ სივრცეში.",
  },
  {
    icon: "/images/landing/perks/transparency.svg",
    title: "გამჭირვალეობა",
    description:
      "რეპორტები სადაც ჩანს თუ რაში დაიხარჯა თანხა, ყოველთვიურად, თქვენს ელ-ფოსტაზე.",
  },
  {
    icon: "/images/landing/perks/technology.svg",
    title: "ტექნოლოგია",
    description:
      "თანამედროვე ციფრული გადაწყვეტა, დაეხმარეთ ადამიანებს რამდენიმე წუთში.",
  },
];

const Perks = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {perks.map((perk, i) => (
            <div
              key={i}
              className="flex flex-col items-center space-y-5 text-center"
            >
              <Image
                src={perk.icon}
                alt={perk.title}
                height={200}
                width={200}
              />
              <div className="max-w-[250px]">
                <h3 className="text-2xl font-bold text-default-blue mb-5">
                  {perk.title}
                </h3>
                <p className="text-lg">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Perks;
