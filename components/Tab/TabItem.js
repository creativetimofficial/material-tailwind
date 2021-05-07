import React from 'react';
import PropTypes from 'prop-types';
import Ripple from 'material-ripple-effects';

export default function TabItem({
    children,
    active,
    ripple,
    className,
    ...rest
}) {
    const rippleEffect = new Ripple();

    return (
        <li className="text-center">
            <a
                {...rest}
                className={`flex items-center justify-center gap-1 rounded-lg text-sm font-medium py-4 px-6 leading-normal text-white transition-all duration-300 ${
                    active && 'bg-white bg-opacity-20'
                } ${className}`}
                role="tablist"
                onMouseUp={(e) => {
                    ripple === 'dark' && rippleEffect.create(e, 'dark');
                    ripple === 'light' && rippleEffect.create(e, 'light');
                }}
            >
                {children}
            </a>
        </li>
    );
}

TabItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool,
    ripple: PropTypes.string,
};
