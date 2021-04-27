import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ className, children }) {
  return (
    <div className={`${className} max-w-sm bg-white rounded-xl overflow-hiddn shadow p-3 my-8`}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};
