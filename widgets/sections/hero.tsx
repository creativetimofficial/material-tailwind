import React from "react";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import {
  Chip,
  Typography,
  Button,
  Card,
  IconButton,
} from "@material-tailwind/react";

interface StatsCardPropsType {
  count: string;
  title: string;
}

function StatsCard({ count, title }: StatsCardPropsType) {
  return (
    <div className="lg:border-l-2 lg:first:border-l-0">
      <Card color="transparent" shadow={false}>
        <Typography variant="h6" className="mb-1 text-gray-500">
          {title}
        </Typography>
        <Typography variant="h1" color="blue-gray" className="text-[40px]">
          {count}
        </Typography>
      </Card>
    </div>
  );
}

const stats = [
  {
    count: "1,000,000+",
    title: "NPM Installs",
  },
  {
    count: "18,000",
    title: "Live Projects",
  },
  {
    count: "2,500",
    title: "Github Stars",
  },
  {
    count: "460+",
    title: "Components",
  },
];

export function Hero() {
  const [copied, setCopied] = React.useState(false);
  const [isHtml, setIsHtml] = React.useState(false);

  return (
    <>
      <div className="grid h-full min-h-[84vh] place-items-center bg-[url('https://docs.material-tailwind.com/image/header-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto px-4 text-center lg:w-8/12 xl:w-7/12">
          <Link href="/docs/react/release-notes">
            <div className="inline-flex items-center rounded-lg border-[1.5px] border-blue-gray-50 bg-white py-1 pl-1 pr-8 font-medium text-primary">
              <Chip
                value="New"
                className="mr-3 rounded-md bg-primary px-3.5 !pb-2 pt-2.5 font-medium leading-none"
              />
              Update is available for @material-tailwind/react
            </div>
          </Link>
          <Typography
            variant="h1"
            className="relative mx-auto mt-10 mb-6 text-center text-4xl font-black !leading-tight tracking-normal text-primary md:text-5xl lg:max-w-5xl"
          >
            The Tailwind CSS Components Library For Coding 10x Faster
          </Typography>
          <Typography className="md:text-md relative mx-auto mb-10 text-center text-lg font-normal leading-normal !text-gray-600 lg:max-w-5xl">
            Material Tailwind is an open-source library that uses the power of
            Tailwind CSS and React to help you build unique web projects faster
            and easier. The stunning design inspired by Material Design is a
            bonus!
          </Typography>
          <div className="flex shrink-0 flex-wrap place-content-center items-center gap-4">
            <div className="inline-flex items-center justify-between gap-0.5 rounded-lg border-[1.5px] border-blue-gray-50 bg-white p-1 font-medium text-primary">
              <Typography variant="h6" className="mx-4">
                npm i @material-tailwind/{isHtml ? "html" : "react"}
              </Typography>
              <div>
                <CopyToClipboard
                  onCopy={() => setCopied(true)}
                  text={`npm i @material-tailwind/${isHtml ? "html" : "react"}`}
                >
                  <IconButton
                    color="white"
                    variant="text"
                    onMouseLeave={() => setCopied(false)}
                  >
                    {copied ? (
                      <CheckIcon className="h-5 w-5 text-green-600" />
                    ) : (
                      <DocumentDuplicateIcon className="h-5 w-5 text-gray-700" />
                    )}
                  </IconButton>
                </CopyToClipboard>
              </div>
              <IconButton
                className={`cursor-pointer ${
                  !isHtml ? "opacity-100" : "opacity-50 grayscale"
                }`}
                color="white"
                variant="text"
                onClick={() => setIsHtml(false)}
              >
                <img
                  src="https://docs.material-tailwind.com/img/logos/icon-react.svg"
                  alt="react-icon"
                  className="h-6 w-6"
                />
              </IconButton>
              <IconButton
                className={`cursor-pointer ${
                  isHtml ? "opacity-100" : "opacity-50 grayscale"
                }`}
                variant="text"
                color="white"
                onClick={() => setIsHtml(true)}
              >
                <img
                  src="https://docs.material-tailwind.com/img/logos/icon-html.svg"
                  alt="html-icon"
                  className="h-6 w-6"
                />
              </IconButton>
            </div>
            <Link href="/docs/react/installation" target="_blank">
              <Button
                color="gray"
                variant="filled"
                className="bg-primary py-3 text-base font-medium capitalize"
              >
                Get Started
              </Button>
            </Link>
          </div>

          <div className="my-4 mt-16 grid grid-cols-2 gap-y-16 gap-x-8 lg:grid-cols-4">
            {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
