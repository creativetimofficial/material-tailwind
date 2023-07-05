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

const socials = [
  {
    title: "All Sizes",
    desc: "/img/img-7.jpg",
  },
  {
    title: "Fixed Paddings",
    desc: "/img/img-8.jpg",
  },
  {
    title: "More Variants",
    desc: "/img/img-9.jpg",
  },
]

export default function Community() {
  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center w-8/12">
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Join our community
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          Visit our communities to see the latest updates and news regarding our product. Whether you have questions, ideas to contribute, or simply want to connect with like-minded individuals, our communities provide a vibrant and supportive environment for your.
        </Typography>
      </div>
      <div className="flex items-center mt-16">
        {socials.map((social, i) => (
          <div className="flex-auto px-4" key={i}>
            <Card className="bg-white border shadow-none">
              <CardBody>
                <div className="w-[50px] h-[50px] rounded-lg bg-gray-900 flex items-center justify-center">
                  <i className="fa fa-check text-white"></i>
                </div>
                <Typography className="mt-5 text-xl text-gray-900 font-semibold">
                  {social.title}
                </Typography>
                <Typography className="text-blue-gray-400 mt-4 font-normal">
                  {social.desc}
                </Typography>
                <Button className="w-full mt-5 border border-blue-gray-100 bg-transparent shadow-none text-blue-gray-900 hover:shadow-blue-gray-500/20 shadow-blue-gray-500/20 capitalize text-md font-medium">
                  Visit
                </Button>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <div className="w-full px-4 mt-8">
        <Card className="bg-white border shadow-none">
          <CardBody className="flex">
            <div className="w-3/12">
              <div className="w-[50px] h-[50px] rounded-lg bg-gray-900 flex items-center justify-center">
                <i className="fa fa-check text-white"></i>
              </div>
              <Typography className="mt-5 text-xl text-gray-900 font-semibold">
                dada
              </Typography>
              <Typography className="text-blue-gray-400 mt-4 font-normal">
                dadadadadda
              </Typography>
              <Button className="w-full mt-5 border border-blue-gray-100 bg-transparent shadow-none text-blue-gray-900 hover:shadow-blue-gray-500/20 shadow-blue-gray-500/20 capitalize text-md font-medium">
                Visit
              </Button>
            </div>

            <div className="w-6/12 ml-auto">
              dadad
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
