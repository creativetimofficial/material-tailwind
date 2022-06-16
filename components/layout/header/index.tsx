import { useState, useEffect } from "react";

// next.js components
import Image from "next/image";
import Link from "next/link";

// react-copy-to-clipboard components
import { CopyToClipboard } from "react-copy-to-clipboard";

// @material-tailwind/react components
import {
  Tabs,
  TabsHeader,
  Tab,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";

export default function Header() {
  const [version, setVersion] = useState("npm i @material-tailwind/react");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div className="h-screen min-h-screen bg-[url('/img/bg-header.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-50 h-fit py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            <div className="mt-48 w-full px-4 md:w-8/12 lg:mt-4 lg:w-5/12">
              <div className="w-full max-w-full sm:my-auto md:w-5/6 md:flex-none lg:w-1/2">
                <Tabs value="react" className="mb-6">
                  <TabsHeader
                    className="h-10 w-auto rounded-full border border-white/80 bg-white/80 shadow-2xl shadow-blue-grey-500/40 backdrop-blur-2xl backdrop-saturate-200"
                    indicatorProps={{
                      className: "rounded-full",
                    }}
                  >
                    <Tab
                      value="react"
                      className="p-0 font-normal text-[#1A237E]"
                      onClick={() =>
                        setVersion("npm i @material-tailwind/react")
                      }
                    >
                      <i className="fab fa-react" />
                      &nbsp;React
                    </Tab>
                    <Tab
                      value="html"
                      className="p-0 font-normal text-[#1A237E]"
                      onClick={() =>
                        setVersion("npm i @material-tailwind/html")
                      }
                    >
                      <i className="fab fa-html5" />
                      &nbsp;HTML
                    </Tab>
                  </TabsHeader>
                </Tabs>
              </div>
              <Typography
                variant="h1"
                className="mb-2 !font-sans font-black tracking-normal text-[#1A237E]"
              >
                Material Tailwind
              </Typography>
              <Typography className="mb-6 text-lg !font-light text-[#1A237E] lg:pr-12">
                Material Tailwind is an easy to use components library for
                Tailwind CSS and Material Design.
              </Typography>
              <div className="flex flex-col-reverse gap-2 lg:flex-row">
                <Link
                  href={
                    version === "npm i @material-tailwind/react"
                      ? "/docs/react/quick-start"
                      : "/docs/html/quick-start"
                  }
                >
                  <a>
                    <Button variant="gradient" className="h-full w-full">
                      Get Started
                    </Button>
                  </a>
                </Link>
                <div className="flex rounded-lg border border-white/80 bg-white/80 py-2.5 px-5 text-[#1A237E] shadow-2xl shadow-blue-grey-500/20 backdrop-blur-2xl backdrop-saturate-200">
                  <CopyToClipboard
                    text={version}
                    onCopy={() => setCopied(true)}
                  >
                    <p className="mb-0 flex w-full items-center justify-between font-normal">
                      {version}
                      <Tooltip
                        content={copied ? "Copied" : "Copy"}
                        interactive={false}
                      >
                        <i
                          className={`${
                            copied ? "fas" : "far"
                          } fa-copy ml-4 cursor-pointer text-sm`}
                        />
                      </Tooltip>
                    </p>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <div className="hidden w-full max-w-full px-4 pt-24 md:w-7/12 md:pt-0 lg:block">
              <Image
                src="/img/components-header.png"
                alt="components"
                width={1000}
                height={700}
                quality={100}
                className="aspect-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
