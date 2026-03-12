"use client";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import { Plus } from "lucide-react";
import React, { useState } from "react";

interface faqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: faqItem[] = [
  {
    id: 0,
    question: "სად მიდის ჩემი ფული?",
    answer:
      "როცა კონკრეტული ქველმოქმედება დასრულდება, თანხის 100% გადაირიცხება ბენეფიციართან. ჩვენი გუნდის წევრი უზრუნველყოფს რომ თითოეული ლარი, რომელიც თქვენ ჩარიცხეთ, მიზნობრივად დაიხარჯოს",
  },
  {
    id: 1,
    question: "რამე საკომისიო გაქვთ?",
    answer:
      "დიახ საკომისიო გვაქვს, ბანკის და საიტის მომსახურების საკომისიო, ჯამში 2%",
  },
  {
    id: 2,
    question: "რამდენის ჩარიცხვა შემიძლაი მინიმუმ?",
    answer: "მინიმუმი არის 1 ლარი",
  },
  {
    id: 3,
    question: "შედეგებს როდის ვნახავ?",
    answer:
      "ქველმოქმედების თითოეული სიახლე გამოგეგზავნებათ ელ-ფოსტაზე, საიდანაც შეგიძლიათ მას თვალი ადევნოთ",
  },
];

const Faq = () => {
  const [active, setActive] = useState<number | undefined>();

  const handleQuestionClick = (item: faqItem) => {
    if (active == item.id) return setActive(undefined);
    setActive(item.id);
  };

  return (
    <Section bg="gray">
      <Container>
        <div className="divide-y divide-default-blue border-t border-b border-default-blue">
          {faqItems.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className="group w-full text-default-blue flex flex-row justify-between items-center cursor-pointer py-3 md:py-5"
                  onClick={() => handleQuestionClick(item)}
                >
                  <p className="font-bold text-lg md:text-xl lg:text-2xl">
                    {item.question}
                  </p>
                  <Plus
                    className={`flex-shrink-0 ml-4 rounded-full transition-all duration-300 ease-in-out
                      group-hover:bg-default-blue group-hover:text-white
                      ${
                        item.id === active
                          ? "rotate-45 bg-default-blue text-white"
                          : "rotate-0"
                      }`}
                    height={24}
                    width={24}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    item.id === active
                      ? "max-h-40 opacity-100 pb-3 md:pb-5"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-base md:text-lg lg:text-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Faq;
