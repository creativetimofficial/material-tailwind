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
const Paragraph = ({ color }) => {
  return (
    <>
      <div className="flex flex-wrap items-center mt-4">
        <div className="w-full sm:w-3/12">
          <small className="text-gray-600 text-sm font-semibold uppercase">
            {color} Text
          </small>
        </div>
        <div className="w-full sm:w-9/12">
          <p
            className={
              'text-base font-light leading-relaxed mt-0 mb-0 text-' +
              color +
              '-500'
            }
          >
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </p>
        </div>
      </div>
    </>
  );
};

export default function Colors() {
  return (
    <>
      {colors.map((prop, key) => {
        return <Paragraph key={key} color={prop} />;
      })}
    </>
  );
}
