import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ children }) {
  return (
    <div className="max-w-sm bg-white rounded-xl overflow-hdden shadow p-3 my-8">
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
