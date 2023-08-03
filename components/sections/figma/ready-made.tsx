import { useState, useRef } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Button,
  Typography,
} from "@material-tailwind/react";

export default function ReadyMade() {
  const active = 'bg-blue-gray-900 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20 capitalize text-md font-medium';
  const defaultBtn = 'border border-blue-gray-100 bg-transparent shadow-none text-blue-gray-900 hover:shadow-blue-gray-500/20 shadow-blue-gray-500/20 capitalize text-md font-medium';
  const buttonNames = ['Hero', 'Features', 'Blog', 'Pricing', 'Teams', 'Stats', 'Testimonial', 'Content'];
  const imgPaths = ['Hero', 'Features', 'Blog', 'Pricing', 'Teams', 'Stats', 'Testimonial', 'Content'];
  const imageRef = useRef(null);
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
    imageRef.current.src = imgPaths[index];
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 0; i < 8; i++) {
      buttons.push(
        <Button
          key={i}
          className={`${activeButton === i ? active : defaultBtn} mt-2 mr-2 xl:mr-0 xl:mt-0`}
          onClick={() => handleButtonClick(i)}
        >
          {buttonNames[i]}
        </Button>
      );
    }
    return buttons;
  };

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
          50+ Ready Made Sections
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Material Tailwind Pro features all the React or HTML components examples you will need to build amazing web projects, all written with Tailwind CSS classes and Material Design guidelines. 
        </Typography>
      </div>
      <div className="mx-auto w-10/12 flex flex-wrap xl:flex-nowrap md:justify-between">
        {renderButtons()}
        <Button size="lg" className="bg-transparent shadow-none text-blue-gray-900 hover:shadow-none capitalize underline">See More <i className="fa fa-chevron-right ml-1"></i></Button>
      </div>
      <div className="bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl">
        <img src="/img/img-6.png" ref={imageRef} className="mx-auto pt-16 pb-10 mt-10" alt="img-6" width={1000} height={1000} />
      </div>
    </section>
  );
}
