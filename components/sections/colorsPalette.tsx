/* eslint-disable @next/next/no-img-element */

// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

// page components
import CodePreview from "components/cards/codePreview";

export default function SectionColorsPalette() {
  return (
    <section className="py-24">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 md:w-6/12">
          <CodePreview
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
            className="absolute -bottom-28 w-full md:top-36 md:-right-24 md:bottom-auto lg:top-24 lg:-left-52"
            src="/img/purple.png"
            alt="tailwind_blob_purple"
          />
          <img
            className="absolute top-10 right-6 z-30 w-1/2 md:-top-10 md:-right-10"
            src="/img/color-palette.png"
            alt="tailwind_colors_pallet"
          />
        </div>
        <div className="relative order-first w-full px-4 md:order-last md:w-6/12">
          <div className="md:ml-7 lg:ml-24 lg:w-2/3">
            <Typography
              variant="h2"
              className="mb-2 !font-sans font-black tracking-normal text-[#1A237E]"
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
            <Typography className="text-lg text-[#1A237E]/60 lg:pr-2">
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
