import Link from "next/link";
import Image from "next/image";
import { Typography, Card } from "@material-tailwind/react";

const DATA = [
  {
    title: "Accordion",
    route: "accordion",
    img: "https://docs.material-tailwind.com/image/components/accordion-thumbnail.jpg",
  },
  {
    title: "Alert",
    route: "alert",
    img: "https://docs.material-tailwind.com/image/components/alert-thumbnail.jpg",
  },
  {
    title: "Avatar",
    route: "avatar",
    img: "https://docs.material-tailwind.com/image/components/avatar-thumbnail.jpg",
  },
  {
    title: "Badge",
    route: "badge",
    img: "https://docs.material-tailwind.com/image/components/badge-thumbnail.jpg",
  },
  {
    title: "Breadcrumbs",
    route: "breadcrumbs",
    img: "https://docs.material-tailwind.com/image/components/breadcrumbs-thumbnail.jpg",
  },
  {
    title: "Button",
    route: "button",
    img: "https://docs.material-tailwind.com/image/components/button-thumbnail.jpg",
  },
  {
    title: "Button Group",
    route: "button-group",
    img: "https://docs.material-tailwind.com/image/components/buttongroup-thumbnail.jpg",
  },
  {
    title: "Card",
    route: "card",
    img: "https://docs.material-tailwind.com/image/components/card-thumbnail.jpg",
  },
  {
    title: "Checkbox",
    route: "checkbox",
    img: "https://docs.material-tailwind.com/image/components/checkbox-thumbnail.jpg",
  },
  {
    title: "Chip",
    route: "chip",
    img: "https://docs.material-tailwind.com/image/components/chip-thumbnail.jpg",
  },
  {
    title: "Collapse",
    route: "collapse",
    img: "https://docs.material-tailwind.com/image/components/collapse-thumbnail.jpg",
  },
  {
    title: "Carousel",
    route: "carousel",
    img: "https://docs.material-tailwind.com/image/components/carousel-thumbnail.jpg",
  },
  {
    title: "Dialog",
    route: "dialog",
    img: "https://docs.material-tailwind.com/image/components/dialog-thumbnail.jpg",
  },
  {
    title: "Drawer",
    route: "drawer",
    img: "https://docs.material-tailwind.com/image/components/drawer-thumbnail.jpg",
  },
  {
    title: "Icon Button",
    route: "icon-button",
    img: "https://docs.material-tailwind.com/image/components/icon-button-thumbnail.jpg",
  },
  {
    title: "Input",
    route: "input",
    img: "https://docs.material-tailwind.com/image/components/input-thumbnail.jpg",
  },
  {
    title: "Form",
    route: "form",
    img: "https://docs.material-tailwind.com/image/components/form-thumbnail.jpg",
  },
  {
    title: "List",
    route: "list",
    img: "https://docs.material-tailwind.com/image/components/list-thumbnail.jpg",
  },
  {
    title: "Menu",
    route: "menu",
    img: "https://docs.material-tailwind.com/image/components/menu-thumbnail.jpg",
  },
  {
    title: "Navbar",
    route: "navbar",
    img: "https://docs.material-tailwind.com/image/components/navbar-thumbnail.jpg",
  },
  {
    title: "Popover",
    route: "popover",
    img: "https://docs.material-tailwind.com/image/components/popover-thumbnail.jpg",
  },
  {
    title: "Progress Bar",
    route: "progress-bar",
    img: "https://docs.material-tailwind.com/image/components/progress-bar-thumbnail.jpg",
  },
  {
    title: "Pagination",
    route: "pagination",
    img: "https://docs.material-tailwind.com/image/components/pagination-thumbnail.jpg",
  },
  {
    title: "Radio Button",
    route: "radio-button",
    img: "https://docs.material-tailwind.com/image/components/radio-button-thumbnail.jpg",
  },
  {
    title: "Rating Bar",
    route: "rating-bar",
    img: "https://docs.material-tailwind.com/image/components/ratingbar-thumbnail.jpg",
  },
  {
    title: "Select",
    route: "select",
    img: "https://docs.material-tailwind.com/image/components/select-thumbnail.jpg",
  },
  {
    title: "Slider",
    route: "slider",
    img: "https://docs.material-tailwind.com/image/components/slider-thumbnail.jpg",
  },
  {
    title: "Speed Dial",
    route: "speeddial",
    img: "https://docs.material-tailwind.com/image/components/speeddial-thumbnail.jpg",
  },
  {
    title: "Spinner",
    route: "spinner",
    img: "https://docs.material-tailwind.com/image/components/spinner-thumbnail.jpg",
  },
  {
    title: "Stepper",
    route: "stepper",
    img: "https://docs.material-tailwind.com/image/components/stepper-thumbnail.jpg",
  },
  {
    title: "Switch",
    route: "switch",
    img: "https://docs.material-tailwind.com/image/components/switch-thumbnail.jpg",
  },
  {
    title: "Tabs",
    route: "tabs",
    img: "https://docs.material-tailwind.com/image/components/tabs-thumbnail.jpg",
  },
  {
    title: "Text Area",
    route: "textarea",
    img: "https://docs.material-tailwind.com/image/components/text-area-thumbnail.jpg",
  },
  {
    title: "Timeline",
    route: "timeline",
    img: "https://docs.material-tailwind.com/image/components/timeline-thumbnail.jpg",
  },
  {
    title: "Tooltip",
    route: "tooltip",
    img: "https://docs.material-tailwind.com/image/components/tooltip-thumbnail.jpg",
  },
  {
    title: "Typography",
    route: "typography",
    img: "https://docs.material-tailwind.com/image/components/typography-thumbnail.jpg",
  },
  {
    title: "Footer",
    route: "footer",
    img: "https://docs.material-tailwind.com/image/components/footer-thumbnail.jpg",
  },
  {
    title: "Image",
    route: "img",
    img: "https://docs.material-tailwind.com/image/components/img-thumbnail.jpg",
  },
  {
    title: "Video",
    route: "video",
    img: "https://docs.material-tailwind.com/image/components/video-thumbnail.jpg",
  },
  {
    title: "Sidebar",
    route: "sidebar",
    img: "https://docs.material-tailwind.com/image/components/sidebar-thumbnail.jpg",
  },
  {
    title: "Table",
    route: "table",
    img: "https://docs.material-tailwind.com/image/components/table-thumbnail.jpg",
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
            460+ Tailwind CSS Components
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

export default Components;
