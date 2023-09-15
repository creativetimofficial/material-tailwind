import React from "react";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import {
  className,
  children,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/stepper";

export interface StepProps extends React.ComponentProps<"div"> {
  className?: className;
  activeClassName?: className;
  completedClassName?: className;
  children?: children;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ className, activeClassName, completedClassName, children, ...rest }, ref) => {
    // 1. init
    const { step } = useTheme();
    const {
      styles: { base },
    } = step;

    // 3. set styles
    const stepClasses = twMerge(objectsToString(base.initial), className);

    // 4. return
    return (
      <div {...rest} ref={ref} className={stepClasses}>
        {children}
      </div>
    );
  },
);

Step.propTypes = {
  className: propTypesClassName,
  activeClassName: propTypesClassName,
  completedClassName: propTypesClassName,
  children: propTypesChildren,
};

Step.displayName = "MaterialTailwind.Step";

export default Step;
