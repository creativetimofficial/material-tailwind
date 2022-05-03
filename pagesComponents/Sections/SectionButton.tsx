/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import JsxParser from "react-jsx-parser";
import CodePreviewCard from "pagesComponents/Cards/CodePreviewCard";
import { Typography, Button } from "../../packages/material-tailwind-react/src";

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
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-5/12 px-4">
          <Typography
            variant="h2"
            className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
          >
            Change your <br />
            <Typography
              as="span"
              variant="h2"
              color="blue"
              className="inline-block !font-sans font-black tracking-normal"
              textGradient
            >
              Button&apos;s
            </Typography>{" "}
            design.
          </Typography>
          <Typography className="text-lg mb-5 md:pr-10 text-[#1A237E]/60">
            Putting together a page has never been easier than matching together
            pre-made components. You can easily customize and built your pages.
          </Typography>
          <Button>Get Started</Button>
          <div className="flex flex-wrap mt-7 text-[#1A237E]">
            <div className="w-auto mr-6 md:mr-8 text-center">
              <a
                className={buttonOptionClasses("default")}
                onClick={() => setButtonType("default")}
              >
                <i className="material-icons text-xl">radio_button_checked</i>
                <Typography>Default</Typography>
              </a>
            </div>
            <div className="w-auto mr-6 md:mr-8 text-center">
              <a
                className={buttonOptionClasses("gradient")}
                onClick={() => setButtonType("gradient")}
              >
                <i className="material-icons text-xl">gradient</i>
                <Typography>Gradient</Typography>
              </a>
            </div>
            <div className="w-auto mr-6 md:mr-8 text-center">
              <a
                className={buttonOptionClasses("link")}
                onClick={() => setButtonType("link")}
              >
                <i className="material-icons text-xl">format_color_text</i>
                <Typography>Link</Typography>
              </a>
            </div>
            <div className="w-auto mr-6 md:mr-8 text-center">
              <a
                className={buttonOptionClasses("icon")}
                onClick={() => setButtonType("icon")}
              >
                <i className="material-icons text-xl">favorite</i>
                <Typography>Icon</Typography>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 md:w-8/12 px-4 relative mt-10 lg:mt-0">
          <CodePreviewCard
            code={`import { Button } from "@material-tailwind/react";
                  
${buttonCode}
`}
          />
          <img
            className="absolute w-full -bottom-16 md:bottom-auto md:top-24 md:-right-40"
            src="/img/blue.png"
            alt="blob_blue"
          />
          <div className="w-[13rem] md:w-80 h-40 md:h-56 absolute top-44 md:top-14 lg:top-24 right-11 md:-right-24 rounded-lg bg-dark bg-white/80 backdrop-saturate-200 backdrop-blur-2xl shadow-2xl shadow-blue-grey-500/20 flex z-30">
            <div className="m-auto">
              <JsxParser components={{ Button }} jsx={buttonCode} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
