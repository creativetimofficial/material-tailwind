import React from "react";
import PropTypes from "prop-types";

export default function LargeHeader(props) {
  return (
    <>
      <h2 className="font-serif font-medium text-xl mb-2 text-gray-900">
        {props.title}
      </h2>
      <p className="text-gray-700 mb-4 font-light">{props.description}</p>
    </>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
