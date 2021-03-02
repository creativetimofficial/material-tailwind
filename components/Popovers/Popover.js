import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';

const Popover = forwardRef(({ children, placement, trigger }, ref) => {
  return (
    <Tippy
      content={children}
      placement={placement}
      reference={ref}
      trigger={trigger}
      animation="shift-away"
      interactive
    />
  );
});

Popover.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.string,
  trigger: PropTypes.string,
};

export default Popover;
