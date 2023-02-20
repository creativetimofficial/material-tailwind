import React from "react";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";
import { useTabs, setIndicator } from "./TabsContext";

// types
import type { indicatorProps, className, children } from "../../types/components/tabs";
import {
  propTypesIndicator,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/tabs";

export interface TabsHeaderProps extends React.ComponentProps<"ul"> {
  indicatorProps?: indicatorProps;
  className?: className;
  children: children;
}

export const TabsHeader = React.forwardRef<HTMLUListElement, TabsHeaderProps>(
  ({ indicatorProps, className, children, ...rest }, ref) => {
    // 1. init
    const { tabsHeader } = useTheme();
    const { defaultProps, styles } = tabsHeader;
    const { state, dispatch } = useTabs();
    const { orientation } = state;

    React.useEffect(() => {
      setIndicator(dispatch, indicatorProps);
    }, [dispatch, indicatorProps]);

    // 2. set default props
    className = className ?? defaultProps.className;

    // 3. set styles
    const tabsHeaderClasses = twMerge(
      classnames(objectsToString(styles.base), {
        [styles[orientation] && objectsToString(styles[orientation])]: orientation,
      }),
      className,
    );

    // 4. return
    return (
      <nav>
        <ul {...rest} ref={ref} role="tablist" className={tabsHeaderClasses}>
          {children}
        </ul>
      </nav>
    );
  },
);

TabsHeader.propTypes = {
  indicatorProps: propTypesIndicator,
  className: propTypesClassName,
  children: propTypesChildren,
};

TabsHeader.displayName = "MaterialTailwind.TabsHeader";

export default TabsHeader;
