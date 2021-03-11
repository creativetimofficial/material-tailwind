import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({ children }) => {
  return <div className="relative flex-auto mb-6">{children}</div>;
};

ModalBody.propTypes = {
  children: PropTypes.node,
};

export default ModalBody;
