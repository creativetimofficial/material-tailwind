import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-away.css';

const Popover = forwardRef(({ children, placement, trigger }, ref) => {
  return (
    <Tippy
      content={children}
      placement={placement}
      reference={ref}
      trigger={trigger}
      animation="shift-away"
      arrow={roundArrow}
      className="arrow-light"
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
