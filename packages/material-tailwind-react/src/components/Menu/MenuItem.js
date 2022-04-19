import { forwardRef } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "utils/objectsToString";

// context
import { useTheme } from "context/theme";

const MenuItem = forwardRef(({ className, disabled, children, ...rest }, ref) => {
  // 1. init
  const { menuItem } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = menuItem;

  // 2. set default props
  className = className ?? defaultProps.className;
  disabled = disabled ?? defaultProps.disabled;

  // 3. set styles
  const menuItemClasses = classnames(
    objectsToString(base.initial),
    { [objectsToString(base.disabled)]: disabled },
    className,
  );

  // 4. return
  return (
    <li {...rest} ref={ref} role="menuitem" className={menuItemClasses} disabled={disabled}>
      {children}
    </li>
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

MenuItem.displayName = "MenuItem";

export default MenuItem;
