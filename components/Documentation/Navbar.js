/*eslint-disable*/
import React from 'react';
import Link from 'next/link';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (fixed ? 'fixed z-50 w-full bg-white top-0 ' : 'relative ') +
          'flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg'
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-gray-800">
                MD Tailwind
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="material-icons">menu</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  href="/documentation/quick-start"
                  as={
                    (process.env.NODE_ENV === 'production'
                      ? '/learning-lab/tailwind-starter-kit'
                      : '') + '/documentation/quick-start'
                  }
                >
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600">
                    <span className="ml-2">Docs</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/creativetimofficial/md-tailwind"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600"
                  target="_blank"
                >
                  <span className="ml-2">Github</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/creativetimofficial/md-tailwind/issues"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold text-gray-800 hover:text-gray-600"
                  target="_blank"
                >
                  <span className="ml-2">Issues</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
