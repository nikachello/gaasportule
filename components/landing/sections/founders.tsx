import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Header from "../header";
import Image from "next/image";

const Founders = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl text-center md:text-left">
            <Header
              title="დამფუძნებლები"
              description="პროექტი დაფუძნებულია ვიღაცა ვიღაცას და მაგარი კაცის მიერ, ისინი ცდილობენ სპორტი საქართველო ხელმისაწვდომი გახადონ"
            />
          </div>

          <div className="relative h-[220px] w-[220px] md:h-[260px] md:w-[260px]">
            <Image
              src="/images/landing/founders/ceo.webp"
              alt="CEO"
              fill
              className="rounded-4xl bg-default-blue object-cover"
              sizes="(max-width: 768px) 220px, 260px"
              priority
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Founders;
