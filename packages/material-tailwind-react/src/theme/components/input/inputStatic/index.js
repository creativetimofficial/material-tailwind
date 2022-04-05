import inputStaticLabel from "theme/components/input/inputStatic/inputStaticLabel";
import inputStaticColors from "theme/components/input/inputStatic/inputStaticColors";
import inputStaticLabelColors from "theme/components/input/inputStatic/inputStaticLabelColors";

const inputStatic = {
  base: {
    input: {
      borderWidth: "border-b",
      borderColor: "placeholder-shown:border-blue-grey-200",
    },
    label: inputStaticLabel,
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
        lineHeight: "peer-placeholder-shown:leading-tight",
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
        lineHeight: "peer-placeholder-shown:leading-tight",
      },
    },
  },
  colors: {
    input: inputStaticColors,
    label: inputStaticLabelColors,
  },
};

export default inputStatic;
