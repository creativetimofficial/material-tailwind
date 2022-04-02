import inputOutlinedLabel from "theme/components/input/inputOutlined/inputOutlinedLabel";
import inputOutlinedColors from "theme/components/input/inputOutlined/inputOutlinedColors";
import inputOutlinedLabelColors from "theme/components/input/inputOutlined/inputOutlinedLabelColors";

const inputOutlined = {
  base: {
    input: {
      simple: {
        borderWidth: "placeholder-shown:border",
        borderColor: "placeholder-shown:border-grey-400 placeholder-shown:border-t-grey-400",
      },
      floated: {
        borderWidth: "border-2 focus:border-2",
        borderColor: "border-t-transparent focus:border-t-transparent",
      },
    },
    label: inputOutlinedLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-10",
      },
      input: {
        fontSize: "text-sm",
        px: "px-3",
        py: "py-2.5",
        borderRadius: "rounded-md",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-[3.75]",
      },
    },
    lg: {
      container: {
        height: "h-11",
      },
      input: {
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
    input: inputOutlinedColors,
    label: inputOutlinedLabelColors,
  },
};

export default inputOutlined;
