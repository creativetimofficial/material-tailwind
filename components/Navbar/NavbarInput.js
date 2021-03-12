import React from 'react';
import PropTypes from 'prop-types';

export default function NavbarInput({ fontAwesome, ...rest }) {
  return (
    <div className="relative lg:w-60 sm:w-full flex items-center bg-white bg-opacity-20 py-1 px-3 rounded">
      {fontAwesome ? (
        <i class="fas fa-search text-white text-xl"></i>
      ) : (
        <span className="material-icons text-white text-xl">search</span>
      )}
      <input
        {...rest}
        className="bg-transparent border-none text-sm leading-snug text-white w-full font-normal placeholder-white placeholder-opacity-50 focus:ring-0"
      />
    </div>
  );
}

NavbarInput.propTypes = {
  fontAwesome: PropTypes.bool,
};
