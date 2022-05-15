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
  Tooltip,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Switch,
  Chip,
  Avatar
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
    <div
      className="bg-no-repeat h-screen min-h-screen"
      style={{
        backgroundImage: "url('/img/bg-header.jpg')"
      }}
    >
      <div className="py-20 lg:py-32 h-fit relative z-50">
        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-8/12 lg:w-6/12 px-4 mt-48 lg:mt-4">
              <div className="w-full md:w-5/6 max-w-full sm:my-auto lg:w-1/2 md:flex-none">
                <Tabs value="react" className="mb-6">
                  <TabsHeader
                    className="w-2/3 h-10 bg-white/80 backdrop-saturate-200 backdrop-blur-2xl shadow-2xl shadow-blue-grey-500/40 border border-white/80 rounded-full"
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
                    <Button variant="gradient" className="h-full">
                      Get Started
                    </Button>
                  </a>
                </Link>
                <div className="flex rounded-lg bg-white/80 backdrop-saturate-200 backdrop-blur-2xl shadow-2xl shadow-blue-grey-500/40 border border-white/80 py-2.5 px-5 text-[#1A237E]">
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
            <div className="w-full md:w-6/12 px-4 pt-24 md:pt-0 relative">
              <div className="hidden lg:block w-1/2 bg-white absolute rounded-lg p-3 lg:top-5 lg:left-10 z-[99] shadow-lg animate-slide_input">
                <div className="input-group input-group-outline">
                  <Input label="Input Outline" />
                </div>
              </div>
              <div className="hidden lg:block w-80 ml-auto lg:mr-24 animate-slide_card">
                <Card className="mt-16">
                  <CardHeader color="blue" className="relative h-[12rem] z-30">
                    <a className="block relative w-full h-full">
                      <Image
                        src="/img/blog.jpg"
                        alt="img-blur-shadow"
                        layout="fill"
                      />
                    </a>
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography
                      as="a"
                      variant="h5"
                      className="text-[#1A237E] font-normal cursor-pointer mb-2"
                    >
                      Cozy 5 Stars Apartment
                    </Typography>
                    <Typography>
                      The place is close to Barceloneta Beach and bus stop just
                      2 min by walk and near to &quot;Naviglio&quot; where you
                      can enjoy the main night life in Barcelona.
                    </Typography>
                  </CardBody>
                  <CardFooter
                    divider
                    className="flex items-center justify-between py-3"
                  >
                    <Typography variant="small">$899/night</Typography>
                    <Typography
                      variant="small"
                      className="flex gap-1 text-[#7b809a]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[18px] w-[18px]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Barcelona, Spain
                    </Typography>
                  </CardFooter>
                </Card>
              </div>
              <div className="hidden lg:flex absolute -mt-48 ml-24 animate-slide_toggle">
                <Switch defaultChecked />
              </div>
              <div className="hidden lg:flex -mt-32 absolute animate-slide_chip">
                <Chip variant="gradient" color="pink" value="chips" />
              </div>
              <div className="hidden lg:flex float-right lg:-mt-24 relative z-50 animate-slide_button">
                <Button
                  variant="gradient"
                  color="pink"
                  className="flex items-center active:opacity-[1]"
                >
                  <i className="material-icons !text-base leading-none mr-1">
                    favorite
                  </i>
                  Button
                </Button>
              </div>
              <div className="hidden lg:flex mt-10 md:-mt-10 lg:ml-20 animate-slide_avatars">
                <div className="flex -space-x-4">
                  <Tooltip content="Jay" placement="bottom">
                    <Avatar
                      src="/img/face-1.jpg"
                      alt="jay"
                      variant="circular"
                      size="lg"
                      className="shadow-lg border-2 border-white cursor-pointer hover:z-50"
                    />
                  </Tooltip>
                  <Tooltip content="Mark" placement="bottom">
                    <Avatar
                      src="/img/face-2.jpg"
                      alt="mark"
                      variant="circular"
                      size="lg"
                      className="shadow-lg border-2 border-white cursor-pointer hover:z-50"
                    />
                  </Tooltip>
                  <Tooltip content="Sara" placement="bottom">
                    <Avatar
                      src="/img/face-3.jpg"
                      alt="sara"
                      variant="circular"
                      size="lg"
                      className="shadow-lg border-2 border-white cursor-pointer hover:z-50"
                    />
                  </Tooltip>
                  <Tooltip content="Emma" placement="bottom">
                    <Avatar
                      src="/img/face-4.jpg"
                      alt="emma"
                      variant="circular"
                      size="lg"
                      className="shadow-lg border-2 border-white cursor-pointer hover:z-50"
                    />
                  </Tooltip>
                  <Tooltip content="Lucy" placement="bottom">
                    <Avatar
                      src="/img/face-5.jpg"
                      alt="lucy"
                      variant="circular"
                      size="lg"
                      className="shadow-lg border-2 border-white cursor-pointer hover:z-50"
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
