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

const Inputs = ({ color }) => {
  const bgColor = color === 'gray' ? 'bg-white' : 'bg-' + color + '-100';
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-6/12 lg:w-3/12 px-4">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <div className="flex">
              <span
                className={
                  'font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-' +
                  color +
                  '-600 rounded text-sm ' +
                  bgColor +
                  ' items-center rounded-r-none pl-2 py-1 text-' +
                  color +
                  '-800 border-r-0 placeholder-' +
                  color +
                  '-300'
                }
              >
                <i className="material-icons">person</i>
              </span>
            </div>
            <input
              type="text"
              className={
                'px-2 py-1 h-8 border border-solid  border-' +
                color +
                '-600 rounded text-sm leading-snug text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-' +
                color +
                '-300'
              }
              placeholder={'Left ' + color + ' small icon'}
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-3/12 px-4">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <div className="flex">
              <span
                className={
                  'font-normal leading-normal flex text-center white-space-no-wrap border border-solid border-' +
                  color +
                  '-600 rounded text-base ' +
                  bgColor +
                  ' items-center rounded-r-none pl-3 py-2 text-' +
                  color +
                  '-800 border-r-0 placeholder-' +
                  color +
                  '-300'
                }
              >
                <i className="material-icons">person</i>
              </span>
            </div>
            <input
              type="text"
              className={
                'px-3 py-2 h-10 border border-solid  border-' +
                color +
                '-600 rounded text-base leading-normal text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-' +
                color +
                '-300'
              }
              placeholder={'Left ' + color + ' regular icon'}
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-3/12 px-4">
          <div className="relative flex w-full flex-wrap items-stretch mb-3">
            <div className="flex">
              <span
                className={
                  'font-normal leading-none flex text-center white-space-no-wrap border border-solid border-' +
                  color +
                  '-600 rounded text-lg ' +
                  bgColor +
                  ' items-center rounded-r-none pl-2 py-1 text-' +
                  color +
                  '-800 border-r-0 placeholder-' +
                  color +
                  '-300'
                }
              >
                <i className="material-icons">person</i>
              </span>
            </div>
            <input
              type="text"
              className={
                'px-2 py-1 h-12 border border-solid  border-' +
                color +
                '-600 rounded text-lg leading-none text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-' +
                color +
                '-300'
              }
              placeholder={'Left ' + color + ' large icon'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default function InputsLeftIcon() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Inputs key={key} color={prop} />;
      })}
    </>
  );
}
