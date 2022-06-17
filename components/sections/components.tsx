/* eslint-disable @next/next/no-img-element */

// next.js components
import Image from "next/image";

// @material-tailwind/react components
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
} from "@material-tailwind/react";

// page components
import CodePreview from "components/cards/code-preview";

export default function SectionComponents() {
  const components = [
    "accordion",
    "breadcrumbs",
    "card",
    "dropdown",
    "navbar",
    "popover",
    "select",
    "tabs",
    "tooltip",
  ];

  return (
    <section className="py-24">
      <div className="flex flex-wrap items-start lg:py-12">
        <div className="relative w-full px-4 md:mt-10 lg:w-6/12">
          <CodePreview
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
      alt="tailwind-img-blur-shadow"
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
            className="absolute top-28 -left-40 w-full"
            src="/img/purple.png"
            alt="tailwind_blob_purple"
          />
          <Card className="card absolute top-0 -right-5 z-30 mt-36 hidden w-5/6 shadow-lg md:-right-44 md:left-60 md:mt-0 lg:-top-[28rem] lg:right-auto lg:left-[22rem] lg:grid lg:w-[54%]">
            <CardHeader variant="gradient" color="grey" className="h-48">
              <Image
                src="/img/blog-2.jpg"
                alt="tailwind_img_blur_shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h5"
                className="mb-2 cursor-pointer text-center font-normal text-[#1A237E]"
              >
                Great for your awesome project
              </Typography>
              <Typography className="mb-0 ml-2 hidden opacity-60 md:block">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation to
                login areas, you can easily customise and built your pages.
              </Typography>
              <Typography className="mb-0 ml-2 block opacity-60 md:hidden">
                Putting together a page has never been easier than matching
                together pre-made components.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div className="relative order-first -mt-14 w-full px-4 md:pt-0 lg:order-last lg:w-6/12 lg:pt-36">
          <div className="w-11/12 lg:ml-24">
            <Chip
              variant="gradient"
              value="react only"
              className="mb-8 rounded-full from-[#191919] to-[#42424a]"
            />
            <Typography
              variant="h2"
              className="mb-2 !font-sans font-black tracking-normal text-[#1A237E]"
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
            <Typography className="mb-8 text-lg text-[#1A237E]/60 opacity-60 md:pr-10">
              Putting together a page has never been easier than matching our
              pre-made components. Add our ready-styled components to your
              project or modify them as you would like.
            </Typography>
            <div className="flex flex-wrap gap-x-1 gap-y-3">
              {components.map((component, key) => (
                <Chip
                  key={key}
                  value={component}
                  variant="gradient"
                  className="rounded-full py-1.5 px-3"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
