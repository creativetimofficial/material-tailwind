import { forwardRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import objectsToString from "utils/objectsToString";
import { useTheme } from "context/theme";

const DialogBody = forwardRef(({ className, divider, children, ...rest }, ref) => {
  // 1. init
  const { dialogBody } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = dialogBody;

  // 2. set default props
  className = className ?? defaultProps.className;

  // 3. set styles
  const dialogBodyClasses = classnames(
    objectsToString(base.container),
    { [objectsToString(base.divider)]: divider },
    className,
  );

  // 4. return
  return (
    <div {...rest} ref={ref} className={dialogBodyClasses}>
      {children}
    </div>
  );
});

DialogBody.propTypes = {
  divider: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

DialogBody.displayName = "DialogBody";

export default DialogBody;
