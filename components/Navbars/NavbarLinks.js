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

const NavbarLinks = ({ color }) => {
  return (
    <>
      <nav
        className={`relative flex flex-wrap items-center justify-between py-2.5 px-3 navbar-expand-lg bg-${color}-500 mb-3`}
      >
        <div className="container mx-auto">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                href="#pablo"
              >
                Navbar
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
              className="block lg:flex items-center"
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="nav-item">
                  <a
                    className="p-4 flex items-center text-xs uppercase font-medium leading bg-white bg-opacity-10 text-white rounded"
                    href="#pablo"
                  >
                    Discover
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="p-4 flex items-center text-xs uppercase font-medium leading text-white"
                    href="#pablo"
                  >
                    Profile
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="p-4 flex items-center text-xs uppercase font-medium leading text-white"
                    href="#pablo"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLinks;

// export default function NavbarLinks() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Navbar key={key} color={prop} />;
//       })}
//     </>
//   );
// }
