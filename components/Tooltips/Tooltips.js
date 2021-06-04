import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import { roundArrow } from 'tippy.js';

const Tooltip = forwardRef(({ children, placement }, ref) => {
    return (
        <Tippy
            content={children}
            placement={placement}
            reference={ref}
            animation="shift-away"
            arrow={roundArrow}
            className="arrow-dark"
            interactive
        />
    );
});

Tooltip.defaultProps = {
    placement: 'top',
};

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    placement: PropTypes.string.isRequired,
};

export default Tooltip;
