/* eslint-disable @next/next/no-img-element */
import React from "react";

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

// page components
import Navbar from "components/layout/figma/navbar";
import Header from "components/layout/figma/header";
import Footer from "components/layout/footer";

// sections
import FigmaFeatures from "components/sections/figma/features";
import SectionButton from "components/sections/button";
import SectionColorsPalette from "components/sections/colors-palette";
import SectionShadow from "components/sections/shadow";
import SectionComponents from "components/sections/components";
import SectionFramework from "components/sections/framework";
import SectionTestimonials from "components/sections/testimonials";
import SectionCommunity from "components/sections/community";

export default function Figma() {
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
        <Header />
        <div className="container z-20 mx-auto px-4">
            <FigmaFeatures />
            <SectionButton />
            {/* <SectionColorsPalette />
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
