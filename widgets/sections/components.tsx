import Image from "next/image";
import { Typography, Button, Card } from "@material-tailwind/react";

const DATA = [
  {
    title: "Accordion",
    img: "/image/components/accordion-thumbnail.jpg",
  },
  {
    title: "Alerts",
    img: "/image/components/alert-thumbnail.jpg",
  },
  {
    title: "Avatars",
    img: "/image/components/avatar-thumbnail.jpg",
  },
  {
    title: "Breadcrumbs",
    img: "/image/components/breadcrumbs-thumbnail.jpg",
  },
  {
    title: "Buttons",
    img: "/image/components/button-thumbnail.jpg",
  },
  {
    title: "Cards",
    img: "/image/components/card-thumbnail.jpg",
  },
  {
    title: "Checkboxes",
    img: "/image/components/checkbox-thumbnail.jpg",
  },
  {
    title: "Chips",
    img: "/image/components/chip-thumbnail.jpg",
  },
  {
    title: "Dialogs",
    img: "/image/components/dialog-thumbnail.jpg",
  },
  {
    title: "Icon Buttons",
    img: "/image/components/icon-button-thumbnail.jpg",
  },
  {
    title: "Inputs",
    img: "/image/components/input-thumbnail.jpg",
  },
  {
    title: "Menus",
    img: "/image/components/menu-thumbnail.jpg",
  },
  {
    title: "Navbars",
    img: "/image/components/navbar-thumbnail.jpg",
  },
  {
    title: "Pagination",
    img: "/image/components/pagination-thumbnail.jpg",
  },
  {
    title: "Popovers",
    img: "/image/components/popover-thumbnail.jpg",
  },
  {
    title: "Progress Bars",
    img: "/image/components/progress-bar-thumbnail.jpg",
  },
  {
    title: "Radio Buttons",
    img: "/image/components/radio-button-thumbnail.jpg",
  },
  {
    title: "Selects",
    img: "/image/components/select-thumbnail.jpg",
  },
  {
    title: "Switch",
    img: "/image/components/switch-thumbnail.jpg",
  },
  {
    title: "Tabs",
    img: "/image/components/tabs-thumbnail.jpg",
  },
  {
    title: "Text Areas",
    img: "/image/components/text-area-thumbnail.jpg",
  },
  {
    title: "Tooltips",
    img: "/image/components/tooltip-thumbnail.jpg",
  },
  {
    title: "Typography",
    img: "/image/components/typography-thumbnail.jpg",
  },
  {
    title: "Tabs",
    img: "/image/components/tabs-thumbnail.jpg",
  },
];

export function Components() {
  return (
    <section className="p-4">
      <div className="container mx-auto">
        <div className="mx-auto my-20 text-center lg:w-10/12 xl:w-8/12">
          <Typography variant="h3" className="mb-5 text-center text-primary">
            Ready-to-use
          </Typography>
          <Typography
            variant="h1"
            className="my-5 text-center text-4xl font-semibold text-primary md:text-5xl"
          >
            X+ Tailwind CSS Components
          </Typography>
          <Typography
            variant="paragraph"
            className="my-5 text-center text-lg font-normal !text-gray-600 md:text-xl"
          >
            Our ready-to-use Tailwind CSS components, like buttons, inputs,
            cards, tables and more, will help you create visually appealing web
            pages for your project in a fraction of the time!
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DATA.map(({ img, title }, i) => (
            <div className="mt-8 cursor-pointer" key={i}>
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
                className="mt-3 ml-1.5 text-gray-600 transition-colors peer-hover:text-primary"
              >
                {title}
              </Typography>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outlined"
            className="relative inline-flex items-center gap-3 border-[1.5px] border-blue-gray-50 bg-white text-base font-medium capitalize text-primary focus:ring-transparent"
          >
            Check out all components
          </Button>
          <Button
            size="lg"
            color="gray"
            variant="filled"
            className="ml-4 bg-primary text-base font-medium capitalize"
          >
            Documentation
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Components;
