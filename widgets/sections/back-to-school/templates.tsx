import Link from "next/link";
import Image from "next/image";
import { Typography, Card } from "@material-tailwind/react";

const DATA = [
  {
    title: "Campaign Page",
    img: "https://docs.material-tailwind.com/image/templates/campaign-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-18618&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Portfolio Page",
    img: "https://docs.material-tailwind.com/image/templates/portfolio-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-18254&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "My Resume Page",
    img: "https://docs.material-tailwind.com/image/templates/my-resume-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-17969&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Author Page",
    img: "https://docs.material-tailwind.com/image/templates/author-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-17811&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Courses Home Page",
    img: "https://docs.material-tailwind.com/image/templates/courses-home-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-17456&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Course Details Page",
    img: "https://docs.material-tailwind.com/image/templates/courses-details-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-17220&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Events Page",
    img: "https://docs.material-tailwind.com/image/templates/events-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-16958&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Blog Page",
    img: "https://docs.material-tailwind.com/image/templates/blog-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-16712&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Blog Post Page",
    img: "https://docs.material-tailwind.com/image/templates/blog-post-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=1-16447&mode=design&t=hz47kqVjnJgzymHM-0",
  },
  {
    title: "Application Page",
    img: "https://docs.material-tailwind.com/image/templates/application-page-thumbnail.jpg",
    route:
      "https://www.figma.com/file/dW9TIA7QOMaDOvEbfv0E7s/Material-Tailwind-%22Back-to-School%22-Bundle?type=design&node-id=0-1&mode=design&t=hz47kqVjnJgzymHM-0",
  },
];

export function BTSTemplates() {
  return (
    <section className="p-4" id="templates">
      <div className="container mx-auto">
        <div className="mx-auto my-20 text-center lg:w-10/12 xl:w-8/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            Explore our Back to School templates
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            10 Website Templates for Every Need
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            Whether you&apos;re a student or professional, these starter
            templates will help you build quick and hassle-free your website.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {DATA.map(({ img, title, route }, i) => (
            <Link
              href={route}
              target="_blank"
              className="mt-8 cursor-pointer"
              key={i}
            >
              <Card
                color="white"
                shadow={false}
                className="peer relative h-48 w-full overflow-hidden rounded-xl border-[1.5px] border-blue-gray-50 transition-colors hover:border-blue-gray-100"
              >
                <Image
                  src={img}
                  alt={title}
                  width={1280}
                  height={1280}
                  className="object-no-repeat h-full w-full object-cover object-center"
                />
              </Card>
              <Typography
                variant="h6"
                className="ml-1.5 mt-3 text-gray-600 transition-colors peer-hover:text-primary"
              >
                {title}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BTSTemplates;
