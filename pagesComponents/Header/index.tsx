import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  Tabs,
  TabsHeader,
  Tab,
  Typography,
  Button,
  Tooltip
} from "../../packages/material-tailwind-react/src";

export default function Header() {
  const [version, setVersion] = useState("npm i @material-tailwind/react");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  }, [copied]);

  return (
    <div className="bg-no-repeat h-screen min-h-screen bg-[url('/img/bg-header.jpg')] bg-cover bg-center">
      <div className="py-20 lg:py-32 h-fit relative z-50">
        <div className="container mx-auto px-4">
          <div className="items-center flex justify-between flex-wrap">
            <div className="w-full md:w-8/12 lg:w-5/12 px-4 mt-48 lg:mt-4">
              <div className="w-full md:w-5/6 max-w-full sm:my-auto lg:w-1/2 md:flex-none">
                <Tabs value="react" className="mb-6">
                  <TabsHeader
                    className="w-auto h-10 bg-white/80 backdrop-saturate-200 backdrop-blur-2xl shadow-2xl shadow-blue-grey-500/40 border border-white/80 rounded-full"
                    indicatorProps={{
                      className: "rounded-full"
                    }}
                  >
                    <Tab
                      value="react"
                      className="text-[#1A237E] font-normal p-0"
                      onClick={() =>
                        setVersion("npm i @material-tailwind/react")
                      }
                    >
                      <i className="fab fa-react" />
                      &nbsp;React
                    </Tab>
                    <Tab
                      value="html"
                      className="text-[#1A237E] font-normal p-0"
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
                className="!font-sans text-[#1A237E] font-black tracking-normal mb-2"
              >
                Material Tailwind
              </Typography>
              <Typography className="text-[#1A237E] text-lg !font-light mb-6 lg:pr-12">
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
                <div className="flex rounded-lg bg-white/80 backdrop-saturate-200 backdrop-blur-2xl shadow-2xl shadow-blue-grey-500/20 border border-white/80 py-2.5 px-5 text-[#1A237E]">
                  <CopyToClipboard
                    text={version}
                    onCopy={() => setCopied(true)}
                  >
                    <p className="w-full mb-0 font-normal flex items-center justify-between">
                      {version}
                      <Tooltip
                        content={copied ? "Copied" : "Copy"}
                        interactive={false}
                      >
                        <i
                          className={`${
                            copied ? "fas" : "far"
                          } fa-copy text-sm ml-4 cursor-pointer`}
                        />
                      </Tooltip>
                    </p>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-full md:w-7/12 max-w-full px-4 pt-24 md:pt-0">
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
