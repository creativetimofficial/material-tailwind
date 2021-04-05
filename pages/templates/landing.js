import React from "react";
import LandingNavbar from "./Landing/LandingNavbar";
import LandingFooter from "./Landing/LandingFooter";
import LandingPage from "./Landing/LandingPage";
import LandingHeader from "./Landing/LandingHeader";
import LandingHeaderImage from "./Landing/LandingHeaderImage";
import LandingHeaderContent from "./Landing/LandingHeaderContent";
import LandingWorkingSection from "./Landing/LandingWorkingSection";
import LandingWorkingSectionHeader from "./Landing/LandingWorkingSectionHeader";
import LandingWorkingSectionBody from "./Landing/LandingWorkingSectionBody";
import LandingTeamSection from "./Landing/LandingTeamSection";
import LandingTeamSectionHeader from "./Landing/LandingTeamSectionHeader";
import LandingTeamCard from "./Landing/LandingTeamCard";
import LandingContactSection from "./Landing/LandingContactSection";
import LandingContactSectionHeader from "./Landing/LandingContactSectionHeader";
import LandingContactCard from "./Landing/LandingContactCard";
import LandingForm from "./Landing/LandingForm";

export default function Landing() {
  return (
    <>
      <LandingNavbar />
      <LandingPage>
        <LandingHeader>
          <LandingHeaderImage />
          <LandingHeaderContent />
        </LandingHeader>

        <LandingWorkingSection>
          <LandingWorkingSectionHeader />
          <LandingWorkingSectionBody />
        </LandingWorkingSection>

        <LandingTeamSection>
          <LandingTeamSectionHeader />
          <div className="flex flex-wrap">
            <LandingTeamCard
              img={require("assets/img/team-1-800x800.jpg")}
              name="Ryan Tompson"
              position="Web Developer"
            />
            <LandingTeamCard
              img={require("assets/img/team-2-800x800.jpg")}
              name="Romina Hadid"
              position="Marketing Specialist"
            />
            <LandingTeamCard
              img={require("assets/img/team-3-800x800.jpg")}
              name="Alexa Smith"
              position="UI/UX Designer"
            />
            <LandingTeamCard
              img={require("assets/img/team-4-470x470.png")}
              name="Jenna Kardi"
              position="Founder and CEO"
            />
          </div>
        </LandingTeamSection>

        <LandingContactSection>
          <LandingContactSectionHeader />
          <div className="flex flex-wrap mt-12 justify-center">
            <LandingContactCard icon="stars" title="Excelent Services">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </LandingContactCard>
            <LandingContactCard icon="insert_chart" title="Grow Your Market">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </LandingContactCard>
            <LandingContactCard icon="launch" title="Launch Time">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </LandingContactCard>
          </div>
          <LandingForm />
        </LandingContactSection>
      </LandingPage>
      <LandingFooter />
    </>
  );
}
