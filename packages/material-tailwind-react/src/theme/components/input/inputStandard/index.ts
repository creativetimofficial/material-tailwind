import inputStandardLabel from "./inputStandardLabel";
import inputStandardColors from "./inputStandardColors";
import inputStandardLabelColors from "./inputStandardLabelColors";

const inputStandard = {
  base: {
    input: {
      borderWidth: "border-b",
      borderColor: "placeholder-shown:border-blue-gray-200",
    },
    inputWithIcon: {
      pr: "!pr-7",
    },
    icon: {
      top: "top-2/4",
      right: "right-0",
      transform: "-translate-y-1/4",
    },
    label: inputStandardLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-11",
      },
      input: {
        fontSize: "text-sm",
        pt: "pt-4",
        pb: "pb-1.5",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.25]",
      },
      icon: {
        width: "w-5",
        height: "h-5",
      },
    },
    lg: {
      container: {
        height: "h-12",
      },
      input: {
        fontSize: "text-sm",
        px: "px-px",
        pt: "pt-5",
        pb: "pb-2",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.875]",
      },
      icon: {
        width: "w-6",
        height: "h-6",
      },
    },
  },
  colors: {
    input: inputStandardColors,
    label: inputStandardLabelColors,
  },
  error: {
    input: {
      borderColor: "border-red-500 placeholder-shown:border-red-500",
      borderColorFocused: "focus:border-red-500",
    },
    label: {
      color: "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
      after: "after:border-red-500 peer-focus:after:border-red-500",
    },
  },
  success: {
    input: {
      borderColor: "border-green-500 placeholder-shown:border-green-500",
      borderColorFocused: "focus:border-green-500",
    },
    label: {
      color: "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
      after: "after:border-green-500 peer-focus:after:border-green-500",
    },
  },
  shrink: {
    input: {},
    label: {
      fontSize: "!text-[11px]",
      lineHeight: "!leading-tight",
    },
  },
};

export default inputStandard;
