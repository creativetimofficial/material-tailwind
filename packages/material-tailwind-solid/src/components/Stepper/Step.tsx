// utils
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, JSXElement, ParentComponent } from "solid-js";
import { createMemo, createSignal, createUniqueId, onCleanup, onMount, splitProps } from "solid-js";
import { useStepperContext } from "./StepperContext";
import { mergeRefs } from "@solid-primitives/refs";
import classnames from "classnames";

export interface StepProps {
  activeClassName?: string;
  completedClassName?: string;
  children?: JSXElement;
}

export const Step: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & StepProps> = (props) => {
  // 1. init
  const [ref, setRef] = createSignal<HTMLDivElement | null>(null);
  const theme = useTheme();
  const context = useStepperContext();
  const [stepProps, rest] = splitProps(props, [
    "class",
    "activeClassName",
    "completedClassName",
    "children",
  ]);
  const id = createMemo(() => rest.id || createUniqueId());
  // 3. set styles
  const styles = createMemo(() => {
    const {
      styles: { base },
    } = theme().step;
    const activeElement = context()?.cProps().activeElement;
    const itemIndex = context()?.tree()?.indexOf(ref()!);
    const activeStep = activeElement && context()?.tree()?.indexOf(activeElement);
    const isActive = itemIndex === activeStep;
    const isCompleted =
      activeStep !== undefined && itemIndex !== undefined && itemIndex < activeStep;
    const stepClasses = twMerge(
      classnames(
        objectsToString(base.initial),
        stepProps.class,
        isActive && context()?.cProps().activeStepClasses,
        isCompleted && context()?.cProps().completedStepClasses,
      ),
    );
    return { stepClasses };
  });
  onMount(() => {
    ref() && context()?.addToTree(ref()!);
  });
  onCleanup(() => {
    context()?.removeFromTree(id());
  });
  // 4. return
  return (
    <div
      {...rest}
      ref={mergeRefs((el) => setRef(el), rest.ref)}
      id={id()}
      class={styles().stepClasses}
    >
      {stepProps.children}
    </div>
  );
};

export default Step;
