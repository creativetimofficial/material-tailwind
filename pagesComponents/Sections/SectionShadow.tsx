/* eslint-disable @next/next/no-img-element */
import CodePreviewCard from "../../pagesComponents/Cards/CodePreviewCard";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function SectionShadow() {
  return (
    <section className="py-12">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-5/12 px-4 relative">
          <Typography
            variant="h2"
            className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
          >
            Realistic <br />
            <Typography
              as="span"
              variant="h2"
              color="blue"
              className="inline-block !font-sans font-black tracking-normal"
              textGradient
            >
              Shadows
            </Typography>{" "}
            included.
          </Typography>
          <Typography className="text-lg mb-5 md:pr-10 text-[#1A237E]/60">
            Material Tailwind provides a simple way to customize your button,
            you can change the colors, fonts, breakpoints and everything you
            need.
          </Typography>
        </div>
        <div className="w-full md:w-6/12 px-4 pt-10 md:pt-0 relative">
          <CodePreviewCard
            code={`

<span class="w-32 h-34 shadow">
<span class="w-32 h-34 shadow-inner">
<span class="w-32 h-34 shadow-sm">
<span class="w-32 h-34 shadow-md">
<span class="w-32 h-34 shadow-lg">
<span class="w-32 h-34 shadow-xl">
<span class="w-32 h-34 shadow-2xl">
<span class="w-32 h-34 shadow-none">`}
          />
          <img
            className="absolute w-full -bottom-16 md:bottom-auto md:top-24 lg:top-10 md:-right-5 lg:-right-40"
            src="/img/blue.png"
            alt="blob_blue"
          />
          <img
            className="absolute shadow-2xl shadow-blue-grey-500/20 rounded-lg w-1/2 top-36 md:top-12 right-0 lg:-right-24 z-30"
            src="/img/shadows.png"
            alt="shadows_example"
          />
        </div>
      </div>
    </section>
  );
}
