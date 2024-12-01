import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FireIcon,
  TagIcon,
  HeartIcon,
  ArrowPathIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/outline";

const DATA = [
  {
    icon: <RectangleGroupIcon className="h-6 w-6" strokeWidth={2} />,
    title: 'How long is the "Back to School" Campaign available?',
    description:
      "Material Tailwind's Back to School Campaign  is available for a limited time only. It will end on October 1 2023. Be sure to take advantage of this offer before it expires.",
  },
  {
    icon: <FireIcon className="h-6 w-6" strokeWidth={2} />,
    title: 'What exactly is the "Back to School" Campaign?',
    description:
      'Our "Back to School" Campaign is a special promotion offering a bundle of 10 fully coded website templates, complete with Figma files, at an incredibly affordable price. ',
  },
  {
    icon: <TagIcon className="h-6 w-6" strokeWidth={2} />,
    title: "If I buy the bundle will I get access to every website template?",
    description:
      "Yes, if you get the bundle, you will get access to 10 website templates: Portfolio Page, Campaign Page, My Resume Page, Author Page, Courses Home Page, Course Details Page, Events Page, Blog Page, Blog Post Page, Application Page.",
  },
  {
    icon: <HeartIcon className="h-6 w-6" strokeWidth={2} />,
    title: "How many projects can I build with the bundle?",
    description:
      "You can build as many projects as you like with Material Tailwind Back to School Bundle, as long as they are not in direct competition with us.",
  },
  {
    icon: <ArrowPathIcon className="h-6 w-6" strokeWidth={2} />,
    title: 'What does "lifetime access" mean?',
    description:
      "If you purchase Material Tailwind Back to School Bundle, you will have lifelong access to the product, meaning that you will receive all future updates for free.",
  },
  {
    icon: <HandRaisedIcon className="h-6 w-6" strokeWidth={2} />,
    title:
      "How many team members can use Material Tailwind PRO with a team license?",
    description:
      "With a Material Tailwind PRO Team license, you can share the product with 10+ team members.",
  },
];

export function BTSFaq() {
  return (
    <section className="px-8 pt-8">
      <div className="container mx-auto mt-20">
        <div className="mx-auto my-20 text-center lg:w-10/12 xl:w-8/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            Back to School Exclusive
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            Browse through our frequently asked questions to find the
            information you need.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {DATA.map(({ icon, title, description }, i) => (
            <Card key={i} color="transparent" shadow={false}>
              <CardBody className="-mt-1">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white">
                  {icon}
                </div>
                <Typography
                  variant="h6"
                  className="mt-4 font-semibold !text-primary"
                >
                  {title}
                </Typography>
                <Typography className="pt-4 font-normal text-gray-600">
                  {description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BTSFaq;
