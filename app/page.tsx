import HowTheAppWorks from "@/components/landing/sections/how-the-app-works";
import HowToJoin from "@/components/landing/sections/how-to-join";
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
    </>
  );
}
