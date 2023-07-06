import { useState, useEffect, ReactNode } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
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

export default function FigmaFeatures() {
  return (
    <section className="py-12 -mt-40 md:-mt-24">
      <div className="flex flex-col lg:flex-row items-center">
        {cardContentAbove.map((card, i) => (
          <div className={`relative flex-auto mt-8 lg:mt-0 ${card.customClass} px-4`} key={i}>
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
          <div className="relative flex-auto mt-8 lg:mt-0 px-4" key={i}>
            <ContentCards
              minHeight="min-h-[480px]" 
              title={card.title} 
              img={card.img}>
              {card.children}
            </ContentCards>
          </div>
        ))}
      </div>
    </section>
  );
}
