import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Chip, Typography, Button, Carousel } from "@material-tailwind/react";

export function Hero() {
  const [copied, setCopied] = React.useState(false);

  return (
    <div className="grid h-full min-h-[84vh] place-items-center bg-[url('/svg/header-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 text-center lg:w-8/12 xl:w-7/12">
        <Link href="/docs/react/release-notes">
          <div className="inline-flex items-center rounded-full border-[1.5px] border-blue-gray-50 bg-white py-1 pl-1 pr-8 font-medium text-primary">
            <Chip
              value="New"
              className="mr-3 rounded-full bg-primary px-3.5 !pb-2 pt-2.5 font-medium leading-none"
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
        <Typography className="md:text-md relative mx-auto text-center text-lg font-normal leading-normal !text-gray-600 lg:max-w-5xl">
          Material Tailwind is an open-source library that uses the power of
          Tailwind CSS and React to help you build unique web projects faster
          and easier. The stunning design inspired by Material Design is a
          bonus!
        </Typography>
        <div className="my-4 mx-auto grid max-w-sm justify-center">
          <Carousel autoplay loop autoplayDelay={5000}>
            <img
              src="/image/carousel-1.png"
              alt="carousel 1"
              className="h-full w-full"
            />
            <img
              src="/image/carousel-2.png"
              alt="carousel 2"
              className="h-full w-full"
            />
            <img
              src="/image/carousel-3.png"
              alt="carousel 3"
              className="h-full w-full"
            />
          </Carousel>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div
            onMouseLeave={() => setCopied(false)}
            className="w-full sm:w-auto"
          >
            <CopyToClipboard
              onCopy={() => setCopied(true)}
              text="npm i @material-tailwind/react"
            >
              <Button
                size="lg"
                disabled={copied}
                variant="outlined"
                className="relative inline-flex w-full items-center justify-center gap-3 border-[1.5px] border-blue-gray-50 bg-white px-5 py-[12.5px] text-center font-mono text-base font-medium lowercase text-primary focus:ring-transparent disabled:opacity-100 sm:w-auto"
              >
                <span className={copied ? "opacity-0" : "opacity-100"}>
                  npm i @material-tailwind/react
                </span>
                <span
                  className={`${
                    copied ? "scale-100 opacity-100" : "scale-90 opacity-0"
                  } absolute left-2/4 flex -translate-x-2/4 items-center gap-2 capitalize text-green-500 transition-transform duration-300
                `}
                >
                  <CheckCircleIcon className="h-5 w-5" />
                  Copied
                </span>
              </Button>
            </CopyToClipboard>
          </div>
          <Link href="/docs/react/installation" className="w-full sm:w-auto">
            <Button
              size="lg"
              color="gray"
              variant="filled"
              className="w-full bg-primary text-base font-medium capitalize sm:w-auto"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
