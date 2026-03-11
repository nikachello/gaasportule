import Perks from "./components/landing/sections/perks";
import MainHeading from "./components/landing/sections/main-heading";
import WhoWeHelp from "./components/landing/sections/who-we-help";

export default function HeroSection() {
  return (
    <>
      <MainHeading />
      <Perks />
      <section id="who-we-help">
        <WhoWeHelp />
      </section>
    </>
  );
}
