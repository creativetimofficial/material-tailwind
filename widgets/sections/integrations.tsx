import Image from "next/image";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";

const CONTENT = [
  {
    title: "React",
    img: "https://docs.material-tailwind.com/svg/react.svg",
    route: "/docs/react/installation",
    description:
      "Open-source JavaScript framework and library developed by Facebook.",
  },
  {
    title: "Html",
    img: "https://docs.material-tailwind.com/svg/html.svg",
    route: "/docs/html/installation",
    description: "The standard markup language for creating Web pages.",
  },
  {
    title: "Next.js",
    img: "https://docs.material-tailwind.com/svg/nextjs.svg",
    route: "/docs/react/guide/next",
    description:
      "React framework that gives you building blocks to create web apps.",
  },
  {
    title: "Create React App",
    img: "https://docs.material-tailwind.com/svg/cra.svg",
    route: "/docs/react/guide/cra",
    description: "Set up a modern web app by running one command.",
  },
  {
    title: "Remix",
    img: "https://docs.material-tailwind.com/svg/remix.svg",
    route: "/docs/react/guide/remix",
    description:
      "Full stack web framework that lets you focus on the user interface.",
  },
  {
    title: "Vite",
    img: "https://docs.material-tailwind.com/svg/vitejs.svg",
    route: "/docs/react/guide/vite",
    description: "Flexible programmatic APIs with full TypeScript typing.",
  },
  {
    title: "Astro",
    img: "https://docs.material-tailwind.com/svg/astro.svg",
    route: "/docs/react/guide/astro",
    description: "All-in-one web framework designed for speed.",
  },
  {
    title: "Gatsby",
    img: "https://docs.material-tailwind.com/svg/gatsby.svg",
    route: "/docs/react/guide/gatsby",
    description: "The Fastest Frontend for the Headless Web.",
  },
];

export function Integrations() {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <Typography
          variant="h1"
          className="relative mb-3 mt-5 text-3xl font-semibold leading-tight tracking-normal text-primary md:text-4xl"
        >
          Tailwind CSS Framework Integrations
        </Typography>
        <Typography
          variant="paragraph"
          className="text-md relative mb-5 font-normal leading-relaxed tracking-normal text-gray-600 md:text-lg"
        >
          Enhance your workflow with seamless integrations for your favorite
          tools using Material Tailwind.
        </Typography>
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {CONTENT.map(({ title, description, route, img }, index) => (
            <Link key={index} href={route}>
              <Card
                shadow={false}
                color="transparent"
                className="overflow-hidden rounded-xl border-[1.5px] border-blue-gray-50 transition-colors duration-300 hover:border-blue-gray-100"
              >
                <div className="absolute top-0 h-full w-full bg-[url('https://docs.material-tailwind.com/image/header-figma.jpg')] bg-cover bg-center bg-no-repeat"></div>
                <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="flex items-center"
                >
                  <Image
                    src={img}
                    width={480}
                    height={480}
                    alt="card image"
                    className="h-8 w-8"
                  />
                </CardHeader>
                <CardBody className="relative z-10 p-4">
                  <Typography className="mb-1 text-lg font-semibold text-gray-900">
                    {title}
                  </Typography>
                  <Typography className="font-normal text-gray-600">
                    {description}
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;
