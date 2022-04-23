import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

const CardBody = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { cardBody } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = cardBody;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const cardBodyClasses = classnames(objectsToString(base), className);

  // 4. return
  return (
    <div {...rest} ref={ref} className={cardBodyClasses}>
      {children}
    </div>
  );
});

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardBody.displayName = "CardBody";

export default CardBody;
