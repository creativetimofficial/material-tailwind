import React from "react";
import H3 from "components/Typography/Heading3";
import LeadText from "components/Typography/LeadText";

export default function LandingTeamSectionHeader() {
  return (
    <div className="flex flex-wrap justify-center text-center mb-24">
      <div className="w-full lg:w-6/12 px-4">
        <H3 color="gray">Here are our heroes</H3>
        <LeadText color="blueGray">
          According to the National Oceanic and Atmospheric Administration, Ted,
          Scambos, NSIDClead scentist, puts the potentially record maximum.
        </LeadText>
      </div>
    </div>
  );
}
