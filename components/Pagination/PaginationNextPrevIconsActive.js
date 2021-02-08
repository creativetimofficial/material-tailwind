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

const Pagination = ({ color }) => {
  return (
    <>
      <div className="py-2">
        <nav className="block">
          <ul className="flex pl-0 rounded list-none">
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-500 bg-white text-' +
                  color +
                  '-500'
                }
              >
                <i className="material-icons -ml-px">keyboard_arrow_left</i>
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-500 bg-white text-' +
                  color +
                  '-500'
                }
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-500 bg-white text-' +
                  color +
                  '-500'
                }
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-500 bg-white text-' +
                  color +
                  '-500'
                }
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-500 bg-white text-' +
                  color +
                  '-500'
                }
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-500 bg-' +
                  color +
                  '-500 text-white'
                }
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className={
                  'first:ml-0 text-sm flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-' +
                  color +
                  '-200 bg-' +
                  color +
                  '-200 text-' +
                  color +
                  '-100'
                }
              >
                <i className="material-icons -mr-px">keyboard_arrow_right</i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default function PaginationNextPrevIcons() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Pagination key={key} color={prop} />;
      })}
    </>
  );
}
