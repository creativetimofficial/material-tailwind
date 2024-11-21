import { Typography, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram, X, Github, Dribbble } from "iconoir-react";

const LINKS = [
  {
    title: "Company",
    items: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
      {
        title: "News",
        href: "#",
      },
    ],
  },
  {
    title: "Help Center",
    items: [
      {
        title: "Discord",
        href: "#",
      },
      {
        title: "Twitter",
        href: "#",
      },
      {
        title: "GitHub",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
      {
        title: "Free Products",
        href: "#",
      },
      {
        title: "Affiliate Program",
        href: "#",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        title: "Templates",
        href: "#",
      },
      {
        title: "UI Kits",
        href: "#",
      },
      {
        title: "Icons",
        href: "#",
      },
      {
        title: "Mockups",
        href: "#",
      },
    ],
  },
];

const YEAR = new Date().getFullYear();

export function FooterWithSitemap() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <Typography className="mb-2 font-semibold opacity-50">
                {title}
              </Typography>
              {items.map(({ title, href }) => (
                <li key={title}>
                  <Typography
                    as="a"
                    href={href}
                    className="py-1 hover:text-primary"
                  >
                    {title}
                  </Typography>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 border-t border-surface py-4 md:flex-row md:justify-between">
          <Typography type="small" className="text-center">
            &copy; {YEAR}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-1 sm:justify-center">
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Facebook className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Instagram className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <X className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Github className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Dribbble className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
