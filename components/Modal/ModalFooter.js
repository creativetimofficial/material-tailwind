import React from 'react';
import PropTypes from 'prop-types';

export default function ModalFooter({ children }) {
  return <div className="flex items-center justify-end gap-4">{children}</div>;
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};
