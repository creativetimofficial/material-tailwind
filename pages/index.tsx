/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "pagesComponents/Navbar";
import Header from "pagesComponents/Header";
import Footer from "pagesComponents/Footer";
import { Card } from "../packages/material-tailwind-react/src";

// sections
import SectionFeatures from "pagesComponents/Sections/SectionFeatures";
import SectionButton from "pagesComponents/Sections/SectionButton";
import SectionColorsPalette from "pagesComponents/Sections/SectionColorsPalette";
import SectionShadow from "pagesComponents/Sections/SectionShadow";
import SectionComponents from "pagesComponents/Sections/SectionComponents";
import SectionFramework from "pagesComponents/Sections/SectionFramework";
import SectionTestimonials from "pagesComponents/Sections/SectionTestimonials";
import SectionCommunity from "pagesComponents/Sections/SectionCommunity";

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
        <Header />
        <Card
          shadow={false}
          className="bg-white -mt-20 md:-mt-48 mx-6 md:mx-12"
        >
          <div className="container mx-auto px-4 z-20">
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
            className="absolute w-full bottom-0 md:-bottom-40"
            src="/img/pre-footer.jpg"
            alt="bubbles"
          />
        </Card>
      </main>
      <Footer />
    </>
  );
}
