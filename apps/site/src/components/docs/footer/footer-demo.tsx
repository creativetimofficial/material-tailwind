import { Typography } from "@material-tailwind/react/dist";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "License",
    href: "#",
  },
  {
    title: "Contribute",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

export function FooterDemo() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t border-secondary-dark py-4 text-center md:justify-between dark:border-secondary-dm-main">
      <Typography>&copy; {YEAR} Material Tailwind</Typography>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map(({ title, href }) => (
          <li>
            <Typography
              as="a"
              href={href}
              className="hover:text-info-main dark:text-info-dm-main"
            >
              {title}
            </Typography>
          </li>
        ))}
      </ul>
    </footer>
  );
}
