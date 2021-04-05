import React from "react";
import LandingStatusCard from "./LandingStatusCard";

export default function LandingWorkingSectionHeader() {
  return (
    <div className="flex flex-wrap relative z-50">
      <LandingStatusCard color="red" icon="stars" title="Awarded Agency">
        Divide details about your product or agency work into parts. A paragraph
        describing a feature will be enough.
      </LandingStatusCard>
      <LandingStatusCard
        color="light-blue"
        icon="autorenew"
        title="Free Revisions"
      >
        Keep you user engaged by providing meaningful information. Remember that
        by this time, the user is curious.
      </LandingStatusCard>
      <LandingStatusCard
        color="teal"
        icon="fingerprint"
        title="Verified Company"
      >
        Write a few lines about each one. A paragraph describing a feature will
        be enough. Keep you user engaged!
      </LandingStatusCard>
    </div>
  );
}
