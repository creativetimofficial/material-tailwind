import Link from "next/link";
import Image from "next/image";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";

const DATA = [
  {
    value: "200+",
    floated: true,
    title: "Global Style",
    img: "https://docs.material-tailwind.com/image/variants.png",
    description: "Awesome color palette and realistic shadows.",
  },
  {
    floated: true,
    value: "100+",
    title: "CSS Components",
    img: "https://docs.material-tailwind.com/image/css-components.png",
    description:
      "Material Tailwind comes with a huge number of Fully Coded CSS components.",
  },
  {
    mini: true,
    value: "2",
    title: "Popular Technologies",
    img: "https://docs.material-tailwind.com/svg/popular-tech.svg",
    description: "Specially designed for React and HTML developers. ",
  },
];

export function Pro() {
  return (
    <section className="px-4 py-56">
      <div className="container mx-auto">
        <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-11/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            Level up: Material Tailwind PRO
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            Premium Tailwind CSS Components
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            Build faster your website with our exclusive collection of stunning
            component and sections that will get you started in no time!
          </Typography>
        </div>
        <div className="mt-28 grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {DATA.map(({ value, title, description, img, floated, mini }, i) => (
            <Link key={i} href="/blocks">
              <Card
                color="white"
                shadow={false}
                className="relative h-full w-full overflow-hidden border-[1.5px] border-blue-gray-50"
              >
                <div className="absolute top-0 h-full w-full scale-110 bg-[url('https://docs.material-tailwind.com/image/lines.jpg')] bg-cover bg-center bg-no-repeat" />
                <CardBody className="relative flex h-full flex-col p-6">
                  <Typography
                    variant="h2"
                    className="font-semibold text-primary"
                  >
                    {value}
                  </Typography>
                  <Typography
                    variant="h5"
                    className="my-3 font-semibold text-primary"
                  >
                    {title}
                  </Typography>
                  <Typography className="mt-1 w-10/12 font-normal !text-gray-600">
                    {description}
                  </Typography>
                  <Image
                    src={img}
                    width={768}
                    height={768}
                    className={`rounded-lg object-cover ${
                      floated ? "translate-y-3 translate-x-6 scale-110" : ""
                    } ${
                      mini
                        ? "mx-auto mt-12 scale-[0.8] lg:mt-auto"
                        : "mt-6 h-64 w-full"
                    }`}
                    alt="card-image"
                  />
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 flex">
          <Link href="/blocks" className="w-full">
            <Card
              color="white"
              shadow={false}
              className="relative min-h-[480px] w-full overflow-hidden rounded-xl border-[1.5px] border-blue-gray-50"
            >
              <div className="absolute top-40 h-full w-full scale-110 bg-[url('https://docs.material-tailwind.com/image/lines.jpg')] bg-cover bg-center bg-no-repeat" />
              <CardBody className="z-10 lg:flex">
                <div className="lg:w-4/12">
                  <Typography
                    variant="h2"
                    className="font-semibold text-primary"
                  >
                    170+
                  </Typography>
                  <Typography
                    variant="h5"
                    className="my-3 font-semibold text-primary"
                  >
                    Ready-Made Sections
                  </Typography>
                  <Typography className="w-10/12 font-normal !text-gray-600">
                    Fully coded sample sections so you could start working
                    instantly.
                  </Typography>
                </div>
                <div className="absolute right-0 bottom-0 ml-auto lg:-bottom-2 lg:w-9/12">
                  <Image
                    src="https://docs.material-tailwind.com/image/ready-made-sections.png"
                    width={1000}
                    height={1000}
                    alt="card image"
                  />
                </div>
              </CardBody>
            </Card>
          </Link>
        </div>
        <div className="mt-16 text-center">
          <Link href="/blocks">
            <Button
              size="lg"
              variant="outlined"
              className="bg-white text-base font-medium capitalize text-primary focus:ring-transparent"
            >
              Material Tailwind PRO
            </Button>
          </Link>
          <Link href="/blocks#pricing">
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

export default Pro;
