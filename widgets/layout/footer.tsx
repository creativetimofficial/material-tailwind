import Link from "next/link";
import Image from "next/image";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const CARD_FOOTER_NOTIFICATION_STORAGE_KEY = "card-footer-notification";
const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com/creativetim?ref=material-tailwind",
  },
  {
    icon: "fab fa-facebook-square",
    link: "https://www.facebook.com/creativetim?ref=material-tailwind",
  },
  {
    icon: "fab fa-dribbble",
    link: "https://www.dribbble.com/creativetim?ref=material-tailwind",
  },
  {
    icon: "fab fa-github",
    link: "https://www.github.com/creativetimofficial?ref=material-tailwind",
  },
  {
    icon: "fab fa-discord",
    link: "https://discord.com/invite/FhCJCaHdQa?ref=material-tailwind",
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
    link: "/docs/react/installation",
  },
  {
    name: "Custom Development",
    link: "https://www.creative-tim.com/services/updivision?ref=material-tailwind",
  },
  {
    name: "Discord",
    link: "https://discord.com/invite/FhCJCaHdQa?ref=material-tailwind",
  },
  {
    name: "Tailwind Components",
    link: "https://tailwindcomponents.com/?ref=material-tailwind",
  },
];

const TECHS = [
  {
    name: "React",
    link: "/docs/react/installation",
  },
  {
    name: "HTML",
    link: "/docs/html/installation",
  },
];

export function Footer() {

  const [isVisibleCardNotification, setIsVisibleCardNotification] = useState(false);

  useEffect(() => {
    const shouldHide = localStorage.getItem(CARD_FOOTER_NOTIFICATION_STORAGE_KEY);
    if (!shouldHide) {
      setIsVisibleCardNotification(true);
    }

    const hideUntil = Number(shouldHide);
    const now = new Date().getTime();
    if (hideUntil && now > hideUntil) {
      setIsVisibleCardNotification(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisibleCardNotification(false);
    // add 2 days
    const hideUntil = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem(CARD_FOOTER_NOTIFICATION_STORAGE_KEY, hideUntil.toString());
  };

  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-5 w-5"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    );
  }


  return (
    <footer className="relative z-50 bg-white px-8 pb-6 pt-12">

        {isVisibleCardNotification && (
        <Card color="gray" className="fixed bottom-2 left-1/2 -translate-x-[calc(50%+40px)] max-w-[880px]">
          <CardBody className="px-4 py-2.5">
            <div className="flex flex-col lg:flex-row justify-between pr-12">
              <div className="pr-4">
                <Typography variant="h5" className="mb-1">
                  Material Tailwind v3 - released
                </Typography>
                <Typography variant="small" color="white" className="font-normal">
                  New features and improvements, 300+ Components with variations, 290+ PRO Blocks, AI and more.
                </Typography>
              </div>
              <div className="flex flex-row mt-6 lg:mt-0 gap-1 ml-4 items-center min-w-[230px] justify-center lg:justify-end">
                <Link href="/v3" target="_blank">
                  <Button
                    size="sm"
                    color="white"
                    className="normal-case border"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link href="/docs/v3/html/installation" target="_blank">
                  <Button
                    size="sm"
                    color="white"
                    variant="outlined"
                    className="normal-case"
                  >
                    Docs
                  </Button>
                </Link>
              </div>
            </div>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 font-bold !text-grey-900 transition-colors opacity-50 hover:opacity-100"
              onClick={() => handleClose()}
            >
              <Icon />
            </button>

          </CardBody>
        </Card>
        )}
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              Material Tailwind
            </Typography>
            <Typography className="text-md mb-2 mt-0 font-normal !text-gray-600">
              Easy to use React components for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Technologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <Link
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 text-center md:justify-between">
          <a
            href="https://vercel.com/?utm_source=ct-tailwind-team&utm_campaign=oss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold text-primary no-underline"
          >
            <span className="mr-1">Powered by</span>
            <span>
              <svg height="22" viewBox="0 0 283 64" fill="none">
                <path
                  fill="currentColor"
                  d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                ></path>
              </svg>
            </span>
          </a>
          <div className="text-md mt-2 py-1 font-normal text-gray-600">
            Copyright &copy; {YEAR}{" "}
            <Link href="/" className="text-inherit transition-all">
              Material Tailwind
            </Link>{" "}
            by{" "}
            <a
              href="https://www.creative-tim.com?ref=material-tailwind"
              target="_blank"
              rel="noreferrer"
              className="text-inherit transition-all"
            >
              Creative Tim. Made with ❤️ for a better web.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
