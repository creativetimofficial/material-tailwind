import React from "react";
import PropTypes from "prop-types";

export default function LargeHeader(props) {
  return (
    <div className="mt-8">
      <h1 className="font-semibold mt-8 mb-2 text-3xl">{props.title}</h1>
      <p className="lead text-lg text-gray-600">{props.description}</p>
      <hr className="mt-6 mb-8 border-b-1 border-gray-300" />
    </div>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
