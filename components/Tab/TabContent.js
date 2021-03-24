import React from 'react';
import PropTypes from 'prop-types';

export default function TabContent({ children }) {
  return (
    <div className="relative flex flex-col min-w-0 break-words w-full px-4 pb-4">
      <div className="flex-auto text-center font-light leading-normal">
        {children}
      </div>
    </div>
  );
}

TabContent.propTypes = {
  children: PropTypes.node.isRequired,
};
