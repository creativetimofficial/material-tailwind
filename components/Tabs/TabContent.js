import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ children }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg shadow w-full p-8 pt-16 mb-4 -mt-10">
      <div className="flex-auto text-center font-light">{children}</div>
    </div>
  );
};

TabContent.propTypes = {
  children: PropTypes.node,
};

export default TabContent;
