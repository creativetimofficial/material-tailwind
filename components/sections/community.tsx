// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

// page components
import Feature from "components/cards/feature";

export default function SectionCommnunity() {
  return (
    <section className="relative z-50 pb-64 md:pt-12">
      <div className="mx-auto w-full text-center text-[#1A237E] md:w-3/4">
        <Typography variant="h2" color="inherit" className="mb-4 font-black">
          Join our comumunity
        </Typography>
        <Typography color="inherit" className="text-lg opacity-60">
          Since Tailwind CSS is an open source project, we want to continue this
          movement too.
        </Typography>
      </div>
      <div className="mt-14 flex flex-wrap items-center">
        <div className="w-full px-4 md:w-1/3">
          <Feature
            title="Github"
            iconClass="fab fa-github"
            className="shadow-2xl shadow-blue-grey-500/[0.12]"
          >
            Contribute to our project and help our community!
          </Feature>
        </div>
        <div className="mt-12 w-full px-4 md:mt-0 md:w-1/3">
          <Feature
            title="Discord"
            iconClass="fab fa-discord"
            className="shadow-2xl shadow-blue-grey-500/[0.12]"
          >
            Join our Discord community and let’s get to know each other.
          </Feature>
        </div>
        <div className="mt-12 w-full px-4 md:mt-0 md:w-1/3">
          <Feature
            title="Twitter"
            iconClass="fab fa-twitter"
            className="shadow-2xl shadow-blue-grey-500/[0.12]"
          >
            Follow us on Twitter and keep up-to-date with our latest news.
          </Feature>
        </div>
      </div>
    </section>
  );
}
