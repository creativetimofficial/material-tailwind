import switchColors from "theme/components/switch/switchColors";

const switchButton = {
  defaultProps: {
    color: "light-blue",
    label: "",
    icon: "",
    containerProps: {},
    labelProps: {},
    ripple: true,
    className: "",
  },
  styles: {
    root: "inline-flex items-center",
    container: {
      root: "inline-block relative cursor-pointer",
      spacing: {
        width: "w-8",
        height: "h-4",
      },
      border: {
        radius: "rounded-full",
      },
    },
    input: {
      root: "peer appearance-none cursor-pointer",
      spacing: {
        width: "w-8",
        height: "h-4",
      },
      border: {
        radius: "rounded-full",
      },
      position: "absolute",
      background: "bg-blue-grey-100",
      transition: "transition-colors duration-300",
    },
    circle: {
      root: "bg-white shadow-md cursor-pointer",
      spacing: {
        width: "w-5",
        height: "h-5",
      },
      border: {
        width: "border",
        color: "border-blue-grey-100",
        radius: "rounded-full",
      },
      position: "absolute top-2/4 -left-1 -translate-y-2/4",
      transition: "transition-all duration-300",
      checked: "peer-checked:translate-x-full",
      before: {
        root: "before:content[''] before:block before:bg-blue-grey-500",
        spacing: {
          width: "before:w-10",
          height: "before:h-10",
        },
        border: {
          radius: "before:rounded-full",
        },
        position:
          "before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4",
        transition: "before:transition-opacity",
        opacity: "before:opacity-0 hover:before:opacity-10",
      },
    },
    ripple: {
      root: "inline-block",
      position: "relative top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",
      spacing: {
        x: "px-5",
        y: "py-5",
      },
      border: {
        radius: "rounded-full",
      },
    },
    label: {
      root: "cursor-pointer select-none mt-px",
      typography: {
        weight: "font-light",
        color: "text-grey-700",
      },
      spacing: {
        x: "ml-3",
      },
    },
    colors: switchColors,
  },
};

export default switchButton;
