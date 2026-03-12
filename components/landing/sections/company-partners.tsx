import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import LogoCarousel from "@/components/ui/logo-carousel";
import React from "react";

const CompanyPartners = () => {
  return (
    <Section>
      <Container>
        <div className="w-full">
          <h1 className="text-center mb-10 text-3xl text-default-blue font-bold">
            პარტნიორი კომპანიები
          </h1>
          <LogoCarousel columnCount={6} />
        </div>
      </Container>
    </Section>
  );
};

export default CompanyPartners;
