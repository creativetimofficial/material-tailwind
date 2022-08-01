// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

// page components
import Feature from "components/cards/feature";

export default function SectionFeatures() {
  const features = [
    {
      icon: "dashboard",
      title: "Tailwind CSS Components",
      desc: "Material Tailwind comes with a huge number of Fully Coded Tailwind CSS components.",
    },
    {
      icon: "terminal",
      title: "JavaScript Components",
      desc: "Material Tailwind only features React and HTML components, but in the near future it will future more.",
    },
    {
      icon: "description",
      title: "Documentation",
      desc: "This extension comes a lot of fully coded examples that help you get started faster.",
    },
    {
      icon: "view_carousel",
      title: "Templates (soon)",
      desc: "Material Tailwind will come with fully coded sample pages so you could start working instantly.",
    },
  ];

  return (
    <section className="py-10 lg:py-20">
      <div className="mx-auto mb-24 w-full text-center md:w-3/4 lg:w-1/2">
        <Typography
          variant="h2"
          className="mb-2 font-semibold tracking-normal text-[#1A237E]"
        >
          Tailwind CSS-Based Framework
        </Typography>
        <Typography className="mb-2 text-lg font-light text-[#1A237E]/60">
          Material Tailwind features multiple React and HTML components, all
          written with Tailwind CSS classes and Material Design guidelines.
        </Typography>
      </div>
      <div className="flex flex-row flex-wrap content-center">
        {features.map(({ icon, title, desc }, key) => (
          <div
            key={key}
            className="mb-12 w-full max-w-full px-3 sm:w-1/2 sm:flex-none lg:mb-0 xl:mb-0 xl:w-1/4"
          >
            <Feature icon={icon} title={title}>
              {desc}
            </Feature>
          </div>
        ))}
      </div>
    </section>
  );
}
