import { useState, useRef } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Typography,
} from "@material-tailwind/react";
import ContentCards from "components/layout/figma/card";

const cardContentAbove = [
  {
    title: "E-commerce Pages",
    img: "/img/img-10.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    title: "Admin Dashboards",
    img: "/img/img-11.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
]
const cardContentBelow = [
  {
    title: "Blog Pages",
    img: "/img/img-12.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    title: "Your Website",
    img: "/img/img-13.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
]

export default function Customize() {
  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-8/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          Figma Design System
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-4xl md:text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Customize it for your needs
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Material Tailwind Pro features all the React or HTML components examples you will need to build amazing web projects, all written with Tailwind CSS classes and Material Design guidelines. 
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-16">
        {cardContentAbove.map((card, i) => (
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
