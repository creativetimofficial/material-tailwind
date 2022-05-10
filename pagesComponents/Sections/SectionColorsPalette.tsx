/* eslint-disable @next/next/no-img-element */
import CodePreviewCard from "../../pagesComponents/Cards/CodePreviewCard";
import { Typography } from "../../packages/material-tailwind-react/src";

export default function SectionColorsPalette() {
  return (
    <section className="py-24">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-6/12 px-4 relative">
          <CodePreviewCard
            code={`
<span class="w-8 h-8 bg-blue-50">
<span class="w-8 h-8 bg-blue-100">
<span class="w-8 h-8 bg-blue-200">
<span class="w-8 h-8 bg-blue-300">
<span class="w-8 h-8 bg-blue-400">
<span class="w-8 h-8 bg-blue-500">
<span class="w-8 h-8 bg-blue-600">
<span class="w-8 h-8 bg-blue-700">
<span class="w-8 h-8 bg-blue-800">
<span class="w-8 h-8 bg-blue-900">`}
          />
          <img
            className="absolute w-full md:top-36 lg:top-24 lg:-left-52 md:-right-24 -bottom-28 md:bottom-auto"
            src="/img/purple.png"
            alt="blob_purple"
          />
          <img
            className="absolute w-1/2 top-10 md:-top-10 right-6 md:-right-10 z-30"
            src="/img/color-palette.png"
            alt="colors_example"
          />
        </div>
        <div className="w-full md:w-6/12 px-4 relative order-first md:order-last">
          <div className="lg:w-2/3 md:ml-7 lg:ml-24">
            <Typography
              variant="h2"
              className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
            >
              Awesome <br />
              <Typography
                as="span"
                variant="h2"
                color="blue"
                className="inline-block !font-sans font-black tracking-normal"
                textGradient
              >
                Color
              </Typography>{" "}
              palette.
            </Typography>
            <Typography className="text-lg lg:pr-2 text-[#1A237E]/60">
              Create a color theme that perfectly matches your style and brand,
              inspired by{" "}
              <a
                href="https://material.io/design/color/the-color-system.html#tools-for-picking-colors"
                target="_blank"
                rel="noreferrer"
              >
                Material Design
              </a>
              . Get color inspiration for your designs with Material Tailwind!
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}
