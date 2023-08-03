import { useState, useEffect, ReactNode } from "react";

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { StarIcon } from "@heroicons/react/24/solid";

interface CardsProps {
  img: string;
  children: React.ReactNode;
  position: string;
  name: string;
}

const CardTestiomonial = ({ children, img, position, name }: CardsProps) => {
  return (
    <>
      <Card color="white" shadow={false} className=" border mt-5 lg:mt-0">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center"
        >
          <Avatar
            size="lg"
            src={img}
            alt="candice wu"
          />
        </CardHeader>
        <CardBody className="min-h-[208px]">
          <div className="pb-5 flex items-center gap-0">
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
            <StarIcon className="h-5 w-5 text-yellow-700" />
          </div>
          <Typography className="font-semibold text-gray-900 text-2xl">
            &apos;&apos;{children}&apos;&apos;
          </Typography>
          <div className="flex w-full flex-col mt-8">
            <div className="flex items-center justify-between">
              <Typography variant="h5" className="font-normal text-gray-900">
                {name}
              </Typography>
            </div>
            <Typography className="text-blue-gray-400 text-lg font-normal">{position}</Typography>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

const cardContentAbove = [
  {
    img: "/img/avatars/avatar-1.jpg",
    children: "I can confidently say that our team's productivity has increased significantly since implementing this UI design system.",
    position: "Designer, Company",
    name: "Veda Wilson",
  },
  {
    img: "/img/avatars/avatar-2.jpg",
    children: "I can confidently say that our team's productivity has increased significantly since implementing this UI design system.",
    position: "Designer, Company",
    name: "Veda Wilson",
  },
  {
    img: "/img/avatars/avatar-3.jpg",
    children: "I can confidently say that our team's productivity has increased significantly since implementing this UI design system.",
    position: "Designer, Company",
    name: "Veda Wilson",
  },
]

const cardContentBelow = [
  {
    img: "/img/avatars/avatar-4.jpg",
    children: "I can confidently say that our team's productivity has increased significantly since implementing this UI design system.",
    position: "Designer, Company",
    name: "Veda Wilson",
  },
  {
    img: "/img/avatars/avatar-5.jpg",
    children: "I can confidently say that our team's productivity has increased significantly since implementing this UI design system.",
    position: "Designer, Company",
    name: "Veda Wilson",
  },
  {
    img: "/img/avatars/avatar-6.jpg",
    children: "I can confidently say that our team's productivity has increased significantly since implementing this UI design system.",
    position: "Designer, Company",
    name: "Veda Wilson",
  },
]

export default function Testimonials() {
  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-14 text-center w-12/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-xl md:text-2xl leading-tight tracking-normal text-slate-950"
        >
          Trusted by over 10,000+ Web Developers
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-3xl md:text-4xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Embraced by freelancers and businesses alike on a global scale.
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-lg md:text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          See what other fellow developers and designers are saying about <br></br> Material Tailwind.
        </Typography>
      </div>
      <div className="flex flex-col lg:flex-row items-center">
        {cardContentAbove.map((card, i) => (
          <div className="flex-auto lg:px-4" key={i}>
            <CardTestiomonial img={card.img} position={card.position} name={card.name}>
              {card.children}
            </CardTestiomonial>
          </div>  
        ))}
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-8">
        {cardContentBelow.map((card, i) => (
          <div className="flex-auto lg:px-4" key={i}>
            <CardTestiomonial img={card.img} position={card.position} name={card.name}>
              {card.children}
            </CardTestiomonial>
          </div>  
        ))}
      </div>

      <div className="mt-28 border-t border-blue-gray-50 mx-4"></div>
      <div className="bg-white flex flex-wrap lg:flex-nowrap items-center justify-center p-4 w-2/3 mx-auto -mt-12">
        <img src="/img/logos/logo-amazon.webp" className="m-5 lg:mx-5" width={100} />
        <img src="/img/logos/logo-ibm.webp" className="m-5 lg:mx-5" width={100} />
        <img src="/img/logos/logo-microsoft.webp" className="m-5 lg:mx-5" width={100} />
        <img src="/img/logos/logo-cisco.webp" className="m-5 lg:mx-5" width={100} />
        <img src="/img/logos/logo-vodafone.webp" className="m-5 lg:mx-5" width={100} />
      </div>
    </section>
  );
}
