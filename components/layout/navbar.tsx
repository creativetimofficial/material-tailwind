import { useState, useEffect, useRef } from "react";

// next.js components
import Link from "next/link";

// @material-tailwind/react components
import {
  Navbar as MTNavbar,
  MobileNav,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

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
  const [open, setOpen] = useState(false);
  const navbarItemClasses =
    "flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-current font-light lg:px-2 cursor-pointer";

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpen(false);
    });
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
    <ul
      className={`${
        open ? "mt-4" : ""
      } mb-0 flex list-none flex-col gap-2 pl-0 text-inherit transition-all lg:ml-auto lg:flex-row lg:gap-4`}
    >
      <Menu placement="bottom" offset={-2.5}>
        <MenuHandler>
          <li>
            <span className={navbarItemClasses}>
              <i className="material-icons mr-2 !text-base opacity-60">
                article
              </i>
              <span>Docs</span>
            </span>
          </li>
        </MenuHandler>
        <MenuList>
          <MenuItem className="!p-0">
            <Link href="/docs/html/installation">
              <a className={`${navbarItemClasses} px-3 py-2 lg:px-3`}>HTML</a>
            </Link>
          </MenuItem>
          <MenuItem className="!p-0">
            <Link href="/docs/react/installation">
              <a className={`${navbarItemClasses} px-3 py-2 lg:px-3`}>
                ReactJS
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Menu placement="bottom" offset={-2.5}>
        <MenuHandler>
          <li>
            <span className={navbarItemClasses}>
              <i className="material-icons mr-2 !text-base opacity-60">apps</i>
              <span>Components</span>
            </span>
          </li>
        </MenuHandler>
        <MenuList>
          <MenuItem className="!p-0">
            <Link href="/docs/html/alert">
              <a className={`${navbarItemClasses} px-3 py-2 lg:px-3`}>HTML</a>
            </Link>
          </MenuItem>
          <MenuItem className="!p-0">
            <Link href="/docs/react/alert">
              <a className={`${navbarItemClasses} px-3 py-2 lg:px-3`}>
                ReactJS
              </a>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Tooltip content="Coming Soon" placement="bottom" offset={-2.5}>
        <li className="flex">
          <span className={navbarItemClasses}>
            <i className="material-icons mr-2 !text-base opacity-60">
              view_carousel
            </i>
            <span>Templates</span>
          </span>
        </li>
      </Tooltip>
      <Tooltip content="Help with a star" placement="bottom" offset={-2.5}>
        <li>
          <a
            className={navbarItemClasses}
            href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github mr-2 text-base opacity-60"></i>
            <span>Github</span>
          </a>
        </li>
      </Tooltip>
      <li>
        <a
          className={navbarItemClasses}
          href="https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-discord mr-2 text-base opacity-60"></i>
          <span>Issues</span>
        </a>
      </li>
    </ul>
  );

  return (
    <div
      className={`absolute left-2/4 z-[999] my-4 flex w-full max-w-screen-2xl -translate-x-2/4 flex-wrap items-center px-4 lg:fixed ${container}`}
    >
      <MTNavbar
        {...rest}
        className={`!block py-4 pl-6 pr-5 lg:py-2 ${
          shadow ? "shadow-2xl shadow-blue-gray-500/10" : ""
        }`}
        shadow={shadow}
      >
        <div
          className={`flex w-full items-center !justify-between text-[#1A237E] ${className}`}
        >
          <Link href="/">
            <a className="py-2.375 text-size-sm mr-4 whitespace-nowrap font-bold text-inherit lg:ml-0">
              Material Tailwind
            </a>
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

        <MobileNav open={open} className={mobileNavClassName}>
          {navbarMenu}
        </MobileNav>
        {sidenavMenu}
      </MTNavbar>
    </div>
  );
}
