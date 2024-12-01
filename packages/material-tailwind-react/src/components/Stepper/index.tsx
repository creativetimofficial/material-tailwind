import React from "react";

// @floating-ui
import { useMergeRefs } from "@floating-ui/react";

// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// components
import Step from "./Step";

// types
import {
  isFirstStep,
  isLastStep,
  activeStep,
  className,
  children,
  propTypesActiveStep,
  propTypesIsFirstStep,
  propTypesIsLastStep,
  propTypesClassName,
  propTypesChildren,
} from "../../types/components/stepper";

export interface StepperProps extends React.ComponentProps<"div"> {
  activeStep?: activeStep;
  isFirstStep?: isFirstStep;
  isLastStep?: isLastStep;
  className?: className;
  lineClassName?: className;
  activeLineClassName?: className;
  children: children;
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      activeStep,
      isFirstStep,
      isLastStep,
      className,
      lineClassName,
      activeLineClassName,
      children,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { stepper, step } = useTheme();
    const {
      styles: { base },
    } = stepper;
    const {
      styles: { base: stepBase },
    } = step;
    const containerRef = React.useRef(null);

    const [widthPerStep, setWidthPerStep] = React.useState(0);
    const isFirstStepValue = activeStep === 0;
    const isLastStepValue = Array.isArray(children) && activeStep === children.length - 1;
    const isReachEnd = Array.isArray(children) && activeStep > children.length - 1;

    React.useEffect(() => {
      if (containerRef.current) {
        const childrenInstance: any = children;
        const { width } = containerRef.current.getBoundingClientRect();
        const widthPerStepCalc = width / (childrenInstance.length - 1);

        setWidthPerStep(widthPerStepCalc);
      }
    }, [children]);

    const width = React.useMemo(() => {
      if (!isReachEnd) {
        return widthPerStep * activeStep;
      }
    }, [activeStep, isReachEnd, widthPerStep]);

    const mergedRef = useMergeRefs([ref, containerRef]);

    // 3. set styles
    const stepperClasses = twMerge(objectsToString(base.stepper), className);
    const lineClasses = twMerge(objectsToString(base.line.initial), lineClassName);
    const activeLineClasses = twMerge(
      lineClasses,
      objectsToString(base.line.active),
      activeLineClassName,
    );
    const activeStepClasses = objectsToString(stepBase.active);
    const completedStepClasses = objectsToString(stepBase.completed);

    React.useEffect(() => {
      isLastStep && typeof isLastStep === "function" && isLastStep(isLastStepValue);
      isFirstStep && typeof isFirstStep === "function" && isFirstStep(isFirstStepValue);
    }, [isFirstStep, isFirstStepValue, isLastStep, isLastStepValue]);

    // 4. return
    return (
      <div {...rest} ref={containerRef} className={stepperClasses}>
        <div className={lineClasses} />
        <div
          className={activeLineClasses}
          style={{
            width: `${width}px`,
          }}
        />
        {Array.isArray(children)
          ? children.map((child: any, index) => {
              return React.cloneElement(child, {
                key: index,
                ...child.props,
                className: twMerge(
                  child.props.className,
                  index === activeStep
                    ? twMerge(activeStepClasses, child.props?.activeClassName)
                    : index < activeStep
                    ? twMerge(completedStepClasses, child.props?.completedClassName)
                    : "",
                ),
              });
            })
          : children}
      </div>
    );
  },
);

Stepper.propTypes = {
  activeStep: propTypesActiveStep,
  isFirstStep: propTypesIsFirstStep,
  isLastStep: propTypesIsLastStep,
  className: propTypesClassName,
  lineClassName: propTypesClassName,
  activeLineClassName: propTypesClassName,
  children: propTypesChildren,
};

Stepper.displayName = "MaterialTailwind.Stepper";

export { Stepper, Step };
export default Object.assign(Stepper, {
  Step,
});
