// types
import type { color, className } from "../../../types/components/spinner";
import { propTypesColor } from "../../../types/components/spinner";
import spinnerColor from "./spinnerColor";

export interface SpinnerStyleTypes {
  defaultProps?: {
    color?: color;
    className?: className;
  };
  valid?: {
    colors?: string[];
  };
  styles?: {
    base?: object;
    colors?: typeof spinnerColor;
  };
}

export const spinner: SpinnerStyleTypes = {
  defaultProps: {
    color: "blue",
    className: "",
  },
  valid: {
    colors: propTypesColor,
  },
  styles: {
    base: {
      color: "text-blue-gray-100",
      animation: "animate-spin",
    },
    colors: spinnerColor,
  },
};

export default spinner;
