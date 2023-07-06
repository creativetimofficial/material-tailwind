import { useState, useEffect } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";

export default function Header() {
  return (
    <div className="h-screen min-h-screen bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative z-50 h-fit pt-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between relative">
            <Image className="absolute left-24  hidden md:block" src="/img/logos/arrow-1.png" width="60" height="60" alt="Arrow-1 Logo" />
            <div className="mt-46 mx-auto px-4 lg:mt-12 lg:w-10/12 xl:w-8/12 text-center">
              <div className="border border-blue-gray-100 bg-white text-blue-gray-900 p-3 py-2.5 pr-5 rounded-lg inline-flex items-center font-semibold">
                <Chip value="New" className="mr-4 rounded-md font-medium bg-slate-900" />
                Figma Version 1.0.0
              </div>
              <Typography
                variant="h1"
                className="mb-5 mt-10 relative text-center text-4xl md:text-6xl font-black !leading-tight tracking-normal text-blue-gray-900"
              >
                Figma Design System <br></br> for Material Tailwind Pro
                <Image className="absolute top-8 right-10  hidden md:block" src="/img/logos/arrow-3.png" width="60" height="60" alt="Arrow-3 Logo" />
              </Typography>
              <Typography className="mb-10 relative text-lg md:text-xl text-center font-medium leading-normal text-blue-gray-500 lg:pr-12">
                Interested in working with the designer files? No worries, we&apos;ve prepared a special Figma version of the product!
                <Image className="absolute top-24 left-24 hidden md:block" src="/img/logos/arrow-2.png" width="60" height="60" alt="Arrow-2 Logo" />
              </Typography>

              <div>
                <Button size="lg" variant="outlined" className="capitalize bg-white relative font-medium text-md gap-3 inline-flex items-center text-blue-gray-800 border-blue-gray-100 focus:ring-transparent">
                  <Image src="/img/icon-figma.svg" width="30" height="30" alt="Figma Logo" className="absolute" />
                  <span className="pl-8">Preview in Figma</span>
                </Button>
                <Button size="lg" variant="filled" className="ml-4 text-md font-medium capitalize bg-blue-gray-900 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20">Pricing & FAQ</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
