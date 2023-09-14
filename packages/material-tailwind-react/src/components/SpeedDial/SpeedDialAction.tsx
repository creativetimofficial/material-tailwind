import React from "react";

// context
import { useTheme } from "../../context/theme";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// types
import { propTypesChildren, propTypesClassName } from "../../types/components/speedDial";

export interface SpeedDialActionProps extends React.ComponentProps<"button"> {}

export const SpeedDialAction = React.forwardRef<HTMLButtonElement, SpeedDialActionProps>(
  ({ className, children, ...rest }, ref) => {
    // 1. init
    const {
      speedDialAction: { styles },
    } = useTheme();

    // 2. set styles
    const classes = twMerge(objectsToString(styles), className);

    // 3. return
    return (
      <button {...rest} ref={ref} className={classes}>
        {children}
      </button>
    );
  },
);

SpeedDialAction.propTypes = {
  children: propTypesChildren,
  className: propTypesClassName,
};

SpeedDialAction.displayName = "SpeedDialAction";

export default SpeedDialAction;
