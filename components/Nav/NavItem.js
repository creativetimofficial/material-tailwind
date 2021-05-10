import React from 'react';
import PropTypes from 'prop-types';
import Ripple from 'material-ripple-effects';

export default function NavbarItem({
    children,
    active,
    hasLink,
    ripple,
    ...rest
}) {
    const rippleEffect = new Ripple();

    return hasLink ? (
        <li>
            <a
                {...rest}
                className={`${active === 'dark' && 'bg-black bg-opacity-20'} ${
                    active === 'light' && 'bg-white bg-opacity-20'
                } px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg`}
                onMouseUp={(e) => {
                    ripple === 'dark' && rippleEffect.create(e, 'dark');
                    ripple === 'light' && rippleEffect.create(e, 'light');
                }}
            >
                {children}
            </a>
        </li>
    ) : (
        <li>
            <div
                className={`${active === 'dark' && 'bg-black bg-opacity-20'} ${
                    active === 'light' && 'bg-white bg-opacity-20'
                } px-5 py-4 flex gap-1 items-center text-xs uppercase font-medium leading text-white rounded-lg`}
                onMouseUp={(e) => {
                    ripple === 'dark' && rippleEffect.create(e, 'dark');
                    ripple === 'light' && rippleEffect.create(e, 'light');
                }}
            >
                {children}
            </div>
        </li>
    );
}

NavbarItem.defaultProps = {
    hasLink: false,
};

NavbarItem.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.string,
    hasLink: PropTypes.bool.isRequired,
    ripple: PropTypes.string,
};
