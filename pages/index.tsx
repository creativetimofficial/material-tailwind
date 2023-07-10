/* eslint-disable @next/next/no-img-element */
import React from "react";

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Button, Card, Chip, Typography } from "@material-tailwind/react";

// page components
import Navbar from "components/layout/navbar";
import Header from "components/layout/header";
import Footer from "components/layout/footer";

// sections
import SectionFeatures from "components/sections/features";
import SectionButton from "components/sections/button";
import SectionColorsPalette from "components/sections/colors-palette";
import SectionShadow from "components/sections/shadow";
import SectionComponents from "components/sections/components";
import SectionFramework from "components/sections/framework";
import SectionTestimonials from "components/sections/testimonials";
import SectionCommunity from "components/sections/community";
import Frameworks from "components/sections/landing/frameworks";
import Community from "components/sections/community";
import SectionSubscribe from "components/sections/subscribe";

export default function Presentation() {
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
        <Header img={'/img/header-bg.png'}>
          <div className="flex flex-wrap items-center justify-between relative">
            <div className="mt-46 mx-auto px-4 lg:mt-12 lg:w-10/12 xl:w-9/12 text-center">
              <div className="border border-blue-gray-100 bg-white text-blue-gray-900 p-3 py-2.5 pr-5 rounded-lg inline-flex items-center font-semibold">
                <Chip value="New" className="mr-4 rounded-md font-medium bg-slate-900" />
                Latest Update Material Tailwind released on July 05, 2023
              </div>
              <Typography
                variant="h1"
                className="mb-10 mt-10 relative text-center text-4xl md:text-5xl font-black !leading-tight tracking-normal text-blue-gray-900"
              >
                The Tailwind CSS Components Library that Skyrockets your UI
              </Typography>
              <Typography className="mb-10 relative text-lg md:text-md text-center font-medium leading-normal text-blue-gray-500 lg:pr-12">
                Material Tailwind is an open-source library that uses the power of Tailwind CSS and React to help you build unique web projects faster and easier. The stunning design inspired by Material Design is a bonus!
              </Typography>

              <div>
                <Button
                  size="lg"
                  variant="outlined"
                  className="capitalize bg-white relative font-medium text-md gap-3 inline-flex items-center text-blue-gray-800 border-blue-gray-100 focus:ring-transparent"
                >
                  Check out all components
                </Button>
                <Button
                  size="lg"
                  variant="filled"
                  className="ml-4 text-md font-medium capitalize bg-blue-gray-900 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Header>
        <div className="container z-20 mx-auto px-4">
          <Frameworks />
          <Community />
          <SectionSubscribe />
          {/* <SectionButton />
          <SectionColorsPalette />
          <SectionShadow />
          <SectionComponents />
          <SectionFramework />
          <SectionTestimonials />
          <SectionCommunity /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
