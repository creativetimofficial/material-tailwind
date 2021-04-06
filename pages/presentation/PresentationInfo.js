import React from "react";
import PresentationCard from "./PresentationCard";
import PresentationInfoCard from "./PresentationInfoCard";

export default function PresentationInfo() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="lg:w-4/12 px-12 md:px-4 mr-auto ml-auto relative z-30">
          <PresentationCard />
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <PresentationInfoCard
                icon="fas fa-sitemap"
                title="CSS Components"
              >
                Material Tailwind comes with a huge number of Fully Coded CSS
                components.
              </PresentationInfoCard>
              <PresentationInfoCard
                icon="fas fa-drafting-compass"
                title="JavaScript Components"
              >
                Material Tailwind only features React components, but in the
                near future it will future more.
              </PresentationInfoCard>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <PresentationInfoCard icon="fas fa-newspaper" title="Templates">
                Material Tailwind comes with 3 fully coded sample pages. You can
                start working instantly.
              </PresentationInfoCard>
              <PresentationInfoCard
                icon="fas fa-file-alt"
                title="Documentation"
              >
                Built by developers for developers. You will love how easy is to
                work with Material Tailwind.
              </PresentationInfoCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
