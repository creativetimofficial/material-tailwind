import navbarFilled from "theme/components/navbar/navbarFilled";
import navbarGradient from "theme/components/navbar/navbarGradient";
import validColors from "utils/validColors";

const navbar = {
  defaultProps: {
    variant: "filled",
    color: "white",
    shadow: true,
    blurred: true,
    fullWidth: false,
    className: "",
  },
  valid: {
    variants: ["filled", "gradient"],
    colors: ["transparent", "white", ...validColors],
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        flexWrap: "flex-nowrap",
        justifyContent: "justify-start",
        width: "w-full",
        maxWidth: "max-w-screen-2xl",
        borderRadius: "rounded-lg",
        py: "py-4",
        px: "px-8",
      },
      shadow: {
        boxShadow: "shadow-md",
      },
      blurred: {
        backdropFilter: "backdrop-saturate-200 backdrop-blur-xl",
        bgOpacity: "bg-opacity-80",
        borderWidth: "border-b",
        borderColor: "border-blue-grey-50",
      },
      fullWidth: {
        width: "w-full",
        maxWidth: "max-w-full",
        rounded: "rounded-none",
        px: "px-4",
      },
    },
    variants: {
      filled: navbarFilled,
      gradient: navbarGradient,
    },
  },
};

export default navbar;
