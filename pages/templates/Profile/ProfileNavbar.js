import React from "react";
import Link from "next/link";
import Dropdown from "components/Dropdown/Dropdown";
import DropdownItem from "components/Dropdown/DropdownItem";
import Ripple from "material-ripple-effects";

export default function ProfileNavbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const ripple = new Ripple();
  const rippleLight = (e) => ripple.create(e, "light");

  return (
    <nav className="absolute top-0 z-40 lg:z-40 w-full bg-transparent flex items-center justify-between px-2 py-4">
      <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            href="/"
            as={
              (process.env.NODE_ENV === "production"
                ? "/material-tailwind"
                : "") + "/"
            }
          >
            <a className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase">
              Material Tailwind
            </a>
          </Link>
          <button
            className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars text-white"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white rounded-lg lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li
              className="flex items-center text-gray-900 lg:text-white rounded-lg transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <Link
                href="/documentation/quick-start"
                as={
                  (process.env.NODE_ENV === "production"
                    ? "/material-tailwind"
                    : "") + "/documentation/quick-start"
                }
              >
                <a className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  <i className="far fa-file-alt text-lg leading-lg " />
                  <span className="inline-block ml-2">Docs</span>
                </a>
              </Link>
            </li>
            <li
              className="flex items-center text-gray-900 lg:text-white rounded-lg transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <Link
                href="/components"
                as={
                  (process.env.NODE_ENV === "production"
                    ? "/material-tailwind"
                    : "") + "/components"
                }
              >
                <a className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  <i className="fas fa-cubes text-lg leading-lg " />
                  <span className="inline-block ml-2">Components</span>
                </a>
              </Link>
            </li>

            <Dropdown
              ripple="light"
              buttonText={
                <>
                  <div className="text-gray-900 lg:text-white flex items-center">
                    <i className="material-icons mr-2">view_carousel</i>
                    Templates
                  </div>
                </>
              }
              style={{
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "#fff",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Link
                href="/templates/landing"
                as={
                  (process.env.NODE_ENV === "production"
                    ? "/material-tailwind"
                    : "") + "/templates/landing"
                }
              >
                <DropdownItem>Landing Page</DropdownItem>
              </Link>
              <Link
                href="/templates/login"
                as={
                  (process.env.NODE_ENV === "production"
                    ? "/material-tailwind"
                    : "") + "/templates/login"
                }
              >
                <DropdownItem>Login</DropdownItem>
              </Link>
              <Link
                href="/templates/profile"
                as={
                  (process.env.NODE_ENV === "production"
                    ? "/material-tailwind"
                    : "") + "/templates/profile"
                }
              >
                <DropdownItem>Profile</DropdownItem>
              </Link>
            </Dropdown>

            <li
              className="flex items-center text-gray-900 lg:text-white rounded-lg transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <a
                className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://github.com/creativetimofficial/material-tailwind?ref=material-tailwind"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-lg leading-lg " />
                <span className="inline-block ml-2">Github</span>
              </a>
            </li>

            <li
              className="flex items-center text-gray-900 lg:text-white rounded-lg transition-all duration-300"
              onMouseUp={rippleLight}
            >
              <a
                className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
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
