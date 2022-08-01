/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

// next.js components
import Link from "next/link";

// react-jsx-parser components
import JsxParser from "react-jsx-parser";

// @material-tailwind/react components
import { Typography, Button } from "@material-tailwind/react";

// page components
import CodePreview from "components/cards/code-preview";

export default function SectionButton() {
  const [buttonType, setButtonType] = useState("icon");
  const [buttonCode, setButtonCode] = useState(null);

  useEffect(() => {
    switch (buttonType) {
      case "default":
        setButtonCode(`
        
        
        
<Button>Button</Button>`);
        break;
      case "gradient":
        setButtonCode(`
        
        
<Button variant="gradient">
  Button
</Button>`);
        break;
      case "link":
        setButtonCode(`
        

<Button variant="text">
  Button
</Button>`);
        break;
      case "icon":
        setButtonCode(`<Button className="flex items-center">
  <i className="
    material-icons mr-1
    text-base leading-none
  ">
    favorite
  </i>
  Button
</Button>`);
        break;
    }
  }, [buttonType]);

  const buttonOptionClasses = (type) => `
    cursor-pointer select-none transition-all duration-300 ${
      buttonType === type ? "opacity-100" : "opacity-60"
    }
  `;

  return (
    <section className="py-24">
      <div className="flex flex-wrap items-center">
        <div className="w-full px-4 lg:w-5/12">
          <Typography
            variant="h2"
            className="mb-2 font-black tracking-normal text-[#1A237E]"
          >
            Change your <br />
            <Typography
              as="span"
              variant="h2"
              color="blue"
              className="inline-block font-black tracking-normal"
              textGradient
            >
              Button&apos;s
            </Typography>{" "}
            design.
          </Typography>
          <Typography className="mb-5 text-lg text-[#1A237E]/60 md:pr-10">
            Material Tailwind provides a simple way to customize your button;
            you can change the colors, fonts, styling, and everything you need.
          </Typography>
          <Link href="/docs/react/button">
            <a>
              <Button>Get Started</Button>
            </a>
          </Link>
          <div className="mt-7 flex flex-wrap text-[#1A237E]">
            <div className="mr-6 w-auto text-center md:mr-8">
              <span
                className={buttonOptionClasses("default")}
                onClick={() => setButtonType("default")}
              >
                <i className="material-icons text-xl">radio_button_checked</i>
                <Typography>Default</Typography>
              </span>
            </div>
            <div className="mr-6 w-auto text-center md:mr-8">
              <span
                className={buttonOptionClasses("gradient")}
                onClick={() => setButtonType("gradient")}
              >
                <i className="material-icons text-xl">gradient</i>
                <Typography>Gradient</Typography>
              </span>
            </div>
            <div className="mr-6 w-auto text-center md:mr-8">
              <span
                className={buttonOptionClasses("link")}
                onClick={() => setButtonType("link")}
              >
                <i className="material-icons text-xl">format_color_text</i>
                <Typography>Link</Typography>
              </span>
            </div>
            <div className="mr-6 w-auto text-center md:mr-8">
              <span
                className={buttonOptionClasses("icon")}
                onClick={() => setButtonType("icon")}
              >
                <i className="material-icons text-xl">favorite</i>
                <Typography>Icon</Typography>
              </span>
            </div>
          </div>
        </div>
        <div className="relative mt-10 w-full px-4 md:w-8/12 lg:mt-0 lg:w-6/12">
          <CodePreview
            code={`import { Button } from "@material-tailwind/react";
                  
${buttonCode}
`}
          />
          <img
            className="absolute -bottom-16 w-full md:bottom-auto md:top-24 md:-right-40"
            src="/img/blue.png"
            alt="tailwind_blob_blue"
          />
          <div className="bg-dark absolute top-44 right-11 z-30 flex h-40 w-[13rem] rounded-lg bg-white/80 shadow-2xl shadow-blue-gray-500/20 backdrop-blur-2xl backdrop-saturate-200 md:top-14 md:-right-24 md:h-56 md:w-80 lg:top-20">
            <div className="m-auto">
              <JsxParser components={{ Button }} jsx={buttonCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
