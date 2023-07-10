/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";

// next.js components
import Head from "next/head";

// @material-tailwind/react components
import { Card } from "@material-tailwind/react";

// page components
import Navbar from "components/layout/figma/navbar";
import Header from "components/layout/figma/header";
import Footer from "components/layout/figma/footer";

// sections
import FigmaFeatures from "components/sections/figma/features";
import ReadyMade from "components/sections/figma/ready-made";
import PixelCrafted from "components/sections/figma/pixel-crafted";
import Customize from "components/sections/figma/customize";
import Testimonials from "components/sections/figma/testimonials";
import Pricing from "components/sections/figma/pricing";
import Faq from "components/sections/figma/faq";
import Community from "components/sections/figma/community";
import SectionSubscribe from "components/sections/figma/subscribe";

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
