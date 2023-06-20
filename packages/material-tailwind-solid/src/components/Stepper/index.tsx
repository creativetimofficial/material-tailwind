// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// components
import Step from "./Step";

// types
import { mergeRefs } from "@solid-primitives/refs";
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, createSignal, splitProps } from "solid-js";
import type { children } from "../../types/components/stepper";
import type { activeStep, isFirstStep, isLastStep } from "../../types/components/stepper";
import { StepperContext } from "./StepperContext";

export interface StepperProps {
  activeStep?: activeStep;
  isFirstStep?: isFirstStep;
  isLastStep?: isLastStep;
  class?: string;
  lineClassName?: string;
  activeLineClassName?: string;
  children: children;
}

const Stepper: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & StepperProps> = (props) => {
  // 1. init
  const theme = useTheme();
  const [stepperProps, rest] = splitProps(props, [
    "class",
    "lineClassName",
    "activeLineClassName",
    "children",
    "activeStep",
    "isFirstStep",
    "isLastStep",
    "ref",
  ]);
  const [containerRef, setcontainerRef] = createSignal<HTMLDivElement | null>(null);
  const [tree, setTree] = createSignal<HTMLDivElement[]>([]);
  // 2. caluclate values and styles
  const cProps = createMemo(() => {
    const {
      styles: { base },
    } = theme().stepper;
    const {
      styles: { base: stepBase },
    } = theme().step;

    const containerRefRect = containerRef()?.getBoundingClientRect();
    const steps = tree().length === 1 ? 1 : tree().length - 1;
    const widthPerStepCalc = (containerRefRect?.width || 0) / steps;

    const isFirstStepValue = stepperProps.activeStep === 0;
    const isLastStepValue = stepperProps.activeStep === tree().length - 1;
    const isReachEnd = !stepperProps.activeStep || stepperProps.activeStep > tree().length - 1;

    // 3. set styles
    const stepperClasses = twMerge(objectsToString(base.stepper), stepperProps.class);
    const lineClasses = twMerge(objectsToString(base.line.initial), stepperProps.lineClassName);
    const activeLineClasses = twMerge(
      lineClasses,
      objectsToString(base.line.active),
      stepperProps.activeLineClassName,
    );
    const activeStepClasses = objectsToString(stepBase.active);
    const completedStepClasses = objectsToString(stepBase.completed);
    const activeElement =
      (stepperProps.activeStep !== undefined && tree()[stepperProps.activeStep]) || undefined;
    return {
      width: widthPerStepCalc * (stepperProps.activeStep || 0),
      isFirstStepValue,
      isLastStepValue,
      isReachEnd,
      stepperClasses,
      lineClasses,
      activeLineClasses,
      activeStepClasses,
      completedStepClasses,
      activeElement,
    };
  });

  const ctx = createMemo(() => ({
    stepperProps,
    tree,
    addToTree: (el: HTMLDivElement) => setTree((prev) => [...prev, el]),
    removeFromTree: (id: string) => setTree((prev) => prev.filter((el) => el.id !== id)),
    cProps,
  }));

  // 4. return
  return (
    <div
      {...rest}
      ref={mergeRefs(
        (el) => setcontainerRef(el),
        (el) => (typeof stepperProps.ref === "function" ? stepperProps.ref(el) : stepperProps.ref),
      )}
      class={cProps().stepperClasses}
    >
      {
        (stepperProps.isLastStep &&
          typeof stepperProps.isLastStep === "function" &&
          stepperProps.isLastStep(cProps().isLastStepValue)) as any
      }
      {
        (stepperProps.isFirstStep &&
          typeof stepperProps.isFirstStep === "function" &&
          stepperProps.isFirstStep(cProps().isFirstStepValue)) as any
      }
      <div class={cProps().lineClasses} />
      <div
        class={cProps().activeLineClasses}
        style={{
          width: `${cProps().width}px`,
        }}
      />
      <StepperContext.Provider value={ctx}>{props.children}</StepperContext.Provider>
    </div>
  );
};

export { Stepper, Step };
export default Object.assign(Stepper, {
  Step,
});
