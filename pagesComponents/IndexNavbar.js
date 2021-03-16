import React from 'react';
import Link from 'next/link';

export default function IndexNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 lg:z-50 w-full bg-white flex items-center justify-between px-2 py-4">
        <div className="container max-w-7xl px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a
                className="text-gray-800 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                href="#pablo"
              >
                Material Tailwind
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars text-gray-900"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block' : ' hidden')
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li
                className="flex items-center text-gray-800 hover:text-gray-600 rounded-lg transition-all duration-300"
                data-ripple-dark={true}
              >
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-cubes text-lg leading-lg " />
                  <span className="inline-block ml-2">Components</span>
                </a>
              </li>

              <li
                className="flex items-center text-gray-800 hover:text-gray-600 rounded-lg transition-all duration-300"
                data-ripple-dark={true}
              >
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github text-lg leading-lg " />
                  <span className="inline-block ml-2">Github</span>
                </a>
              </li>

              <li
                className="flex items-center text-gray-800 hover:text-gray-600 rounded-lg transition-all duration-300"
                data-ripple-dark={true}
              >
                <a
                  className="px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"
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
    </>
  );
}
