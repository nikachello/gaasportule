import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Image from "next/image";

const friends = [
  {
    name: "ლაშა ტალახაძე",
    description: "3 გზის ოლიმპიური ჩემპიონი",
    href: "/images/landing/friends/lasha-talakhadze.png",
  },
  {
    name: "ხვიჩა კვარაცხელია",
    description: "ჩემპიონთა ლიგის მფლობელი, პსჟ ფეხბურთელი",
    href: "/images/landing/friends/khvicha-kvaratskhelia.png",
  },
  {
    name: "ლაშა ტალახაძე",
    description: "3 გზის ოლიმპიური ჩემპიონი",
    href: "/images/landing/friends/lasha-talakhadze.png",
  },
  {
    name: "ხვიჩა კვარაცხელია",
    description: "ჩემპიონთა ლიგის მფლობელი, პსჟ ფეხბურთელი",
    href: "/images/landing/friends/khvicha-kvaratskhelia.png",
  },
  {
    name: "ლაშა ტალახაძე",
    description: "3 გზის ოლიმპიური ჩემპიონი",
    href: "/images/landing/friends/lasha-talakhadze.png",
  },
  {
    name: "ხვიჩა კვარაცხელია",
    description: "ჩემპიონთა ლიგის მფლობელი, პსჟ ფეხბურთელი",
    href: "/images/landing/friends/khvicha-kvaratskhelia.png",
  },
];

const FriendsOfProject = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {friends.map((friend, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="relative w-full aspect-square max-w-[350px]">
                <Image
                  src={friend.href}
                  alt={friend.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <p className="font-bold text-xl md:text-2xl text-default-blue text-center">
                {friend.name}
              </p>
              <p className="text-base md:text-lg text-center">
                {friend.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FriendsOfProject;
