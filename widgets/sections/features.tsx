import React from "react";
import Image from "next/image";
import {
  Card,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";

function FavoriteFramework() {
  return (
    <div className="mt-16 flex items-center gap-12 px-4">
      <Link href="/docs/react/installation">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="https://docs.material-tailwind.com/svg/react.svg"
            alt="react logo"
            width={480}
            height={480}
            className="h-10 w-10"
          />
          <Typography variant="h6" className="text-primary">
            React
          </Typography>
        </div>
      </Link>
      <Link href="/docs/html/installation">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="https://docs.material-tailwind.com/svg/tailwind.svg"
            alt="tailwind logo"
            width={480}
            height={480}
            className="h-10 w-10"
          />
          <Typography variant="h6" className="text-primary">
            Tailwind CSS
          </Typography>
        </div>
      </Link>
      <div className="relative flex flex-col items-center justify-center gap-2">
        <Image
          src="https://docs.material-tailwind.com/svg/angular.svg"
          alt="angular logo"
          width={480}
          height={480}
          className="h-10 w-10 opacity-50 grayscale"
        />
        <Chip
          size="sm"
          className="absolute -top-4 -right-4 rounded-full bg-primary text-white"
          value="Soon"
        />
        <Typography variant="h6" className="text-primary/50">
          Angular
        </Typography>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-2">
        <Image
          src="https://docs.material-tailwind.com/svg/vue.svg"
          alt="vue logo"
          width={480}
          height={480}
          className="h-10 w-10 opacity-50 grayscale"
        />
        <Chip
          size="sm"
          className="absolute -top-4 -right-4 rounded-full bg-primary text-white"
          value="Soon"
        />
        <Typography variant="h6" className="text-primary/50">
          Vue.js
        </Typography>
      </div>
    </div>
  );
}

function CssComponents() {
  const [type, setType] = React.useState("filled");

  return (
    <div className="mt-8 text-center">
      <Button
        size="lg"
        color="gray"
        variant={type === "icon" ? "filled" : (type as any)}
        className={
          type === "filled" || type === "icon"
            ? "bg-primary text-white"
            : type === "text"
            ? "text-primary hover:bg-primary/5"
            : type === "gradient"
            ? "from-black to-gray-800"
            : ""
        }
      >
        {type === "icon" && <i className="fas fa-heart mr-2 text-base" />}
        Button
      </Button>
      <div className="mx-auto mt-16 flex max-w-xs items-center justify-between gap-4">
        <div
          onClick={() => setType("filled")}
          className="flex cursor-pointer flex-col items-center justify-center gap-2"
        >
          <i className="fas fa-dot-circle text-lg text-primary" />
          <Typography variant="h6" className="text-primary">
            Default
          </Typography>
        </div>
        <div
          onClick={() => setType("gradient")}
          className="flex cursor-pointer flex-col items-center justify-center gap-2"
        >
          <i className="fas fa-palette text-lg text-primary" />
          <Typography variant="h6" className="text-primary">
            Gradient
          </Typography>
        </div>
        <div
          onClick={() => setType("text")}
          className="flex cursor-pointer flex-col items-center justify-center gap-2"
        >
          <i className="fas fa-link text-lg text-primary" />
          <Typography variant="h6" className="text-primary">
            Link
          </Typography>
        </div>
        <div
          onClick={() => setType("icon")}
          className="flex cursor-pointer flex-col items-center justify-center gap-2"
        >
          <i className="fas fa-heart text-lg text-primary" />
          <Typography variant="h6" className="text-primary">
            Icon
          </Typography>
        </div>
      </div>
    </div>
  );
}

function GlobalStyles() {
  return (
    <Image
      width={1280}
      height={1280}
      alt="card background"
      src="https://docs.material-tailwind.com/image/global-styles.png"
      className="h-full w-full object-cover object-center"
    />
  );
}

const CONTENT = [
  {
    tag: "Code better, launch faster",
    title: "With your favorite framework",
    description:
      "Material Tailwind comes with stunning fully coded components based on React or HTML. Choose you favorite version! Angular and Vue.js components coming soon.",
    children: <FavoriteFramework />,
  },
  {
    tag: "CSS Components",
    title: "Code Fast. Code Consistently",
    description:
      "Our Tailwind CSS components library provides a simple way to customize your button; you can change the colors, fonts, styling, and everything you need.",
    children: <CssComponents />,
  },
  {
    tag: "Global Style",
    title: "Awesome color palette and realistic shadows.",
    description:
      "Enhance your web product with our vibrant color palettes and realistic shadows, creating a memorable user experience that breathes life into your design.",
    children: <GlobalStyles />,
    route: "/docs/react/colors",
  },
];

export function Features() {
  return (
    <section className="px-4 py-40">
      <div className="container mx-auto">
        <div className="mb-24 text-center">
          <Typography
            variant="h3"
            className="relative mb-5 mt-10 text-center text-2xl leading-tight tracking-normal text-primary"
          >
            Material Tailwind - Free
          </Typography>
          <Typography
            variant="h1"
            className="relative my-5 text-center text-4xl font-semibold leading-tight tracking-normal text-primary md:text-5xl"
          >
            Explore some of its features
          </Typography>
          <Typography
            variant="paragraph"
            className="relative my-5 mx-auto text-center text-lg font-normal leading-relaxed tracking-normal text-gray-600 md:text-xl lg:max-w-4xl"
          >
            Get Material Tailwind and take advantage of its free components and
            features that will help you setup your web project quickly.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {CONTENT.map(
            ({ tag, title, description, children, route }, index) => (
              <Card
                key={index}
                shadow={false}
                color="transparent"
                className={`relative !grid overflow-hidden rounded-xl border-[1.5px] border-blue-gray-50 bg-white ${
                  index === 2 ? "col-span-1 lg:col-span-2" : "col-span-1"
                }`}
              >
                <Image
                  src="https://docs.material-tailwind.com/image/header-figma.jpg"
                  alt="card background"
                  width={768}
                  height={768}
                  className="absolute left-0 -bottom-16 h-full w-full object-cover object-bottom"
                />
                <CardBody
                  className={`relative z-10 grid ${
                    index === 2 ? "gap-8 md:grid-cols-2" : ""
                  }`}
                >
                  <div className={index === 2 ? "max-w-md" : ""}>
                    <Typography variant="h6" className="text-primary">
                      {tag}
                    </Typography>
                    <Typography variant="h3" className="my-2 text-primary">
                      {title}
                    </Typography>
                    <Typography className="font-normal text-gray-600">
                      {description}
                    </Typography>
                    {route && (
                      <Link href={route} className="mt-8 inline-block">
                        <Button
                          color="gray"
                          className="bg-primary py-3 text-base font-medium capitalize"
                        >
                          Explore
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="self-end">{children}</div>
                </CardBody>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default Features;
