import buttonGroupDividerColor from "./buttonGroupDividerColor";

// types
import type { variant, size, color, fullWidth, ripple } from "../../../types/components/button";
import { propTypesVariant, propTypesSize, propTypesColor } from "../../../types/components/button";
import type { DeepRequired } from "ts-essentials";

export interface ButtonGroupStyleTypes {
  defaultProps: {
    variant: variant;
    size: size;
    color: color;
    fullWidth: fullWidth;
    ripple: ripple;
    class: string;
  };
  valid: {
    variants: variant[];
    sizes: size[];
    colors: color[];
  };
  styles: {
    base: {
      initial: object;
      fullWidth: object;
    };
    dividerColor: typeof buttonGroupDividerColor;
  };
}

export const buttonGroup: ButtonGroupStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "blue",
    fullWidth: false,
    ripple: true,
    class: "",
  },
  valid: {
    variants: [...propTypesVariant],
    sizes: [...propTypesSize],
    colors: [...propTypesColor],
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        flexDirection: "row",
      },
      fullWidth: {
        width: "w-full",
      },
    },
    dividerColor: buttonGroupDividerColor,
  },
};

export default buttonGroup;
