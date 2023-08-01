import React from "react";
import Head from "next/head";
import {
  Navbar,
  Footer,
  Hero,
  Integrations,
  Features,
  Components,
  Pro,
  Figma,
  Community,
  Subscribe,
} from "@widgets";

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
      <Navbar />
      <main className="relative">
        <Hero />
        <Integrations />
        <Features />
        <Components />
        <Pro />
        <Figma />
        <Community />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
