import radioColors from "theme/components/radio/radioColors";

const radio = {
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
      root: "relative flex items-center cursor-pointer",
      spacing: {
        x: "px-3",
        y: "py-3",
      },
      border: {
        radius: "rounded-full",
      },
      before: {
        root: "before:content[''] before:block",
        spacing: {
          width: "before:w-12",
          height: "before:h-12",
        },
        border: {
          radius: "before:rounded-full",
        },
        position: "before:absolute before:top-2/4 before:left-2/4",
        transform: "before:-translate-y-2/4 before:-translate-x-2/4",
        transition: "before:transition-opacity",
        opacity: "before:opacity-0 hover:before:opacity-20",
      },
    },
    radio: {
      root: "relative appearance-none cursor-pointer",
      spacing: {
        width: "w-5",
        height: "h-5",
      },
      border: {
        width: "border",
        radius: "rounded-full",
        color: "border-grey-400",
      },
      transition: "transition-all",
    },
    label: {
      root: "cursor-pointer select-none mt-px",
      typography: {
        weight: "font-light",
        color: "text-grey-700",
      },
    },
    colors: radioColors,
  },
};

export default radio;
