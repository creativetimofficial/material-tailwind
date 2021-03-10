import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';
import 'tippy.js/animations/shift-away.css';

const Tooltip = forwardRef(({ children, placement }, ref) => {
  return (
    <Tippy
      content={children}
      placement={placement}
      reference={ref}
      animation="shift-away"
      arrow={roundArrow}
      interactive
    />
  );
});

Tooltip.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.string,
};

export default Tooltip;
