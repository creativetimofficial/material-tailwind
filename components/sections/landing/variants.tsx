import { useState, useEffect, ReactNode } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

import ContentCards from "components/layout/figma/card";

const cardContentAbove = [
  {
    title: "Colors and Styles",
    img: "/img/img-1.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
    customClass: "lg:w-40"
  },
  {
    title: "Figma Variants",
    img: "/img/img-2.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
    customClass: "lg:w-72"
  },
  {
    title: "Typography",
    img: "/img/img-3.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
    customClass: "lg:w-40"
  },
]

const cardContentBelow = [
  {
    title: "Built for Desktop and Mobile",
    img: "/img/img-4.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    title: "Auto Layout",
    img: "/img/img-5.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components."
  },
]

export default function Variants() {
  return (
    <section className="py-12 ">
      <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-8/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          A Must-Have
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-4xl md:text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Figma Design Files
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Now, you can effortlessly customize and prototype your designs, saving valuable time while ensuring smooth collaboration with your team.
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        {cardContentAbove.map((card, i) => (
          <div className={`relative flex-auto mt-8 lg:mt-0 ${card.customClass} md:px-4`} key={i}>
            <ContentCards 
              minHeight="min-h-[480px]" 
              title={card.title} 
              img={card.img}>
              {card.children}
            </ContentCards>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-8">
        {cardContentBelow.map((card, i) => (
          <div className="relative flex-auto mt-8 lg:mt-0 md:px-4" key={i}>
            <ContentCards
              minHeight="min-h-[480px]" 
              title={card.title} 
              img={card.img}>
              {card.children}
            </ContentCards>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center">
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
          className="ml-4 text-md font-medium capitalize bg-blue-gray-900 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20"
        >
          Pricing & FAQ
        </Button>
      </div>
    </section>
  );
}
