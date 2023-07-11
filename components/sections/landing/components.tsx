import { useState, useRef, useEffect } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";

const components = [
  {
    title: "Accordion",
    img: "/img/accordion-thumbnail.jpg",
  }
]

export default function Components() {
  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-8/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          Ready-to-use
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-4xl md:text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          X+ Tailwind CSS Components 
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Material Tailwind features all component examples you will need to build amazing web projects, all written with Tailwind CSS classes and Material Design guidelines. 
        </Typography>
      </div>

      <div className="flex flex-wrap">
        {components.map((component, i) => (
          <div className="lg:w-4/12 px-4 mt-8" key={i}>
            <Card className={`border bg-white shadow-md rounded-2xl min-h-[300px] w-full relative overflow-hidden`}>
              <div style={{backgroundImage: `url(${component.img})`}} className={`w-full h-full bg-cover bg-center bg-no-repeat absolute z-10`}></div>
            </Card>
            <Typography
              variant="h3"
              className="mb-4 mt-5 relative text-lg leading-tight tracking-normal text-blue-gray-400 font-semibold"
            >
              {component.title}
            </Typography>
          </div>
        ))}

      </div>

      <div className="mt-10 text-center">
        <Button
          size="lg"
          variant="outlined"
          className="capitalize bg-white relative font-medium text-md gap-3 inline-flex items-center text-blue-gray-800 border-blue-gray-100 focus:ring-transparent"
        >
          Checkout all components
        </Button>
        <Button
          size="lg"
          variant="filled"
          className="ml-4 text-md font-medium capitalize bg-blue-gray-900 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20"
        >
          Documentation
        </Button>
      </div>
    </section>
  );
}
