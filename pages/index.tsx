/* eslint-disable @next/next/no-img-element */
import React from "react";

// next.js components
import Head from "next/head";
import Link from "next/link";

// @material-tailwind/react components
import { Card, Alert, Button } from "@material-tailwind/react";

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

export default function Presentation() {
  const [show, setShow] = React.useState(true);

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
      {show && (
        <div className="fixed top-28 left-0 z-[99] w-screen bg-gradient-to-r from-red-400 to-red-600 pt-2">
          <div className="container mx-auto">
            <Alert
              show={show}
              dismissible={{
                onClose: () => setShow(false),
              }}
              className="bg-trasparent rounded-none"
              icon={<div className="-mt-1 text-2xl">😍</div>}
            >
              <div className="-mt-2 flex items-center justify-between">
                Black Friday Exclusive - Get access to our Premium Components
                and save up to 50% OFF
                <Link href="/blocks#pricing">
                  <Button className="flex bg-blue-gray-900 shadow-blue-gray-900/10 hover:shadow-blue-gray-900/25">
                    get offer 🔥
                  </Button>
                </Link>
              </div>
            </Alert>
          </div>
        </div>
      )}
      <Navbar shadow />
      <main className="relative">
        <Header />
        <Card
          shadow={false}
          className="mx-6 -mt-20 bg-white md:mx-12 md:-mt-48"
        >
          <div className="container z-20 mx-auto px-4">
            <SectionFeatures />
            <SectionButton />
            <SectionColorsPalette />
            <SectionShadow />
            <SectionComponents />
            <SectionFramework />
            <SectionTestimonials />
            <SectionCommunity />
          </div>
          <img
            className="absolute bottom-0 w-full md:-bottom-40"
            src="/img/pre-footer.jpg"
            alt="bubbles"
          />
        </Card>
      </main>
      <Footer />
    </>
  );
}
