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

        {/* 
        
        
        Hide card for black friday offer


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
        )} */}
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
            href="https://www.creative-tim.com?ref=material-tailwind"
            target="_blank"
            className="inline-flex items-center font-semibold text-primary no-underline"
          >
            <span className="mr-1">Powered by</span>
            <span>Creative Tim</span>
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
