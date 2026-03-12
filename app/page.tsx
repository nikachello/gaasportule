import Faq from "@/components/landing/sections/faq";
import Founders from "@/components/landing/sections/founders";
import FriendsOfProject from "@/components/landing/sections/friends-of-project";
import HowTheAppWorks from "@/components/landing/sections/how-the-app-works";
import HowToJoin from "@/components/landing/sections/how-to-join";
import InformationPartners from "@/components/landing/sections/information-partners";
import MainHeading from "@/components/landing/sections/main-heading";
import Perks from "@/components/landing/sections/perks";
import WhoWeHelp from "@/components/landing/sections/who-we-help";

export default function HeroSection() {
  return (
    <>
      <MainHeading />
      <Perks />
      <section id="who-we-help">
        <WhoWeHelp />
      </section>
      <section id="how-the-app-works">
        <HowTheAppWorks />
      </section>
      <section id="how-to-join">
        <HowToJoin />
      </section>
      <section id="friend-of-project">
        <FriendsOfProject />
      </section>
      <section id="information-partners">
        <InformationPartners />
      </section>
      <section id="founders">
        <Founders />
      </section>
      <section id="faq">
        <Faq />
      </section>
    </>
  );
}
