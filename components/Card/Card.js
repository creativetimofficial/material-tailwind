import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
