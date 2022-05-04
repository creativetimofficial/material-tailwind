import FeatureCard from "../../pagesComponents/Cards/FeatureCard";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function SectionCommnunity() {
  return (
    <section className="relative z-50 md:pt-12 pb-64">
      <div className="w-full md:w-3/4 mx-auto text-[#1A237E] text-center">
        <Typography
          variant="h2"
          color="inherit"
          className="!font-sans font-black mb-4"
        >
          Join our comumunity
        </Typography>
        <Typography color="inherit" className="text-lg opacity-60">
          Since Tailwind CSS is an open source project, we want to continue this
          movement too.
        </Typography>
      </div>
      <div className="items-center flex flex-wrap mt-14">
        <div className="w-full md:w-1/3 px-4">
          <FeatureCard
            title="Github"
            icon=""
            iconClass="fab fa-github"
            className="shadow-2xl shadow-blue-grey-500/[0.12]"
          >
            Material Tailwind comes with a huge number of Fully Coded CSS
            components.
          </FeatureCard>
        </div>
        <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <FeatureCard
            title="Discord"
            icon=""
            iconClass="fab fa-discord"
            className="shadow-2xl shadow-blue-grey-500/[0.12]"
          >
            Material Tailwind comes with a huge number of Fully Coded CSS
            components.
          </FeatureCard>
        </div>
        <div className="w-full md:w-1/3 px-4 mt-8 md:mt-0">
          <FeatureCard
            title="Twitter"
            icon=""
            iconClass="fab fa-twitter"
            className="shadow-2xl shadow-blue-grey-500/[0.12]"
          >
            Material Tailwind comes with a huge number of Fully Coded CSS
            components.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
