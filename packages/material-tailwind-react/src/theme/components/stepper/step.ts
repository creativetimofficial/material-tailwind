export interface StepStyleTypes {
  styles?: {
    base?: {
      initial?: object;
      active?: object;
      completed?: object;
    };
  };
}

export const step: StepStyleTypes = {
  styles: {
    base: {
      initial: {
        position: "relative",
        zIndex: "z-10",
        display: "grid",
        placeItems: "place-items-center",
        width: "w-10",
        height: "h-10",
        borderRadius: "rounded-full",
        backgroundColor: "bg-blue-gray-200",
        color: "text-white",
        ring: "ring-0 ring-blue-100",
        fontWeight: "font-bold",
        transition: "transition-all duration-300",
      },
      active: {
        backgroundColor: "bg-blue-500",
        ring: "ring-8",
      },
      completed: {
        backgroundColor: "bg-blue-500",
      },
    },
  },
};

export default step;
