import React from 'react';
import PropTypes from 'prop-types';

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
const Label = ({ children, color }) => {
  return (
    <>
      <div
        className={`flex items-center justify-between py-1 px-3 rounded-full bg-${color}-100 last:mr-0 mr-1 transition-all duration-300`}
      >
        <span
          className={`text-xs font-semibold uppercase text-${color}-700 uppercase`}
        >
          {children}
        </span>
      </div>
    </>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
};

export default Label;
