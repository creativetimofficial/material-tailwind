import { Typography, IconButton } from "@material-tailwind/react";
import { Facebook, Instagram, X, Github, Dribbble } from "iconoir-react";

const LINKS = [
  {
    title: "Product",
    items: [
      {
        title: "Overview",
        href: "#",
      },
      {
        title: "Features",
        href: "#",
      },
      {
        title: "Solutions",
        href: "#",
      },
      {
        title: "Tutorials",
        href: "#",
      },
    ],
  },
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
    title: "Resource",
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
        title: "Events",
        href: "#",
      },
      {
        title: "Help center",
        href: "#",
      },
    ],
  },
];

const YEAR = new Date().getFullYear();

export default function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography type="h6" className="mb-4">
            Material Tailwind
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4">
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
