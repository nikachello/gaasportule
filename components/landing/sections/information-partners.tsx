import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import ScrollableCardStack, {
  CardItem,
} from "@/components/smoothui/scrollable-card-stack";

const informationPartners: CardItem[] = [
  {
    id: "1",
    name: "Rustavi 2",
    image: "/images/landing/media-partners/rustavi-2.png",
  },

  {
    id: "0",
    name: "Formula TV",
    image: "/images/landing/media-partners/formula.png",
  },
];

const InformationPartners = () => {
  return (
    <div>
      <Section bg="primary">
        <Container>
          <div className="w-full text-center">
            <h1 className="font-bold text-4xl mb-10">
              საინფორმაციო პარტნიორები
            </h1>
            <ScrollableCardStack items={informationPartners} />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default InformationPartners;
