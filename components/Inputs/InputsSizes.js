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
// eslint-disable-next-line
const InputsRounded = ({ color }) => {
  const bgColor = color === 'gray' ? 'bg-white' : 'bg-' + color + '-100';
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Small ' + color}
              className={
                'px-2 py-1 h-8 border border-solid border-' +
                color +
                '-600 rounded text-sm leading-snug text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Small ' + color}
              className={
                'px-3 py-1 h-8 border border-solid border-' +
                color +
                '-600 rounded-full text-sm leading-snug text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Regular ' + color}
              className={
                'px-3 py-2 h-10 border border-solid border-' +
                color +
                '-600 rounded text-base leading-normal text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Regular ' + color}
              className={
                'px-4 py-2 h-10 border border-solid border-' +
                color +
                '-600 rounded-full text-base leading-normal text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Large ' + color}
              className={
                'px-3 py-2 h-12 border border-solid border-' +
                color +
                '-600 rounded text-lg leading-none text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-2/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Large ' + color}
              className={
                'px-5 py-2 h-12 border border-solid border-' +
                color +
                '-600 rounded-full text-lg leading-none text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Inputs = ({ color }) => {
  const bgColor = color === 'gray' ? 'bg-white' : 'bg-' + color + '-100';
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full sm:w-6/12 lg:w-3/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Small ' + color}
              className={
                'px-2 py-1 h-8 border border-solid border-' +
                color +
                '-600 rounded text-sm leading-snug text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-3/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Regular ' + color}
              className={
                'px-3 py-2 h-10 border border-solid border-' +
                color +
                '-600 rounded text-base leading-normal text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
        <div className="w-full sm:w-6/12 lg:w-3/12 px-4">
          <div className="mb-3 pt-0">
            <input
              type="text"
              defaultValue=""
              placeholder={'Large ' + color}
              className={
                'px-3 py-2 h-12 border border-solid border-' +
                color +
                '-600 rounded text-lg leading-none text-' +
                color +
                '-700 ' +
                bgColor +
                ' shadow-none outline-none focus:outline-none w-full font-normal placeholder-' +
                color +
                '-300'
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default function InputsSizes() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Inputs key={key} color={prop} />;
      })}
    </>
  );
}
