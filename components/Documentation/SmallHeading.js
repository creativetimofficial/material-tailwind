import React from "react";
import PropTypes from "prop-types";

export default function LargeHeader(props) {
  return (
    <>
      <h2 className="font-semibold text-xl mb-2 mt-8 text-gray-800">
        {props.title}
      </h2>
      <p className="text-gray-700">{props.description}</p>
    </>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
