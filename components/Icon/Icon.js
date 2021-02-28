import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ family = 'material-icons', name, color, size, ...rest }) => {
  let iconUI;

  if (family === 'material-icons') {
    iconUI = (
      <span
        {...rest}
        className={`${family} text-${color} ${
          size ? `text-${size}` : 'text-base'
        }`}
      >
        {name}
      </span>
    );
  } else if (family === 'font-awesome') {
    iconUI = <i {...rest} className={`fas ${name} ${color} ${size}`} />;
  }

  return iconUI;
};

Icon.propTypes = {
  family: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

export default Icon;
