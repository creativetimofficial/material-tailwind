import Link from "next/link";
import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const DATA = [
  {
    title: "10 Website Templates",
    img: "https://docs.material-tailwind.com/image/bts-card-1.png",
    description:
      "From simple portfolio website page to complex presentation pages.",
  },
  {
    title: "Fully Coded Components",
    img: "https://docs.material-tailwind.com/image/bts-card-2.png",
    description:
      "The templates come fully coded and ready to be customized based on your needs.",
  },
  {
    title: "Designer Files Included",
    img: "https://docs.material-tailwind.com/image/bts-card-3.png",
    description:
      "If you're a designer, gain access to Figma files with each template.",
  },
];

export function BTSFeatures() {
  return (
    <section className="px-4 pb-24 pt-56">
      <div className="container mx-auto">
        <div className="mx-auto mb-10 text-center lg:w-10/12 xl:w-11/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            What&apos;s included in the bundle?
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            Developer + Designer Files
          </Typography>
          <Typography
            variant="paragraph"
            className="mx-auto my-5 max-w-3xl text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            We are offering a versatile collection of website templates,
            meticulously crafted with Tailwind CSS and React. With clean,
            responsive design, and easy-to-follow code, you&apos;ll have your
            website up and running in no time.
          </Typography>
        </div>
        <div className="mt-28 grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {DATA.map(({ title, description, img }, i) => (
            <Card
              key={i}
              color="white"
              shadow={false}
              className="relative h-full w-full overflow-hidden border-[1.5px] border-blue-gray-50"
            >
              <div className="absolute top-0 h-full w-full scale-110 bg-[url('https://docs.material-tailwind.com/image/lines.jpg')] bg-cover bg-center bg-no-repeat" />
              <CardBody className="relative flex h-full flex-col justify-between p-6">
                <div>
                  <Typography
                    variant="h2"
                    className="font-semibold text-primary"
                  >
                    {title}
                  </Typography>
                  <Typography className="mt-1 w-10/12 font-normal !text-gray-600">
                    {description}
                  </Typography>
                </div>
                <Image
                  src={img}
                  width={768}
                  height={768}
                  className="mt-6 h-64 w-full rounded-lg object-cover"
                  alt="card-image"
                />
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BTSFeatures;
