import React from "react";
import Link from "next/link";
import Dropdown from "components/Dropdown/Dropdown";
import DropdownItem from "components/Dropdown/DropdownItem";
import Icon from "components/Icon/Icon";
import Ripple from "material-ripple-effects";

export default function IndexNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, "light");

  return (
    <nav className="sticky top-0 z-40 lg:z-40 w-full bg-gradient-to-r from-light-blue-500 to-light-blue-700 flex items-center justify-between p-2">
      <div className="container max-w-full px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a className="text-white text-sm font-medium leading-relaxed inline-block mr-4 whitespace-no-wrap uppercase">
              Material Tailwind
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Icon family="font-awesome" name="fas fa-bars" color="white" />
          </button>
        </div>
        <div
          className={`lg:flex flex-grow items-center bg-transparent
            ${navbarOpen ? " block" : " hidden"}
          `}
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <Link href="/documentation/quick-start">
                <a className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium">
                  <Icon
                    family="font-awesome"
                    name="far fa-file-alt"
                    size="lg"
                  />
                  <span className="inline-block ml-2">Docs</span>
                </a>
              </Link>
            </li>
            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <Link href="/components">
                <a className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium">
                  <Icon family="font-awesome" name="fas fa-cubes" size="lg" />
                  <span className="inline-block ml-2">Components</span>
                </a>
              </Link>
            </li>

            <Dropdown
              ripple="light"
              buttonText={
                <>
                  <div className="text-white flex items-center">
                    <Icon name="view_carousel" size="2xl" />
                    &nbsp; Templates
                  </div>
                </>
              }
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Link href="/templates/landing">
                <DropdownItem>Landing Page</DropdownItem>
              </Link>
              <Link href="/templates/login">
                <DropdownItem>Login</DropdownItem>
              </Link>
              <Link href="/templates/profile">
                <DropdownItem>Profile</DropdownItem>
              </Link>
            </Dropdown>

            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <a
                className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium"
                href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon family="font-awesome" name="fab fa-github" size="lg" />
                <span className="inline-block ml-2">Github</span>
              </a>
            </li>

            <li
              className="flex items-center text-white rounded-lg px-2 transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <a
                className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-medium"
                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=material-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-block">Issues</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
