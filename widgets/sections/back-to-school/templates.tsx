import Image from "next/image";
import { Typography, Card } from "@material-tailwind/react";

const DATA = [
  {
    title: "Campaign Page",
    img: "/image/templates/campaign-page-thumbnail.jpg",
  },
  {
    title: "Portfolio Page",
    img: "/image/templates/portfolio-page-thumbnail.jpg",
  },
  {
    title: "My Resume Page",
    img: "/image/templates/my-resume-page-thumbnail.jpg",
  },
  {
    title: "Author Page",
    img: "/image/templates/author-page-thumbnail.jpg",
  },
  {
    title: "Courses Home Page",
    img: "/image/templates/courses-home-page-thumbnail.jpg",
  },
  {
    title: "Course Details Page",
    img: "/image/templates/courses-details-page-thumbnail.jpg",
  },
  {
    title: "Events Page",
    img: "/image/templates/events-page-thumbnail.jpg",
  },
  {
    title: "Blog Page",
    img: "/image/templates/blog-page-thumbnail.jpg",
  },
  {
    title: "Blog Post Page",
    img: "/image/templates/blog-post-page-thumbnail.jpg",
  },
  {
    title: "Application Page",
    img: "/image/templates/application-page-thumbnail.jpg",
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
          {DATA.map(({ img, title }, i) => (
            <div key={i}>
              <Card
                color="white"
                shadow={false}
                className="relative h-48 w-full overflow-hidden rounded-xl border-[1.5px] border-blue-gray-50"
              >
                <Image
                  src={img}
                  alt={title}
                  width={1280}
                  height={1280}
                  className="object-no-repeat h-full w-full object-cover object-center"
                />
              </Card>
              <Typography variant="h6" className="ml-1.5 mt-3 text-gray-600">
                {title}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BTSTemplates;
