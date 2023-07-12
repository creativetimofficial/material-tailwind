import { useState, useRef } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Button,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import ContentCards from "./card";

export default function Premium() {

  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-8/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          Level up: Material Tailwind PRO
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-4xl md:text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Premium Tailwind CSS Components 
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Build faster your website with our exclusive collection of stunning component and sections that will get you started in no time!
        </Typography>
      </div>
      <div className="lg:flex">
        <div className="lg:w-4/12 px-4">
          <ContentCards 
            inverseTitle
            minHeight="min-h-[480px]" 
            subtitle="200+"
            title={'Global Style'} 
            img={'/img/img-5.jpg'}>
            {'Awesome color palette and realistic shadows.'}
          </ContentCards>
        </div>
        <div className="lg:w-4/12 px-4 mt-8 lg:mt-0">
          <ContentCards 
            inverseTitle
            minHeight="min-h-[480px]" 
            subtitle="100+"
            title={'CSS Components'} 
            img={'/img/img-5.jpg'}>
            {'Material Tailwind comes with a huge number of Fully Coded CSS components.'}
          </ContentCards>
        </div>
        <div className="lg:w-4/12 px-4 mt-8 lg:mt-0">
          <ContentCards 
            inverseTitle
            minHeight="min-h-[480px]" 
            subtitle="2"
            title={'Popular Technologies'} 
            img={'/img/img-5.jpg'}>
            {'Specially designed for React and HTML developers. '}
          </ContentCards>
        </div>
      </div>

      <div className="flex">
        <div className="lg:w-12/12 px-4 mt-8">
          <Card className={`border bg-white shadow-md rounded-2xl min-h-[300px] relative overflow-hidden`}>
            <div className="bg-[url('/img/header-figma.jpg')] bg-cover bg-center bg-no-repeat h-full w-full absolute top-40"></div>
            <CardBody className="z-10 lg:flex">
              <div className="lg:w-4/12">
                <Typography variant="h4" className="font-semibold text-3xl md:text-4xl text-blue-gray-900">
                  50+
                </Typography>
                <Typography variant="h2" className="mt-3 font-semibold text-xl text-blue-gray-900">
                  Ready-Made Sections
                </Typography>
                <Typography variant="paragraph" className="py-4 text-lg font-normal text-blue-gray-400">
                  Fully coded sample sections so you could start working instantly.
                </Typography>
              </div>
              <div className="ml-auto lg:w-6/12">
                <Image src={'/img/img-5.jpg'} width={1000} height={500} alt={'img'} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="mt-10 text-center">
        <Button
          size="lg"
          variant="outlined"
          className="capitalize bg-white relative font-medium text-md gap-3 inline-flex items-center text-blue-gray-800 border-blue-gray-100 focus:ring-transparent"
        >
          Material Tailwind PRO
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
