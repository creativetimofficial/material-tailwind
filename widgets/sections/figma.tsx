import Link from "next/link";
import Image from "next/image";
import { Button, Typography, Card, CardBody } from "@material-tailwind/react";

const DATA = [
  {
    title: "Color Palette",
    img: "https://docs.material-tailwind.com/image/variants.png",
    description:
      "Inspired by Material Design.Create a color theme that perfectly matches your style and brand!.",
  },
  {
    col2: true,
    floated: true,
    title: "Figma Variants",
    img: "https://docs.material-tailwind.com/image/figma-variants.png",
    description:
      "Each component comes with multiple design variants for endless creative possibilities. Add our ready-styled components to your project or modify them as you would like.",
  },
  {
    title: "Typography",
    img: "https://docs.material-tailwind.com/image/typography.png",
    description:
      "Our Figma Design Files come with implemented text styles for consistent design.",
  },
  {
    col2: true,
    title: "Built for Desktop and Mobile",
    img: "https://docs.material-tailwind.com/image/desktop-mobile.png",
    description:
      "Forget about responsiveness. With Material Tailwind we got you covered! Our design files are using features like Constraints and Auto Layout.",
  },
  {
    col2: true,
    title: "Auto Layout",
    img: "https://docs.material-tailwind.com/image/auto-layout.png",
    description:
      "Our design files feature auto layout from Figma, making it easy to change the order and width of columns and rows",
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
            <Link
              key={i}
              href="/figma"
              className={col2 ? "col-span-2" : "col-span-1"}
            >
              <Card
                color="white"
                shadow={false}
                className="relative h-full max-h-[420px] w-full overflow-hidden border-[1.5px] border-blue-gray-50"
              >
                <div className="absolute top-0 h-full w-full scale-110 bg-[url('https://docs.material-tailwind.com/image/lines.jpg')] bg-cover bg-center bg-no-repeat" />
                <CardBody className="relative flex h-full flex-col p-6">
                  <Typography
                    variant="h3"
                    className="font-semibold text-primary"
                  >
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
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/figma" target="_blank">
            <Button
              size="lg"
              variant="outlined"
              className="relative inline-flex items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-base font-medium capitalize text-primary focus:ring-transparent"
            >
              <Image
                src="https://docs.material-tailwind.com/svg/figma.svg"
                width={24}
                height={24}
                alt="Figma Logo"
                className="absolute"
              />
              <span className="pl-8">Explore in Figma</span>
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
