import { useState, useRef } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import ContentCards from "./card";

export default function Features() {

  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-8/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          Material Tailwind - Free
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-4xl md:text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Explore some of its features
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Get Material Tailwind and take advantage of its free components and features that will help you setup your web project quickly.
        </Typography>
      </div>
      <div className="lg:flex">
        <div className="lg:w-6/12 lg:px-4">
          <ContentCards 
            minHeight="min-h-[480px]" 
            subtitle="Code better, launch faster"
            title={'With your favorite framework'} 
            img={'/img/img-5.jpg'}>
            {'Material Tailwind comes with stunning fully coded components based on React or HTML. Choose you favorite version! Angular and Vue.js components coming soon.'}
          </ContentCards>
        </div>
        <div className="lg:w-6/12 lg:px-4 mt-8 lg:mt-0">
          <ContentCards 
            minHeight="min-h-[480px]" 
            subtitle="CSS Components"
            title={'Code Fast. Code Consistently'} 
            img={'/img/img-5.jpg'}>
            {'Our Tailwind CSS components library provides a simple way to customize your button; you can change the colors, fonts, styling, and everything you need.'}
          </ContentCards>
        </div>
      </div>

      <div className="flex">
        <div className="lg:w-12/12 lg:px-4 mt-8">
          <Card className={`border bg-white shadow-md rounded-2xl min-h-[300px] relative overflow-hidden`}>
            <div className="bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat h-full w-full absolute top-40"></div>
            <CardBody className="z-10 lg:flex">
              <div className="lg:w-4/12">
                <Typography variant="h4" className="font-semibold text-xl text-blue-gray-900">
                  Global Style
                </Typography>
                <Typography variant="h2" className="mt-3 font-semibold text-2xl md:text-3xl text-blue-gray-900">
                  Awesome color palette and realistic shadows.
                </Typography>
                <Typography variant="paragraph" className="py-4 text-md font-normal text-blue-gray-400">
                  Enhance your web product with our vibrant color palettes and realistic shadows, creating a memorable user experience that breathes life into your design.
                </Typography>
              </div>
              <div className="ml-auto lg:w-6/12">
                <Image src={'/img/img-5.jpg'} width={1000} height={500} alt={'img'} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
