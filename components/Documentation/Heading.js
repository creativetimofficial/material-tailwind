import React from "react";
import PropTypes from "prop-types";

export default function LargeHeader(props) {
  return (
    <div>
      <h1 className="text-3xl font-medium text-gray-900 mb-4">{props.title}</h1>
      <p className="w-10/12 text-gray-700 font-light">{props.description}</p>
      <hr className="border border-t border-b-0 border-l-0 border-r-0 border-gray-200 mt-10 mb-12" />
    </div>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
