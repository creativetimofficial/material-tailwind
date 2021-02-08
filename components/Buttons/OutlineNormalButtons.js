import React from 'react';

const colors = [
  'bg-blueGray-500',
  'bg-gray-500',
  'bg-brown-500',
  'bg-deepOrange-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-yellow-500',
  'bg-lime-500',
  'bg-lightGreen-500',
  'bg-green-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-lightBlue-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-deepPurple-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-red-500',
];

const Buttons = ({ color }) => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <button
            className={
              'text-' +
              color +
              ' bg-transparent border border-solid border-' +
              color +
              ' font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1'
            }
            type="button"
          >
            Rounded
          </button>
          <button
            className={
              'text-' +
              color +
              ' bg-transparent border border-solid border-' +
              color +
              ' font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 flex gap-1'
            }
            type="button"
          >
            <span className="material-icons">favorite</span> With Icon
          </button>
          <button
            className={
              'text-' +
              color +
              ' bg-transparent border border-solid border-' +
              color +
              ' font-normal px-6 py-2 rounded outline-none focus:outline-none mr-1 mb-1 flex gap-1'
            }
            type="button"
          >
            <span className="material-icons">favorite</span>
          </button>
          <button
            className={
              'text-' +
              color +
              ' bg-transparent border border-solid border-' +
              color +
              ' font-normal px-6 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1'
            }
            type="button"
          >
            Round
          </button>
          <button
            className={
              'text-' +
              color +
              ' bg-transparent border border-solid border-' +
              color +
              ' font-normal px-6 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 flex gap-1'
            }
            type="button"
          >
            <span className="material-icons">favorite</span> With Icon
          </button>
          <button
            className={
              'text-' +
              color +
              ' bg-transparent border border-solid border-' +
              color +
              ' font-normal px-6 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 flex gap-1'
            }
            type="button"
          >
            <span className="material-icons">favorite</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default function OutlineNormalButtons(props) {
  return (
    <>
      {colors.map((prop, key) => {
        return <Buttons key={key} color={prop} />;
      })}
    </>
  );
}
