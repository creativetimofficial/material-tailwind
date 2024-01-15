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

export function FooterWithLogo() {
  return (
    <footer className="w-full">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
        <img src="/logo.png" alt="brand" className="w-8" />
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
      </div>
      <hr className="my-4 border-secondary-dark dark:border-secondary-main" />
      <Typography className="text-center">
        &copy; {YEAR} Material Tailwind
      </Typography>
    </footer>
  );
}
