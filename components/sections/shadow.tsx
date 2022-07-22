/* eslint-disable @next/next/no-img-element */

// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

// page components
import CodePreview from "components/cards/code-preview";

export default function SectionShadow() {
  return (
    <section className="py-12">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 md:w-5/12">
          <Typography
            variant="h2"
            className="mb-2 font-black tracking-normal text-[#1A237E]"
          >
            Realistic <br />
            <Typography
              as="span"
              variant="h2"
              color="blue"
              className="inline-block font-black tracking-normal"
              textGradient
            >
              Shadows
            </Typography>{" "}
            included.
          </Typography>
          <Typography className="mb-5 text-lg text-[#1A237E]/60 md:pr-10">
            Create a cohesive and modern-looking design for your website with
            our collection of realistic shadows. They will help your elements to
            pop-up.
          </Typography>
        </div>
        <div className="relative w-full px-4 pt-10 md:w-6/12 md:pt-0">
          <CodePreview
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
            className="absolute -bottom-16 w-full md:bottom-auto md:top-24 md:-right-5 lg:top-10 lg:-right-40"
            src="/img/blue.png"
            alt="tailwind_blob_blue"
          />
          <img
            className="absolute top-36 right-0 z-30 w-1/2 rounded-lg shadow-2xl shadow-blue-grey-500/20 md:top-12 lg:-right-24"
            src="/img/shadows.png"
            alt="tailwind_shadows"
          />
        </div>
      </div>
    </section>
  );
}
