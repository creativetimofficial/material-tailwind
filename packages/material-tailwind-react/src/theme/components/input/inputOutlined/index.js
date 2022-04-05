import inputOutlinedLabel from "theme/components/input/inputOutlined/inputOutlinedLabel";
import inputOutlinedColors from "theme/components/input/inputOutlined/inputOutlinedColors";
import inputOutlinedLabelColors from "theme/components/input/inputOutlined/inputOutlinedLabelColors";

const inputOutlined = {
  base: {
    input: {
      borderWidth: "placeholder-shown:border",
      borderColor:
        "placeholder-shown:border-blue-grey-200 placeholder-shown:border-t-blue-grey-200",
      floated: {
        borderWidth: "border focus:border-2",
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
