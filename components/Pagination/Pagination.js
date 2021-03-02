import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ children }) => {
  return (
    <div className="py-2">
      <div className="block">
        <ul className="flex pl-0 rounded list-none">{children}</ul>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  children: PropTypes.node,
};

export default Pagination;
