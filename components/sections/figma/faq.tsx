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

const cardContent = [
  {
    question: "What is Material Tailwind?",
    answer: "Material Tailwind is a component library built with Tailwind CSS and React, designed to help developers and designers set up their web projects faster and more easily. Its design is inspired by Material Design. The product offers two versions: free and premium (PRO).",
    icon: "fa fa-check text-white",
  },
  {
    question: "What is the difference between the free and premium versions?",
    answer: "The difference between Material Tailwind (Free) and Material Tailwind Pro lies in the number of components and sections available. The free version provides only a limited set of elements for building a website, while the PRO version offers significantly more flexibility.",
    icon: "fa fa-check text-white",
  },
  {
    question: "Can I create or sell templates or themes using Material Tailwind?",
    answer: "Our product cannot be used to create templates, UI kits, dashboards, or web builders that are distributed on your website or other marketplaces.",
    icon: "fa fa-check text-white",
  },
  {
    question: "How many projects can I build with Material Tailwind PRO?",
    answer: "You can build as many projects as you like with Material Tailwind PRO, as long as they are not in direct competition with us.",
    icon: "fa fa-check text-white",
  },
  {
    question: "What does lifetime access mean?",
    answer: "If you purchase Material Tailwind PRO, you will have lifelong access to the product, meaning that you will receive all future updates for free.",
    icon: "fa fa-check text-white",
  },
  {
    question: "How many team members can use Material Tailwind PRO with a team license?",
    answer: "With a Material Tailwind PRO Team license, you can share the product with 10+ team members.",
    icon: "fa fa-check text-white",
  },
]

export default function Faq() {
  return (
    <section className="pb-12 pt-20">
      <div className="mx-auto mb-10 text-center w-8/12">
        <Typography
          variant="h3"
          className="mb-5 mt-10 relative text-center text-2xl leading-tight tracking-normal text-slate-950"
        >
          Answers
        </Typography>
        <Typography
          variant="h1"
          className="mb-5 mt-5 relative text-center text-5xl font-semibold leading-tight tracking-normal text-blue-gray-900"
        >
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 mt-5 relative text-center text-xl font-normal leading-relaxed tracking-normal text-blue-gray-400"
        >
          You&apos;ll find answers to common inquiries that will provide valuable insights into the features and functionality of Material Tailwind. 
        </Typography>
      </div>
      <div className="flex flex-wrap items-center mt-16">
        {cardContent.map((card, i) => (
          <div className="w-1/3" key={i}>
            <Card className="bg-transparent shadow-none">
              <CardBody className="min-h-[350px]">
                <div className="w-[50px] h-[50px] rounded-full bg-gray-900 flex items-center justify-center">
                  <i className={card.icon}></i>
                </div>
                <Typography className="mt-5 text-xl text-gray-900 font-medium">
                  {card.question}
                </Typography>
                <Typography className="text-blue-gray-400 mt-4 font-normal">
                  {card.answer}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <div className="bg-white border px-6 rounded-lg flex p-6">
        <div className="w-10/12">
          <Typography className="text-xl font-semibold text-gray-900">
            Still have questions?
          </Typography>
          <Typography className="text-lg font-normal text-blue-gray-300 mt-1">
            Reach our team and we will have an answer for you.
          </Typography>
        </div>
        <div className="w-2/12 flex items-center justify-end">
          <Button size="lg" className="mb-0 bg-slate-950 hover:shadow-blue-gray-500/40 shadow-blue-gray-500/20">Chat with us</Button>
        </div>
      </div>
    </section>
  );
}
