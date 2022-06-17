/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

// @material-tailwind/react components
import { Typography, Chip } from "@material-tailwind/react";

// page components
import CodePreview from "components/cards/code-preview";
import ReactLogo from "components/icons/react";
import HtmlLogo from "components/icons/html";
import AngularLogo from "components/icons/angular";
import VueLogo from "components/icons/vue";

export default function SectionFramework() {
  const [framework, setFramework] = useState("react");
  const [frameworkCode, setFrameworkCode] = useState(null);

  useEffect(() => {
    switch (framework) {
      case "react":
        setFrameworkCode(`
<Button className="flex items-center">
  <i className="
    material-icons mr-1
    text-base leading-none
  ">
    favorite
  </i>
  Button
</Button>
        `);
        break;
      case "html":
        setFrameworkCode(`<button
  class="button button-info"
  data-ripple-light="true"
>
  <i className="
    material-icons mr-1
    text-base leading-none
  ">
    favorite
  </i>
  Button
</button>`);
    }
  }, [framework]);

  return (
    <section className="py-24 lg:-mt-[30rem]">
      <div className="mt-5 flex flex-wrap items-center md:mt-10">
        <div className="relative w-full md:w-5/12 md:px-4">
          <Typography
            variant="h2"
            className="mb-2 !font-sans font-black tracking-normal text-[#1A237E]"
          >
            With your favorite <br />
            <Typography
              as="span"
              variant="h2"
              color="blue"
              className="inline-block !font-sans font-black tracking-normal"
              textGradient
            >
              Framework.
            </Typography>
          </Typography>
          <Typography className="mb-12 text-lg text-[#1A237E]/60 lg:pr-24">
            Material Tailwind components can be used with different popular
            frameworks like React and HTML. Angular and Vue.js versions are
            coming soon!
          </Typography>
          <div className="mt-7 flex flex-wrap text-[#344767]">
            <div
              className="mr-6 w-16 cursor-pointer text-center"
              onClick={() => setFramework("react")}
            >
              <ReactLogo />
              <Typography className="mt-2 font-bold text-[#1A237E]">
                React
              </Typography>
            </div>
            <div
              className="mr-6 w-16 cursor-pointer text-center"
              onClick={() => setFramework("html")}
            >
              <HtmlLogo />
              <Typography className="mt-2 font-bold text-[#1A237E]">
                HTML
              </Typography>
            </div>
            <div className="relative mr-6 w-16 cursor-not-allowed text-center">
              <div className="opacity-50">
                <AngularLogo />
              </div>
              <Chip
                value="soon"
                variant="gradient"
                className="!absolute -top-3 rounded-full from-[#191919] to-[#42424a] py-1 px-2"
              />
              <Typography className="mt-2 font-bold text-[#1A237E]">
                Angular
              </Typography>
            </div>
            <div className="relative mt-3 w-16 cursor-not-allowed text-center md:mt-0">
              <div className="opacity-50">
                <VueLogo />
              </div>
              <Chip
                value="soon"
                variant="gradient"
                className="!absolute -top-3 rounded-full from-[#191919] to-[#42424a] py-1 px-2"
              />
              <Typography className="mt-2 font-bold text-[#1A237E]">
                Vue.js
              </Typography>
            </div>
          </div>
        </div>
        <div className="relative w-full px-4 pt-24 md:w-6/12 md:pt-0">
          <CodePreview code={frameworkCode} />
          <img
            className="absolute top-48 w-full md:top-24 md:-right-20 lg:top-10 lg:-right-40"
            src="/img/blue.png"
            alt="tailwind_blob_blue"
          />
        </div>
      </div>
    </section>
  );
}
