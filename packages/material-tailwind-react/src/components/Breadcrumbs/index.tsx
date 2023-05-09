import React, { forwardRef, isValidElement, Children } from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { separator, fullWidth, className, children } from "../../types/components/breadcrumbs";
import {
  propTypesSeparator,
  propTypesFullWidth,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/breadcrumbs";

export interface BreadcrumbsProps extends React.ComponentProps<"ol"> {
  separator?: separator;
  fullWidth?: fullWidth;
  className?: className;
  children: children;
}

export const Breadcrumbs = forwardRef<HTMLOListElement, BreadcrumbsProps>(
  ({ separator, fullWidth, className, children, ...rest }, ref) => {
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
    const breadcrumbsListClasses = twMerge(classnames(objectsToString(base.list)), className);
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
                >
                  {child}
                  {index !== Children.count(children) - 1 && (
                    <span className={breadcrumbsSeparatorClasses}>{separator}</span>
                  )}
                </li>
              );
            }
            return null;
          })}
        </ol>
      </nav>
    );
  },
);

Breadcrumbs.propTypes = {
  separator: propTypesSeparator,
  fullWidth: propTypesFullWidth,
  className: propTypesClassName,
  children: propTypesChildren,
};

Breadcrumbs.displayName = "MaterialTailwind.Breadcrumbs";

export default Breadcrumbs;
