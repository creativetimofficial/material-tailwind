/*eslint-disable*/
import React from "react";
import Link from "next/link";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (fixed ? "fixed z-50 w-full bg-white top-0 " : "relative ") +
          "flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/presentation"
              as={
                (process.env.NODE_ENV === "production"
                  ? "/learning-lab/tailwind-starter-kit"
                  : "") + "/presentation"
              }
            >
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
                Tailwind Starter Kit
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            {/*<div className="relative flex w-full sm:w-4/12 md:w-2/12 flex-wrap items-stretch md:mr-auto">
              <div className="flex">
                <span
                  className="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-pink-600 rounded text-sm items-center rounded-r-none pl-2 py-2 text-pink-800 border-r-0 placeholder-pink-300"
                >
                  <i className="fas fa-search"></i>
                </span>
              </div>
              <input
                type="text"
                className="px-3 py-2 h-8 border border-solid  border-pink-600 rounded text-sm leading-snug text-pink-700 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-pink-500"
                placeholder="Search "
              />
            </div>*/}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-gray-500"></i>
                  <span className="ml-2">Share</span>
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20Tailwind%20Starter%20Kit%2C%20a%20beautiful%20extension%20of%20%23TailwindCSS%20made%20by%20%40CreativeTim%20%23webdesign%20%23starterkit&url=https%3A%2F%2Fwww.creative-tim.com%2Flearning-lab%2Ftailwind-starter-kit%23%2Fpresentation"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600"
                  target="_blank"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-gray-500"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>

              <li className="nav-item">
                <Link
                  href="/documentation/quick-start"
                  as={
                    (process.env.NODE_ENV === "production"
                      ? "/learning-lab/tailwind-starter-kit"
                      : "") + "/documentation/quick-start"
                  }
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <i className="far fa-file-alt text-lg leading-lg text-gray-500"></i>
                    <span className="ml-2">Docs</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/documentation/download"
                  as={
                    (process.env.NODE_ENV === "production"
                      ? "/learning-lab/tailwind-starter-kit"
                      : "") + "/documentation/download"
                  }
                >
                  <a className="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <i className="fas fa-arrow-alt-circle-down text-lg leading-lg text-gray-500"></i>
                    <span className="ml-2">Download</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/creativetimofficial/tailwind-starter-kit/archive/designer-files.zip?ref=tsk-navbar"
                  className="download-button px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600"
                >
                  <i className="fab fa-sketch text-lg leading-lg text-gray-500"></i>
                  <span className="ml-2">Download Designer</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
