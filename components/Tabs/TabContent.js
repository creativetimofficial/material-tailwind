import React from 'react';
import PropTypes from 'prop-types';

const TabContent = ({ children }) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white rounded-b shadow w-full mb-6">
      <div className="px-4 py-5 flex-auto">{children}</div>
    </div>
  );
};

TabContent.propTypes = {
  children: PropTypes.node,
};

export default TabContent;
