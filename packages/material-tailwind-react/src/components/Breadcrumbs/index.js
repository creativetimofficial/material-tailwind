import React, { forwardRef, isValidElement, Children } from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

const Breadcrumbs = forwardRef(({ separator, fullWidth, className, children, ...rest }, ref) => {
  // 1. init
  const { breadcrumbs } = useTheme();
  const {
    defaultProps,
    styles: { base },
  } = breadcrumbs;

  // 2. set default props
  separator = separator ?? defaultProps.separator;
  fullWidth = fullWidth ?? defaultProps.fullWidth;
  className = className ?? defaultProps.className;

  // 3. set styles
  const breadcrumbsRootClasses = classnames(objectsToString(base.root.initial), {
    [objectsToString(base.root.fullWidth)]: fullWidth,
  });
  const breadcrumbsListClasses = classnames(objectsToString(base.list), className);
  const breadcrumbsItemClasses = classnames(objectsToString(base.item.initial));
  const breadcrumbsSeparatorClasses = classnames(objectsToString(base.separator));

  // 4. return
  return (
    <nav aria-label="breadcrumb" className={breadcrumbsRootClasses}>
      <ol {...rest} ref={ref} className={breadcrumbsListClasses}>
        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return (
              <li
                className={classnames(breadcrumbsItemClasses, {
                  [objectsToString(base.item.disabled)]: child?.props?.disabled,
                })}
                disabled={child?.props?.disabled}
              >
                {child}
                {index !== Children.count(children) - 1 && (
                  <span aria-hidden="true" className={breadcrumbsSeparatorClasses}>
                    {separator}
                  </span>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
});

Breadcrumbs.propTypes = {
  separator: PropTypes.node,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Breadcrumbs.displayName = "Breacrumb";

export { Breadcrumbs };
export default Breadcrumbs;
