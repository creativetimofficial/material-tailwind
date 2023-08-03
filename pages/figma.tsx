/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

// next.js components
import Head from "next/head";
import Image from "next/image";

// @material-tailwind/react components
import { Button, Card, Chip, Typography } from "@material-tailwind/react";

// page components
import Navbar from "components/layout/navbar";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

// sections
import FigmaFeatures from "components/sections/figma/features";
import ReadyMade from "components/sections/figma/ready-made";
import PixelCrafted from "components/sections/figma/pixel-crafted";
import Customize from "components/sections/figma/customize";
import Testimonials from "components/sections/figma/testimonials";
import Pricing from "components/sections/figma/pricing";
import Faq from "components/sections/figma/faq";
import Community from "components/sections/community";
import SectionSubscribe from "components/sections/subscribe";

export default function Figma() {
  const handleButtonClick = () => {
    const section = document.getElementById('pricing');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>
          Material Tailwind - Easy-to-use Tailwind CSS components library with
          Material Design
        </title>
        <link rel="canonical" href="https://www.material-tailwind.com" />
        <meta
          name="description"
          content="Material Tailwind is a components library that features multiple React & HTML components, all written with Tailwind CSS classes and Material Design guidelines."
        />
        <meta
          name="keywords"
          content="tailwind css, material design, react, next, react.js, next.js, tailwind template, tailwind css theme, tailwindcss components"
        />
      </Head>
      <Navbar shadow />
      <main className="relative">
        <Header img='/img/header-figma.jpg'>
          <div className="flex flex-wrap items-center justify-between relative">
            <Image
              className="absolute left-24  hidden md:block"
              src="/img/logos/arrow-1.png"
              width={60}
              height={60}
              alt="Arrow-1 Logo"
            />
            <div className="mt-46 mx-auto px-4 lg:mt-12 lg:w-10/12 xl:w-8/12 text-center">
              <div className="border border-blue-gray-100 bg-white text-blue-gray-900 p-3 py-2.5 pr-5 rounded-lg inline-flex items-center font-semibold">
                <Chip value="New" className="mr-4 rounded-md font-medium bg-slate-900" />
                Figma Version 1.0.0
              </div>
              <Typography
                variant="h1"
                className="mb-5 mt-10 relative text-center text-4xl md:text-6xl font-black !leading-tight tracking-normal text-blue-gray-900"
              >
                Figma Design System <br />
                for Material Tailwind Pro
                <Image
                  className="absolute top-8 right-10  hidden md:block"
                  src="/img/logos/arrow-3.png"
                  width={60}
                  height={60}
                  alt="Arrow-3 Logo"
                />
              </Typography>
              <Typography className="mb-10 relative text-lg md:text-xl text-center font-medium leading-normal text-blue-gray-500 lg:pr-12">
                Interested in working with the designer files? No worries, we&apos;ve prepared a special Figma version of the product!
                <Image
                  className="absolute top-24 left-24 hidden md:block"
                  src="/img/logos/arrow-2.png"
                  width={60}
                  height={60}
                  alt="Arrow-2 Logo"
                />
              </Typography>

              <div>
                <Button
                  size="lg"
                  variant="outlined"
                  className="capitalize bg-white relative font-medium text-md gap-3 inline-flex items-center text-blue-gray-800 border-blue-gray-100 focus:ring-transparent"
                >
                  <Image src="/img/icon-figma.svg" width={30} height={30} alt="Figma Logo" className="absolute" />
                  <span className="pl-8">Preview in Figma</span>
                </Button>
                <Button
                  size="lg"
                  variant="filled"
                  onClick={handleButtonClick}
                  className="ml-4 text-md font-medium capitalize bg-blue-gray-900 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20"
                >
                  Pricing & FAQ
                </Button>
              </div>
            </div>
          </div>
        </Header>
        <div className="container z-20 mx-auto px-6">
            <FigmaFeatures />
            <ReadyMade />
            <PixelCrafted />
            <Customize />
            <Testimonials />
            <Pricing />
            <Faq />
            <Community />
            <SectionSubscribe />
          </div>
      </main>
      <Footer />
    </>
  );
}
