import Link from "next/link";
import Image from "next/image";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

const DATA = [
  {
    title: "Colors and Styles",
    img: "/image/variants.png",
    description:
      "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    col2: true,
    floated: true,
    title: "Figma Variants",
    img: "/image/figma-variants.png",
    description:
      "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    title: "Typography",
    img: "/image/typography.png",
    description:
      "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    col2: true,
    title: "Built for Desktop and Mobile",
    img: "/image/desktop-mobile.png",
    description:
      "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
  {
    col2: true,
    title: "Auto Layout",
    img: "/image/auto-layout.png",
    description:
      "Material Tailwind Pro features all the React or HTML components. Material Tailwind Pro features all the React or HTML components.",
  },
];

export function Figma() {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="mx-auto my-20 text-center lg:w-10/12 xl:w-8/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            A Must-Have
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            Figma Design Files
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            Now, you can effortlessly customize and prototype your designs,
            saving valuable time while ensuring smooth collaboration with your
            team.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-4 lg:gap-x-6">
          {DATA.map(({ title, img, description, floated, col2 }, i) => (
            <Card
              key={i}
              color="white"
              shadow={false}
              className={`relative h-full max-h-[420px] w-full overflow-hidden border-[1.5px] border-blue-gray-50 ${
                col2 ? "col-span-2" : "col-span-1"
              }`}
            >
              <div className="absolute top-0 h-full w-full scale-110 bg-[url('/image/lines.jpg')] bg-cover bg-center bg-no-repeat" />
              <CardBody className="relative flex h-full flex-col p-6">
                <Typography variant="h3" className="font-semibold text-primary">
                  {title}
                </Typography>
                <Typography className="mt-1 mb-4 w-10/12 font-normal !text-gray-600">
                  {description}
                </Typography>
                <Image
                  src={img}
                  width={768}
                  height={768}
                  alt="card-image"
                  className={`mt-auto rounded-lg object-cover ${
                    floated ? "translate-y-3 translate-x-6 scale-110" : ""
                  }`}
                />
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="https://www.figma.com/file/UxNLsnbwl4Hps3KdbFvcgK/Material-Tailwind-Figma-v2.0.0?type=design&node-id=916%3A5781&mode=design&t=ysoJhYSAH7d3PZ02-1">
            <Button
              size="lg"
              variant="outlined"
              className="relative inline-flex items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-base font-medium capitalize text-primary focus:ring-transparent"
            >
              <Image
                src="/svg/figma.svg"
                width={24}
                height={24}
                alt="Figma Logo"
                className="absolute"
              />
              <span className="pl-8">Preview in Figma</span>
            </Button>
          </Link>
          <Link href="/figma#pricing">
            <Button
              size="lg"
              variant="filled"
              color="gray"
              className="ml-4 bg-primary text-base font-medium capitalize"
            >
              Pricing & FAQ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Figma;
