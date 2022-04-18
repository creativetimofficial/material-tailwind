import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const DialogHeader = forwardRef(({ className, children, ...rest }, ref) => {
  // 1. init
  const { dialogHeader } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = dialogHeader;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const dialogHeaderClasses = classnames(objectsToString(base), className);

  // 4. return
  return (
    <div {...rest} ref={ref} className={dialogHeaderClasses}>
      {children}
    </div>
  );
});

DialogHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DialogHeader.displayName = "DialogHeader";

export default DialogHeader;
