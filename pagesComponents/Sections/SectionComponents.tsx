/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import CodePreviewCard from "../../pagesComponents/Cards/CodePreviewCard";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip
} from "../../packages/material-tailwind-react/src";

export default function SectionComponents() {
  return (
    <section className="py-24">
      <div className="flex items-start flex-wrap lg:py-12">
        <div className="w-full lg:w-6/12 px-4 relative md:mt-10">
          <CodePreviewCard
            code={`import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

<Card className="shadow-lg">
  <CardHeader
    variant="gradient"
    color="grey"
    className="h-48"
  >
    <img
      src="/img/blog-2.jpg"
      alt="img-blur-shadow"
      className="w-full h-full"
    />
  </CardHeader>
  <CardBody className="text-center">
    <Typography
      as="a"
      variant="h5"
      className="text-[#1A237E] font-normal mb-2"
    >
      Great for your awesome project
    </Typography>
    <Typography>
      Putting together a page has never been easier than
      matching together pre-made components. From landing
      pages presentation to login areas, you can easily
      customise and built your pages.
    </Typography>
  </CardBody>
</Card>`}
          />
          <img
            className="absolute w-full top-28 -left-40"
            src="/img/purple.png"
            alt="blob_purple"
          />
          <Card className="hidden lg:grid absolute w-5/6 lg:w-[54%] top-0 lg:-top-[28rem] -right-5 md:-right-44 lg:right-auto md:left-60 lg:left-[22rem] z-30 card mt-36 shadow-lg md:mt-0">
            <CardHeader variant="gradient" color="grey" className="h-48">
              <Image
                src="/img/blog-2.jpg"
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography
                as="a"
                variant="h5"
                className="text-[#1A237E] font-normal text-center cursor-pointer mb-2"
              >
                Great for your awesome project
              </Typography>
              <Typography className="mb-0 ml-2 hidden md:block opacity-60">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation to
                login areas, you can easily customise and built your pages.
              </Typography>
              <Typography className="mb-0 ml-2 block md:hidden opacity-60">
                Putting together a page has never been easier than matching
                together pre-made components.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="w-full lg:w-6/12 px-4 lg:pt-36 md:pt-0 relative order-first lg:order-last -mt-14">
          <div className="w-11/12 lg:ml-24">
            <Chip
              variant="gradient"
              value="react only"
              className="rounded-full mb-8 from-[#191919] to-[#42424a]"
            />
            <Typography
              variant="h2"
              className="!font-sans font-black text-[#1A237E] tracking-normal mb-2"
            >
              Various styles of <br />
              <Typography
                as="span"
                variant="h2"
                color="blue"
                className="inline-block !font-sans font-black tracking-normal"
                textGradient
              >
                Components.
              </Typography>
            </Typography>
            <Typography className="text-[#1A237E]/60 text-lg mb-8 md:pr-10 opacity-60">
              Material Tailwind provides a simple way to customize your button,
              you can change the colors, fonts, breakpoints and everything you
              need.
            </Typography>
            <div className="flex flex-wrap gap-x-1 gap-y-3">
              <Chip
                variant="gradient"
                value="Accordion"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Breadcrumbs"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Card"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Dropdown"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Navbar"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Popover"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Select"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Tabs"
                className="rounded-full py-1.5 px-3"
              />
              <Chip
                variant="gradient"
                value="Tooltip"
                className="rounded-full py-1.5 px-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
