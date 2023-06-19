import { Accessor, createContext, useContext } from "solid-js";
import { StepperProps } from ".";

interface IStepperContext {
  stepperProps: StepperProps;
  tree: Accessor<HTMLDivElement[]>;
  addToTree: (el: HTMLDivElement) => HTMLDivElement[];
  removeFromTree: (id: string) => HTMLDivElement[];

  cProps: Accessor<{
    width: number;
    isFirstStepValue: boolean;
    isLastStepValue: boolean;
    isReachEnd: boolean;
    stepperClasses: string;
    lineClasses: string;
    activeLineClasses: string;
    activeStepClasses: string;
    completedStepClasses: string;
    activeElement: HTMLDivElement | undefined;
  }>;
}
export const StepperContext = createContext<Accessor<IStepperContext | null>>(() => null);

export function useStepperContext() {
  return useContext(StepperContext);
}
