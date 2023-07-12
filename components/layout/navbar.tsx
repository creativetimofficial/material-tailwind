import { useState, useEffect, useRef } from "react";

// next.js components
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
  Chip,
  Input,
} from "@material-tailwind/react";


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
    "flex items-center px-1 py-2 font-normal transition-all duration-250 text-size-sm text-blue-gray-800 font-medium lg:px-2 cursor-pointer";
  const targetRef = useRef(null);
  const mobile = useRef(null);

  const activeClass = "show";
  const initialClasses = ['bg-white/50', 'shadow-sm', 'backdrop-blur-lg'];
  const [classes] = useState(initialClasses);

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

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = targetRef.current;
      if (window.scrollY > 100) {
        targetElement.classList.add(...classes);
      } else {
        if (!targetElement.classList.contains(activeClass)) {
          targetElement.classList.remove(...classes);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setNavbarBlur = () => {
    const targetElement = targetRef.current;
    const targetMobile = mobile.current;

    if (!targetElement.classList.contains(activeClass)) {
      targetMobile.style.height = '330px';
      targetElement.classList.add(activeClass);

      classes.forEach(className => {
        targetElement.classList.add(className);
      });
    } else {
      targetElement.classList.remove(activeClass);

      classes.forEach(className => {
        targetElement.classList.remove(className);
      });
    }
  }

  const menuOpenIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-slate-950 stroke-slate-950"
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
      className="h-6 w-6 text-slate-950 stroke-slate-950"
      viewBox="0 0 24 24"
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
    <div className="flex w-full flex-col lg:flex-row xl:ml-40">
      <ul
        className={`${
          open ? "mt-4" : ""
        } mb-0 flex list-none flex-col gap-2 pl-0 text-inherit transition-all lg:ml-auto lg:flex-row`}
      >
        <Menu placement="bottom" offset={-2.5}>
          <MenuHandler>
            <li>
              <span className={navbarItemClasses}>
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
          <Link passHref href="/blocks" className={navbarItemClasses}>
            Blocks
          </Link>
        </li>
        <Menu placement="bottom" offset={-2.5}>
          <MenuHandler>
            <li>
              <span className={navbarItemClasses}>
                <span>Ecosystem</span>
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
            href="/docs/html/installation" 
            className={navbarItemClasses}
            target="_blank"
            rel="noreferrer">
            Pro Version
          </Link>
        </li>
        <li>
          <Link 
            href="/docs/html/installation" 
            className={navbarItemClasses}
            target="_blank"
            rel="noreferrer">
            Pricing & FAQ
          </Link>
        </li>
      </ul>
      <div className="mt-4 flex flex-col border-t border-blue-gray-50 pt-4 lg:mt-0 lg:flex-row lg:border-0 lg:pt-0 ml-4">
        <ul className="flex items-center">
          <li className="mr-4">
            <Input
              type="email"
              placeholder="Search"
              icon={<i className="fas fa-search text-sm" />}
              className="focus:!border-t-blue-gray-800 focus:!border-blue-gray-800 ring-4 ring-transparent !border !border-blue-gray-100 bg-white placeholder:text-blue-gray-600 text-blue-gray-800"
              labelProps={{
                className: "hidden" 
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </li>
          <Tooltip content="Help with a star" placement="bottom" offset={-2.5}>
            <li className="mr-1">
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
            <li>
              <a
                className={navbarItemClasses}
                href="https://discord.com/invite/7xzMRsRebr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-discord text-xl leading-none" />
              </a>
            </li>
          </Tooltip>
        </ul>
      </div>
    </div>
  );

  return (
    <div
      ref={targetRef}
      className={`z-[999] flex w-full flex-wrap items-center fixed ${container}`}
    >
      <MTNavbar
        {...rest}
        className={`py-4 pl-6 w-full mx-auto bg-transparent backdrop-blur-none border-0`}
        shadow={false}
      >
        <div
          className={`flex w-full items-center !justify-between ${className}`}
        >
          <Link
            href="/"
            className="py-2.375 text-size-sm mr-4 whitespace-nowrap flex items-center font-bold text-inherit lg:ml-0"
          >
            <Image src="/img/logo-material-tailwind.png" width={120} height={40} alt="logo" />
          </Link>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => {setOpen(!open); setNavbarBlur();}}
          >
            {open ? menuCloseIcon : menuOpenIcon}
          </IconButton>
          <div className="lg:base-auto hidden flex-grow basis-full items-center overflow-hidden lg:flex lg-max:max-h-0">
            {navbarMenu}
          </div>
        </div>

        <MobileNav open={open} className={`${mobileNavClassName}`} ref={mobile}>
          {navbarMenu}
        </MobileNav>
        {sidenavMenu}
      </MTNavbar>
    </div>
  );
}
