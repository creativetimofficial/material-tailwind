import React from 'react';
import 'ripple/ripple';

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

const MenuIcons = ({ color }) => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <>
      <nav
        className={`flex flex-wrap items-center justify-between py-2.5 px-3 navbar-expand bg-${color}-500 rounded shadow-xl`}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="#pablo"
            >
              Menu With Icons
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center ${
              openMenu ? 'block' : 'hidden'
            }`}
            id="example-navbar-success"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a
                  className="relative overflow-hidden py-3.5 px-4 flex items-center text-xs uppercase bg-white bg-opacity-10 text-white rounded"
                  href="#pablo"
                  data-md-ripple={true}
                >
                  <span className="material-icons text-xl leading-lg text-white">
                    language
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="relative overflow-hidden py-3.5 px-4 flex items-center text-xs uppercase text-white"
                  href="#pablo"
                  data-md-ripple={true}
                >
                  <span className="material-icons text-xl leading-lg text-white">
                    person
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="relative overflow-hidden py-3.5 px-4 flex items-center text-xs uppercase text-white"
                  href="#pablo"
                  data-md-ripple={true}
                >
                  <span className="material-icons text-xl leading-lg text-white">
                    settings
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MenuIcons;

// export default function MenuIcons() {
//   return (
//     <>
//       {colors.map((prop, key) => {
//         return <Menu key={key} color={prop} />;
//       })}
//     </>
//   );
// }
