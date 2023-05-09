export interface StepperStyleTypes {
  styles?: {
    base?: {
      stepper?: object;
      line?: {
        initial?: object;
        active?: object;
      };
    };
  };
}

export const stepper: StepperStyleTypes = {
  styles: {
    base: {
      stepper: {
        width: "w-full",
        position: "relative",
        display: "flex",
        alignItems: "items-center",
        justifyContent: "justify-between",
      },
      line: {
        initial: {
          position: "absolute",
          left: "left-0",
          top: "top-2/4",
          height: "h-0.5",
          width: "w-full",
          transform: "-translate-y-2/4",
          backgroundColor: "bg-blue-gray-200",
        },
        active: {
          backgroundColor: "bg-blue-500",
          transition: "transition-all",
          duration: "duration-500",
        },
      },
    },
  },
};

export default stepper;
