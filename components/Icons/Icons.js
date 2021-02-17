import React from 'react';

const Icons = ({ family = 'material-icons', name, color, size }) => {
  let iconUI;

  if (family === 'material-icons') {
    iconUI = (
      <span
        className={`${family} text-${color} ${
          size ? `text-${size}` : 'text-base'
        } mx-1`}
      >
        {name}
      </span>
    );
  } else if (family === 'font-awesome') {
    iconUI = <i className={`fas ${name} ${color} ${size} mx-1`} />;
  }

  return iconUI;
};

export default Icons;
