import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// context
import { useSelect } from "./SelectContext";

const SelectOption = forwardRef(({ disabled, value, children, ...rest }, ref) => {
  const { getItemProps } = useSelect();

  return (
    <li
      {...getItemProps({
        ref,
        disabled,
        ...rest,
      })}
    >
      {children}
    </li>
  );
});

SelectOption.defaultProps = {
  disabled: false,
  value: "",
};

SelectOption.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node.isRequired,
};

SelectOption.displayName = "Option";

export default SelectOption;
