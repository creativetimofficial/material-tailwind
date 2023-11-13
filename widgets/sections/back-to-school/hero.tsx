import React from "react";
import Link from "next/link";
import { Chip, Typography, Button, Carousel } from "@material-tailwind/react";

export function BTSHero() {
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
          className="relative mx-auto mb-6 mt-10 text-center text-4xl font-black !leading-tight tracking-normal text-primary md:text-5xl lg:max-w-5xl"
        >
          Back to School is Here!
          <br />
          Access our Exclusive Web Templates
        </Typography>
        <Typography className="md:text-md relative mx-auto text-center text-lg font-normal leading-normal !text-gray-600 lg:max-w-5xl">
          Our exclusive &quot;Back to School&quot; Campaign has arrived, and
          it&apos;s packed with everything you need to kick-start your web
          projects effortlessly. Get our 10 starter templates bundle and start
          creating.
        </Typography>
        <div className="mx-auto my-4 grid max-w-sm justify-center">
          <Carousel autoplay loop autoplayDelay={5000}>
            <img
              src="https://docs.material-tailwind.com/image/carousel-1.png"
              alt="carousel 1"
              className="h-full w-full"
            />
            <img
              src="https://docs.material-tailwind.com/image/carousel-3.png"
              alt="carousel 3"
              className="h-full w-full"
            />
          </Carousel>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="#templates" className="w-full sm:w-auto">
            <Button
              size="lg"
              color="gray"
              variant="outlined"
              className="border-[1.5px] border-blue-gray-50 bg-white !text-base font-medium capitalize text-primary focus:ring-transparent"
            >
              See the templates
            </Button>
          </Link>
          <Link href="#pricing" className="w-full sm:w-auto">
            <Button
              size="lg"
              color="gray"
              variant="filled"
              className="w-full bg-primary text-base font-medium capitalize sm:w-auto"
            >
              Pricing & FAQ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BTSHero;
