import React from "react";
import H2 from "components/Typography/Heading2";
import LeadText from "components/Typography/LeadText";

export default function LandingHeaderContent() {
  return (
    <div className="container max-w-8xl relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <H2 color="white">Your story starts with us.</H2>
          <div className="text-gray-200">
            <LeadText color="gray-200">
              This is a simple example of a Landing Page you can build using
              Notus NextJS. It features multiple CSS components based on the
              Tailwind CSS design system.
            </LeadText>
          </div>
        </div>
      </div>
    </div>
  );
}
