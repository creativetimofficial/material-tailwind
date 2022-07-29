// @material-tailwind/react components
import { Typography } from "@material-tailwind/react";

import SectionSubscribe from "components/sections/subscribe";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialMedia = [
    {
      icon: "fab fa-twitter",
      color: "text-light-blue-400",
      link: "https://www.twitter.com/creativetim?ref=material-tailwind",
    },
    {
      icon: "fab fa-facebook-square",
      color: "text-light-blue-600",
      link: "https://www.facebook.com/creativetim?ref=material-tailwind",
    },
    {
      icon: "fab fa-dribbble",
      color: "text-pink-400",
      link: "https://www.dribbble.com/creativetim?ref=material-tailwind",
    },
    {
      icon: "fab fa-github",
      color: "text-gray-900",
      link: "https://www.github.com/creativetimofficial?ref=material-tailwind",
    },
    {
      icon: "fab fa-discord",
      color: "text-blue-700",
      link: "https://discord.com/invite/gxtg2rJa?ref=material-tailwind",
    },
  ];

  const usefulLink = [
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

  const resources = [
    {
      name: "MIT License",
      link: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=material-tailwind",
    },
    {
      name: "Contribute",
      link: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=material-tailwind",
    },
    {
      name: "Code of Conduct",
      link: "https://github.com/creativetimofficial/material-tailwind/blob/main/CODE_OF_CONDUCT.md?ref=material-tailwind",
    },
    {
      name: "Contact Us",
      link: "https://www.creative-tim.com/contact-us?ref=material-tailwind",
    },
  ];

  return (
    <footer className="bg-gray-100 relative z-50 pt-16 pb-6 text-[#1A237E]">
      <SectionSubscribe />
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full px-4 md:w-6/12">
            <Typography variant="h3" color="inherit" className="mb-2">
              Material Tailwind
            </Typography>
            <Typography
              variant="h5"
              color="inherit"
              className="mt-0 mb-2 text-lg font-normal opacity-60"
            >
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              {socialMedia.map(({ icon, color, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} ${color} font-lg align-center mr-2 inline-block items-center justify-center rounded-full bg-white p-3 text-center shadow-lg outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="w-full px-4 md:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-4/12">
                <span className="mb-2 block text-lg font-bold text-[#1A237E]">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  {usefulLink.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal text-[#1A237E]/60"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-4/12">
                <span className="mb-2 block text-lg font-bold text-[#1A237E]">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  {resources.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal text-[#1A237E]/60"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 my-6" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <a
            href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark inline-flex items-center font-semibold no-underline"
          >
            <span className="mr-1">Powered by</span>
            <span>
              <svg height="20" viewBox="0 0 283 64" fill="none">
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                ></path>
              </svg>
            </span>
          </a>
          <div className="w-full px-4  text-center md:w-4/12 md:px-0 md:text-right">
            <div className="py-1 text-sm font-medium">
              Copyright &copy; {year} Material Tailwind by{" "}
              <a
                href="https://www.creative-tim.com?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Creative Tim.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
