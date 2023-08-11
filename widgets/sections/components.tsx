import Link from "next/link";
import Image from "next/image";
import { Typography, Button, Card } from "@material-tailwind/react";

const DATA = [
  {
    title: "Accordion",
    route: "accordion",
    img: "/image/components/accordion-thumbnail.jpg",
  },
  {
    title: "Alert",
    route: "alert",
    img: "/image/components/alert-thumbnail.jpg",
  },
  {
    title: "Avatar",
    route: "avatar",
    img: "/image/components/avatar-thumbnail.jpg",
  },
  {
    title: "Badge",
    route: "badge",
    img: "/image/components/badge-thumbnail.jpg",
  },
  {
    title: "Breadcrumbs",
    route: "breadcrumbs",
    img: "/image/components/breadcrumbs-thumbnail.jpg",
  },
  {
    title: "Button",
    route: "button",
    img: "/image/components/button-thumbnail.jpg",
  },
  {
    title: "Button Group",
    route: "button-group",
    img: "/image/components/buttongroup-thumbnail.jpg",
  },
  {
    title: "Card",
    route: "card",
    img: "/image/components/card-thumbnail.jpg",
  },
  {
    title: "Checkboxe",
    route: "checkbox",
    img: "/image/components/checkbox-thumbnail.jpg",
  },
  {
    title: "Chip",
    route: "chip",
    img: "/image/components/chip-thumbnail.jpg",
  },
  {
    title: "Collapse",
    route: "collapse",
    img: "/image/components/collapse-thumbnail.jpg",
  },
  {
    title: "Carousel",
    route: "carousel",
    img: "/image/components/carousel-thumbnail.jpg",
  },
  {
    title: "Dialog",
    route: "dialog",
    img: "/image/components/dialog-thumbnail.jpg",
  },
  {
    title: "Drawer",
    route: "drawer",
    img: "/image/components/drawer-thumbnail.jpg",
  },
  {
    title: "Icon Button",
    route: "icon-button",
    img: "/image/components/icon-button-thumbnail.jpg",
  },
  {
    title: "Input",
    route: "input",
    img: "/image/components/input-thumbnail.jpg",
  },
  {
    title: "Form",
    route: "form",
    img: "/image/components/form-thumbnail.jpg",
  },
  {
    title: "List",
    route: "list",
    img: "/image/components/list-thumbnail.jpg",
  },
  {
    title: "Menu",
    route: "menu",
    img: "/image/components/menu-thumbnail.jpg",
  },
  {
    title: "Navbar",
    route: "navbar",
    img: "/image/components/navbar-thumbnail.jpg",
  },
  {
    title: "Popover",
    route: "popover",
    img: "/image/components/popover-thumbnail.jpg",
  },
  {
    title: "Progress Bar",
    route: "progress-bar",
    img: "/image/components/progress-bar-thumbnail.jpg",
  },
  {
    title: "Pagination",
    route: "pagination",
    img: "/image/components/pagination-thumbnail.jpg",
  },
  {
    title: "Radio Button",
    route: "radio-button",
    img: "/image/components/radio-button-thumbnail.jpg",
  },
  {
    title: "Rating Bar",
    route: "rating-bar",
    img: "/image/components/ratingbar-thumbnail.jpg",
  },
  {
    title: "Select",
    route: "select",
    img: "/image/components/select-thumbnail.jpg",
  },
  {
    title: "Slider",
    route: "slider",
    img: "/image/components/slider-thumbnail.jpg",
  },
  {
    title: "Speed Dial",
    route: "speeddial",
    img: "/image/components/speeddial-thumbnail.jpg",
  },
  {
    title: "Spinner",
    route: "spinner",
    img: "/image/components/spinner-thumbnail.jpg",
  },
  {
    title: "Stepper",
    route: "stepper",
    img: "/image/components/stepper-thumbnail.jpg",
  },
  {
    title: "Switch",
    route: "switch",
    img: "/image/components/switch-thumbnail.jpg",
  },
  {
    title: "Tabs",
    route: "tabs",
    img: "/image/components/tabs-thumbnail.jpg",
  },
  {
    title: "Text Area",
    route: "textarea",
    img: "/image/components/text-area-thumbnail.jpg",
  },
  {
    title: "Timeline",
    route: "timeline",
    img: "/image/components/timeline-thumbnail.jpg",
  },
  {
    title: "Tooltip",
    route: "tooltip",
    img: "/image/components/tooltip-thumbnail.jpg",
  },
  {
    title: "Typography",
    route: "typography",
    img: "/image/components/typography-thumbnail.jpg",
  },
  {
    title: "Footer",
    route: "footer",
    img: "/image/components/footer-thumbnail.jpg",
  },
  {
    title: "Image",
    route: "img",
    img: "/image/components/img-thumbnail.jpg",
  },
  {
    title: "Video",
    route: "video",
    img: "/image/components/video-thumbnail.jpg",
  },
  {
    title: "Sidebar",
    route: "sidebar",
    img: "/image/components/sidebar-thumbnail.jpg",
  },
  {
    title: "Table",
    route: "table",
    img: "/image/components/table-thumbnail.jpg",
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
            200+ Tailwind CSS Components
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
          {DATA.map(({ img, title, route }, i) => (
            <Link
              href={`/docs/react/${route}`}
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
                className="mt-3 ml-1.5 text-gray-600 transition-colors peer-hover:text-primary"
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

export default Components;
