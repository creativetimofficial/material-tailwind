import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/animations/shift-away.css';

const Tooltip = forwardRef(({ children, placement }, ref) => {
  return (
    <Tippy
      content={children}
      placement={placement}
      reference={ref}
      animation="shift-away"
      interactive
    />
  );
});

Tooltip.propTypes = {
  children: PropTypes.node,
  placement: PropTypes.string,
};

export default Tooltip;
