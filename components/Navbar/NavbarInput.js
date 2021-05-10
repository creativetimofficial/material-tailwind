import React from 'react';
import PropTypes from 'prop-types';
import NavbarItem from '../Nav/NavItem';

export default function NavbarInput({ fontAwesome, ...rest }) {
    return (
        <div className="relative lg:w-60 sm:w-full flex items-center bg-white bg-opacity-20 py-1 px-3 rounded-lg">
            {fontAwesome ? (
                <i class="fas fa-search text-white text-xl"></i>
            ) : (
                <span className="material-icons text-white text-xl mr-2">
                    search
                </span>
            )}
            <input
                {...rest}
                className="bg-transparent border-none text-sm leading-snug text-white w-full font-normal placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-0"
            />
        </div>
    );
}

NavbarInput.defaultProps = {
    fontAwesome: false,
};

NavbarInput.propTypes = {
    fontAwesome: PropTypes.bool.isRequired,
};
