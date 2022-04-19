import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const CardFooter = forwardRef(({ divider, className, children, ...rest }, ref) => {
  // 1. init
  const { cardFooter } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = cardFooter;

  // 2. set default props
  className = className ?? defaultProps.className;
  divider = divider ?? defaultProps.divider;

  // 3. set styles
  const cardFooterClasses = classnames(
    objectsToString(base.initial),
    { [objectsToString(base.divider)]: divider },
    className,
  );

  // 4. return
  return (
    <div {...rest} ref={ref} className={cardFooterClasses}>
      {children}
    </div>
  );
});

CardFooter.propTypes = {
  divider: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

CardFooter.displayName = "CardFooter";

export default CardFooter;
