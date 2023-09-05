import React from "react";
import Head from "next/head";
import {
  Navbar,
  Footer,
  BTSHero,
  BTSFeatures,
  BTSTemplates,
  BTSPricing,
  BTSFaq,
  Community,
  Subscribe,
} from "@widgets";
import { Alert, Button } from "@material-tailwind/react";
import Link from "next/link";

export default function Presentation() {
  return (
    <>
      <Head>
        <title>
          Material Tailwind Back to School - 10 Website Templates Bundle
        </title>
        <link
          rel="canonical"
          href="https://www.material-tailwind.com/back-to-school"
        />
        <meta
          name="description"
          content="Take advantage of Material Tailwind's Back to School offer and get access to 10 versatile website templates with Figma files included for easy development."
        />
        <meta
          name="title"
          content="Material Tailwind Back to School - 10 Website Templates Bundle"
        />
        <meta
          name="keywords"
          content="tailwind css, material design, react, next, react.js, next.js, tailwind template, tailwind css theme, tailwindcss components"
        />
      </Head>
      <Navbar />
      <main className="relative">
        <BTSHero />
        <BTSFeatures />
        <BTSTemplates />
        <BTSPricing />
        <BTSFaq />
        <div className="-mt-16">
          <Community />
          <Subscribe />
        </div>
      </main>
      <Footer />
    </>
  );
}
