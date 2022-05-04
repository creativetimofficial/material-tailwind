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
        <title>Presentation | Material Tailwind</title>
      </Head>
      <Navbar />
      <main className="relative">
        <Header />
        <Card
          shadow={false}
          className="bg-white/80 backdrop-saturate-200 backdrop-blur-2xl border border-white/80 -mt-48 mx-6 md:mx-12"
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
            src="/img/pre-footer.png"
            alt="bubbles"
          />
        </Card>
      </main>
      <Footer />
    </>
  );
}
