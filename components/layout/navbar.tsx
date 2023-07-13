import { useState, useEffect } from "react";

// next.js components
import Link from "next/link";
import { useRouter } from "next/router";

// @material-tailwind/react components
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Chip,
  Button,
} from "@material-tailwind/react";
import { CurrencyDollarIcon, Square3Stack3DIcon as BlocksIcon } from "@heroicons/react/24/solid";

function formatNumber(number, decPlaces) {
  decPlaces = Math.pow(10, decPlaces);

  const abbrev = ["K", "M", "B", "T"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    var size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number == 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];

      break;
    }
  }

  return number;
}

interface NavbarProps {
  container?: string;
  className?: string;
  shadow?: boolean;
  sidenavMenu?: any;
  mobileNavClassName?: string;
  [key: string]: any;
}

export default function Navbar({
  container,
  className,
  shadow,
  sidenavMenu,
  mobileNavClassName = "text-[#1A237E]",
  ...rest
}: NavbarProps) {
  const { query } = useRouter();
  const [open, setOpen] = useState(false);
  const [stars, setStars] = useState(0);
  const navbarItemClasses =
    "flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current font-light lg:px-2 cursor-pointer";

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpen(false);
    });
  }, []);

  useEffect(() => {
    const stars = fetch(
      "https://api.github.com/repos/creativetimofficial/material-tailwind"
    )
      .then((response) => response.json())
      .then((data) => setStars(formatNumber(data.stargazers_count, 1)));
  }, []);

  const menuOpenIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  const menuCloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  const navbarMenu = (
    <div className="flex w-full flex-col lg:flex-row">
      <ul
        className={`${
          open ? "mt-4" : ""
        } mb-0 flex list-none flex-col gap-2 pl-0 text-inherit transition-all lg:ml-auto lg:flex-row lg:gap-4`}
      >
        <Menu placement="bottom" offset={-2.5}>
          <MenuHandler>
            <li>
              <span className={navbarItemClasses}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-1.5 h-[18px] w-[18px] opacity-75"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                    clipRule="evenodd"
                  />
                  <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                </svg>
                <span>Docs</span>
              </span>
            </li>
          </MenuHandler>
          <MenuList>
            <MenuItem className="p-0">
              <Link
                href="/docs/html/installation"
                className={`${navbarItemClasses} lg:px-3`}
              >
                HTML
              </Link>
            </MenuItem>
            <MenuItem className="p-0">
              <Link
                href="/docs/react/installation"
                className={`${navbarItemClasses} px-3 py-2 lg:px-3`}
              >
                ReactJS
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <li>
          <Link
            href="/blocks"
            className={`${navbarItemClasses} px-3 py-2 lg:px-3`}
          >
            <BlocksIcon className="mr-1.5 h-[18px] w-[18px] opacity-75" />
            Blocks
          </Link>
        </li>
        <li>
          <a
            href="https://www.creative-tim.com/services/updivision/?ref=material-tailwind"
            target="_blank"
            rel="noreferrer"
            className={`${navbarItemClasses} px-3 py-2 lg:px-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-1.5 h-[18px] w-[18px] text-inherit opacity-75"
            >
              <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
            </svg>
            Custom Development
          </a>
        </li>
      </ul>
      <div className="mt-4 flex flex-col border-t border-blue-gray-50 pt-4 lg:mt-0 lg:ml-auto lg:flex-row lg:border-0 lg:pt-0">
        <ul className="flex items-center">
          <Tooltip content="Help with a star" placement="bottom" offset={-2.5}>
            <li className="mr-2">
              <a
                className={navbarItemClasses}
                href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                target="_blank"
                rel="noreferrer"
              >
                <Chip
                  value={stars}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-[2.5px] ml-0.5 h-3.5 w-3.5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  className="mr-1.5 bg-blue-gray-900 py-[3px] px-2 text-xs"
                />
                <i className="fab fa-github text-xl leading-none" />
              </a>
            </li>
          </Tooltip>
          <Tooltip
            content="Join our community"
            placement="bottom"
            offset={-2.5}
          >
            <li className="mt-[3px]">
              <a
                className={navbarItemClasses}
                href="https://discord.com/invite/7xzMRsRebr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-discord text-lg leading-none" />
              </a>
            </li>
          </Tooltip>
        </ul>
        <Link href="/blocks#pricing">
          <Button
            variant="gradient"
            className="mt-3 mb-6 flex w-full items-center justify-center lg:mt-0 lg:mb-0 lg:ml-4 lg:w-auto"
          >
            <CurrencyDollarIcon className="mr-1.5 -mt-px h-[18px] w-[18px]" />
            See Pricing
          </Button>
        </Link>
      </div>
    </div>
  );

  return (
    <div
      className={`absolute left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed ${container}`}
    >
      <MTNavbar
        {...rest}
        className={`py-4 pl-6 pr-2 lg:py-2.5 ${
          shadow ? "shadow-2xl shadow-blue-gray-500/10" : ""
        }`}
        shadow={shadow}
      >
        <div
          className={`flex w-full items-center !justify-between text-[#1A237E] ${className}`}
        >
          <Link
            href="/"
            className="py-2.375 text-size-sm mr-4 whitespace-nowrap font-bold text-inherit lg:ml-0"
          >
            Material Tailwind
          </Link>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpen(!open)}
          >
            {open ? menuCloseIcon : menuOpenIcon}
          </IconButton>
          <div className="lg:base-auto hidden flex-grow basis-full items-center overflow-hidden lg:flex lg-max:max-h-0">
            {navbarMenu}
          </div>
        </div>

        <Collapse open={open} className={mobileNavClassName}>
          {navbarMenu}
        </Collapse>
        {sidenavMenu}
      </MTNavbar>
    </div>
  );
}
