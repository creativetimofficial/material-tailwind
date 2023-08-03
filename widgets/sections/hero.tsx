import Link from "next/link";
import { Chip, Typography, Button } from "@material-tailwind/react";

export function Hero() {
  return (
    <div className="grid h-screen min-h-screen place-items-center bg-[url('/svg/header-bg.svg')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 text-center lg:w-8/12 xl:w-7/12">
        <div className="inline-flex items-center rounded-full border-[1.5px] border-blue-gray-50 bg-white py-1 pl-1 pr-8 font-medium text-primary">
          <Chip
            value="New"
            className="mr-3 rounded-full bg-primary px-3.5 !pb-2 pt-2.5 font-medium leading-none"
          />
          Latest Update Material Tailwind released on July 05, 2023
        </div>
        <Typography
          variant="h1"
          className="relative mx-auto mt-10 mb-6 text-center text-4xl font-black !leading-tight tracking-normal text-primary md:text-5xl lg:max-w-5xl"
        >
          The Tailwind CSS Components Library that Skyrockets your UI
        </Typography>
        <Typography className="md:text-md relative mx-auto mb-10 text-center text-lg font-normal leading-normal !text-gray-600 lg:max-w-5xl">
          Material Tailwind is an open-source library that uses the power of
          Tailwind CSS and React to help you build unique web projects faster
          and easier. The stunning design inspired by Material Design is a
          bonus!
        </Typography>
        <div>
          <Link href="/docs/react/button">
            <Button
              size="lg"
              variant="outlined"
              className="relative inline-flex items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-base font-medium capitalize text-primary focus:ring-transparent"
            >
              Check out all components
            </Button>
          </Link>
          <Link href="/docs/react/installation">
            <Button
              size="lg"
              color="gray"
              variant="filled"
              className="ml-4 bg-primary text-base font-medium capitalize"
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
