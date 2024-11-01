import Link from "next/link";
import Image from "next/image";
import { ThemeProvider, Vercel } from "@components";
import { IconButton, Typography } from "@material-tailwind/react";
import { X, Facebook, Dribbble, Github, Discord } from "iconoir-react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: X,
    link: "https://www.twitter.com/creativetim?ref=material-tailwind",
  },
  {
    icon: Facebook,
    link: "https://www.facebook.com/creativetim?ref=material-tailwind",
  },
  {
    icon: Dribbble,
    link: "https://www.dribbble.com/creativetim?ref=material-tailwind",
  },
  {
    icon: Github,
    link: "https://www.github.com/creativetimofficial?ref=material-tailwind",
  },
  {
    icon: Discord,
    link: "https://discord.com/invite/gxtg2rJa?ref=material-tailwind",
  },
];

const COMPANY = [
  {
    name: "About Us",
    link: "https://www.creative-tim.com/presentation?ref=material-tailwind",
  },
  {
    name: "Blog",
    link: "https://www.creative-tim.com/blog?ref=material-tailwind",
  },
  {
    name: "Github",
    link: "https://github.com/creativetimofficial?ref=material-tailwind",
  },
  {
    name: "Free Products",
    link: "https://www.creative-tim.com/templates/free?ref=material-tailwind",
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link: "https://www.creative-tim.com/knowledge-center?ref=material-tailwind",
  },
  {
    name: "Contact Us",
    link: "https://www.creative-tim.com/contact-us?ref=material-tailwind",
  },
  {
    name: "Premium Support",
    link: "https://www.creative-tim.com/support-terms?ref=material-tailwind",
  },
  {
    name: "Pricing",
    link: "/blocks#pricing",
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link: "/docs/v3/react/installation",
  },
  {
    name: "Custom Development",
    link: "https://www.creative-tim.com/services/updivision?ref=material-tailwind",
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/gxtg2rJa?ref=material-tailwind",
  },
  {
    name: "Tailwind Components",
    link: "https://tailwindcomponents.com/?ref=material-tailwind",
  },
];

const TECHS = [
  {
    name: "React",
    link: "/docs/v3/react/installation",
  },
  {
    name: "HTML",
    link: "/docs/html/installation",
  },
];

export function Footer() {
  return (
    <ThemeProvider>
      <footer className="mt-16 bg-background pb-6 pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12">
              <Typography type="h5" className="mb-2">
                Material Tailwind
              </Typography>
              <Typography className="text-foreground">
                Easy to use React components for Tailwind CSS and Material
                Design.
              </Typography>
              <div className="mt-6 flex items-center gap-2">
                {SOCIAL_MEDIA.map(({ icon: Icon, link }, key) => (
                  <IconButton
                    as={Link}
                    key={key}
                    href={link}
                    target="_blank"
                    color="secondary"
                    variant="outline"
                    isCircular
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </IconButton>
                ))}
              </div>
            </div>
            <div className="ml-auto w-full px-4 md:w-7/12">
              <div className="items-top mb-6 flex flex-wrap">
                <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                  <Typography color="default" className="font-semibold">
                    Company
                  </Typography>
                  <ul className="list-unstyled mt-3">
                    {COMPANY.map(({ name, link }, key) => (
                      <li key={key}>
                        <Typography
                          as={Link}
                          href={link}
                          type="small"
                          target="_blank"
                          className="block pb-2 text-foreground transition-colors hover:text-orange-500"
                        >
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <Typography color="default" className="font-semibold">
                    Help and Support
                  </Typography>
                  <ul className="list-unstyled mt-3">
                    {HELP.map(({ name, link }, key) => (
                      <li key={key}>
                        <Typography
                          as={Link}
                          href={link}
                          type="small"
                          target={name === "Pricing" ? "_self" : "_blank"}
                          className="block pb-2 text-foreground transition-colors hover:text-orange-500"
                        >
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <Typography color="default" className="font-semibold">
                    Resources
                  </Typography>
                  <ul className="list-unstyled mt-3">
                    {RESOURCES.map(({ name, link }, key) => (
                      <li key={key}>
                        <Typography
                          key={key}
                          as={Link}
                          href={link}
                          type="small"
                          target={name === "Documentation" ? "_self" : "_blank"}
                          className="block pb-2 text-foreground transition-colors hover:text-orange-500"
                        >
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                  <Typography color="default" className="font-semibold">
                    Tehnologies
                  </Typography>
                  <ul className="list-unstyled mt-3">
                    {TECHS.map(({ name, link }, key) => (
                      <li key={key}>
                        <Typography
                          key={key}
                          as={Link}
                          href={link}
                          type="small"
                          className="block pb-2 text-foreground transition-colors hover:text-orange-500"
                        >
                          {name}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-surface" />
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2 pb-2 pt-4 text-center md:justify-between">
            <Vercel />
            <div className="text-md mt-2 py-1 text-black dark:text-white">
              Copyright &copy; {YEAR}{" "}
              <Link
                href="/"
                className="text-inherit transition-colors hover:text-orange-500"
              >
                Material Tailwind
              </Link>{" "}
              by{" "}
              <Link
                href="https://www.creative-tim.com?ref=material-tailwind"
                target="_blank"
                className="text-inherit transition-colors hover:text-orange-500"
              >
                Creative Tim.&nbsp;
              </Link>
              Made with ❤️ for a better web.
            </div>
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}

export default Footer;
