import React from 'react';
import PropTypes from 'prop-types';

const ModalFooter = ({ children }) => {
  return <div className="flex items-center justify-end gap-4">{children}</div>;
};

ModalFooter.propTypes = {
  children: PropTypes.node,
};

export default ModalFooter;
