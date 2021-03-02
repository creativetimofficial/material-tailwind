import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';

const Popover = forwardRef(({ children, placement, trigger }, reference) => {
  return (
    <Tippy
      content={children}
      placement={placement}
      reference={reference}
      trigger={trigger}
      animation="shift-away"
      interactive
    />
  );
});

Popover.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.string,
  reference: PropTypes.object,
  trigger: PropTypes.string,
};

export default Popover;
