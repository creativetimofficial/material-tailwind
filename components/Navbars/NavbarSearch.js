import React from 'react';

const colors = [
  'blueGray',
  'gray',
  'brown',
  'deepOrange',
  'orange',
  'amber',
  'yellow',
  'lime',
  'lightGreen',
  'green',
  'teal',
  'cyan',
  'lightBlue',
  'blue',
  'indigo',
  'deepPurple',
  'purple',
  'pink',
  'red',
];

const Navbar = ({ color }) => {
  const bgColor = color === 'gray' ? 'bg-white' : 'bg-' + color + '-100';
  return (
    <>
      <nav
        className={`relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-${color}-500 mb-3`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              {color} Color
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className="block lg:flex flex-grow items-center"
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="material-icons text-lg leading-lg text-white opacity-75">
                    facebook
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="material-icons text-lg leading-lg text-white opacity-75">
                    twitter
                  </span>
                  <span className="ml-2">Tweet</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  Settings
                </a>
              </li>
            </ul>
            <div className="relative flex w-full sm:w-4/12 md:w-2/12 flex-wrap items-stretch md:ml-auto">
              <div className="flex">
                <span
                  className={`font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-${color}-600 rounded-full text-sm ${bgColor} items-center rounded-r-none pl-2 py-1 text-${color}-800 border-r-0 placeholder-${color}-300`}
                >
                  <span className="material-icons">facebook</span>
                </span>
              </div>
              <input
                type="text"
                className={`px-2 py-1 h-8 border border-solid  border-${color}-600 rounded-full text-sm leading-snug text-${color}-700 ${bgColor} shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-${color}-300`}
                placeholder={`Search ${color}`}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default function NavbarSearch() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Navbar key={key} color={prop} />;
      })}
    </>
  );
}
