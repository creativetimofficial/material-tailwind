/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import CodePreviewCard from "../../pagesComponents/Cards/CodePreviewCard";
import ReactLogo from "pagesComponents/Icons/React";
import HtmlLogo from "pagesComponents/Icons/Html";
import AngularLogo from "pagesComponents/Icons/Angular";
import VueLogo from "pagesComponents/Icons/Vue";
import { Typography, Chip } from "../../packages/material-tailwind-react/src";

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
      <div className="items-center flex flex-wrap mt-5 md:mt-10">
        <div className="w-full md:w-5/12 md:px-4 relative">
          <Typography
            variant="h2"
            className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
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
          <Typography className="text-lg mb-12 lg:pr-24 text-[#1A237E]/60">
            Material Tailwind components can be used with different popular frameworks like React and HTML. Angular and Vue.js versions are coming soon!
          </Typography>
          <div className="flex flex-wrap mt-7 text-[#344767]">
            <div
              className="w-16 mr-6 text-center cursor-pointer"
              onClick={() => setFramework("react")}
            >
              <ReactLogo />
              <Typography className="text-[#1A237E] font-bold mt-2">
                React
              </Typography>
            </div>
            <div
              className="w-16 mr-6 text-center cursor-pointer"
              onClick={() => setFramework("html")}
            >
              <HtmlLogo />
              <Typography className="text-[#1A237E] font-bold mt-2">
                HTML
              </Typography>
            </div>
            <div className="w-16 mr-6 text-center cursor-not-allowed relative">
              <div className="opacity-50">
                <AngularLogo />
              </div>
              <Chip
                value="soon"
                variant="gradient"
                className="py-1 px-2 !absolute -top-3 from-[#191919] to-[#42424a] rounded-full"
              />
              <Typography className="text-[#1A237E] font-bold mt-2">
                Angular
              </Typography>
            </div>
            <div className="w-16 text-center cursor-not-allowed relative mt-3 md:mt-0">
              <div className="opacity-50">
                <VueLogo />
              </div>
              <Chip
                value="soon"
                variant="gradient"
                className="py-1 px-2 !absolute -top-3 from-[#191919] to-[#42424a] rounded-full"
              />
              <Typography className="text-[#1A237E] font-bold mt-2">
                Vue.js
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4 pt-24 md:pt-0 relative">
          <CodePreviewCard code={frameworkCode} />
          <img
            className="absolute w-full top-48 md:top-24 lg:top-10 md:-right-20 lg:-right-40"
            src="/img/blue.png"
            alt="blob_blue"
          />
        </div>
      </div>
    </section>
  );
}
