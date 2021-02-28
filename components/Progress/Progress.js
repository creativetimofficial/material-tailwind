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

const Progress = ({ color, value, percentage }) => {
  return (
    <>
      <div
        className={`overflow-hidden ${
          percentage ? 'h-6' : 'h-2'
        } mb-4 flex rounded-sm bg-${color}-200`}
      >
        <div
          style={{ width: `${value}%` }}
          className={`flex justify-center items-center rounded-sm text-xs font-medium bg-${color}-500 text-white`}
        >
          {percentage ? `${value}% Completed` : ''}
        </div>
      </div>
    </>
  );
};

Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  percentage: PropTypes.bool,
};

export default Progress;
