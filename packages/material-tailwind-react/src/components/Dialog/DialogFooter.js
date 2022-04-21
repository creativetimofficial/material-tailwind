import React, { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const DialogFooter = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { dialogFooter } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = dialogFooter;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const dialogFooterClasses = classnames(objectsToString(base), className);

  // 4. return
  return (
    <div {...rest} ref={ref} className={dialogFooterClasses}>
      {children}
    </div>
  );
});

DialogFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DialogFooter.displayName = "DialogFooter";

export default DialogFooter;
