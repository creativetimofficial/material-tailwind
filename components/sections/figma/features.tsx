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


interface CardsProps {
  title: string;
  children: ReactNode;
  img: string;
}

const Cards: React.FC<CardsProps> = ({ title, children, img }) => {
  return (
    <>
      <Card className="border bg-white shadow-md rounded-2xl min-h-[480px] relative overflow-hidden">
        <div className="bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat h-full w-full absolute top-16"></div>
        <CardBody className="z-10">
          <Typography variant="h2" className="font-semibold text-blue-gray-900">
            {title}
          </Typography>
          <Typography variant="paragraph" className="py-4 text-lg font-normal text-blue-gray-400">
            {children}
          </Typography>
        </CardBody>
        <CardFooter className="py-0 z-10">
          <Image src={img} width={1000} height={500} alt={title} />
        </CardFooter>
      </Card>
    </>
  );
};

const cardContentAbove = [
  {
    title: "Colors and Styles",
    img: "/img/img-1.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
    customClass: "w-40"
  },
  {
    title: "Figma Variants",
    img: "/img/img-2.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
    customClass: "w-72"
  },
  {
    title: "Typography",
    img: "/img/img-3.jpg",
    children: "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
    customClass: "w-40"
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
    <section className="py-12 -mt-24">
      <div className="flex items-center">
        {cardContentAbove.map((card, i) => (
          <div className={`relative flex-auto ${card.customClass} px-4`} key={i}>
            <Cards title={card.title} img={card.img}>
              {card.children}
            </Cards>
          </div>
        ))}
      </div>
      <div className="flex items-center mt-8">
        {cardContentBelow.map((card, i) => (
          <div className="relative flex-auto px-4" key={i}>
            <Cards title={card.title} img={card.img}>
              {card.children}
            </Cards>
          </div>
        ))}
      </div>
    </section>
  );
}
