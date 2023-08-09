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
import { Alert, Button } from "@material-tailwind/react";

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
      <Alert className="w-full justify-center rounded-none">
        <div className="flex  items-center justify-center gap-4">
          NEW | Material Tailwind PRO, a comprehensive compilation of 200+
          sections, now available for your use.
          <Button size="sm" color="white">
            check out
          </Button>
        </div>
      </Alert>
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
