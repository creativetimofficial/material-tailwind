import textareaOutlinedLabel from "./textareaOutlinedLabel";
import textareaOutlinedColors from "./textareaOutlinedColors";
import textareaOutlinedLabelColors from "./textareaOutlinedLabelColors";

const textareaOutlined = {
  base: {
    textarea: {
      borderWidth: "placeholder-shown:border",
      borderColor:
        "placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200",
      floated: {
        borderWidth: "border focus:border-2",
        borderColor: "border-t-transparent focus:border-t-transparent",
      },
    },
    label: textareaOutlinedLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-10",
      },
      textarea: {
        fontSize: "text-sm",
        px: "px-3",
        py: "py-2.5",
        borderRadius: "rounded-[7px]",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[3.75]",
      },
    },
    lg: {
      container: {
        height: "h-11",
      },
      textarea: {
        fontSize: "text-sm",
        px: "px-3",
        py: "py-3",
        borderRadius: "rounded-md",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[4.1]",
      },
    },
  },
  colors: {
    textarea: textareaOutlinedColors,
    label: textareaOutlinedLabelColors,
  },
  error: {
    textarea: {
      borderColor:
        "border-red-500 placeholder-shown:border-t-red-500 placeholder-shown:border-red-500",
      borderColorFocused: "focus:border-red-500",
    },
    label: {
      color: "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
      before: "before:border-red-500 peer-focus:before:border-red-500",
      after: "after:border-red-500 peer-focus:after:border-red-500",
    },
  },
  success: {
    textarea: {
      borderColor:
        "border-green-500 placeholder-shown:border-t-green-500 placeholder-shown:border-green-500",
      borderColorFocused: "focus:border-green-500",
    },
    label: {
      color: "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
      before: "before:border-green-500 peer-focus:before:border-green-500",
      after: "after:border-green-500 peer-focus:after:border-green-500",
    },
  },
  shrink: {
    textarea: {
      borderTop: "!border-t-transparent",
    },
    label: {
      fontSize: "!text-[11px]",
      lineHeight: "!leading-tight",
      borderColor: "before:!border-blue-gray-200 after:!border-blue-gray-200",
    },
  },
};

export default textareaOutlined;
