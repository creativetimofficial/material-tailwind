// types
import type { color } from "../../../types/components/spinner";
import { propTypesColor } from "../../../types/components/spinner";
import spinnerColor from "./spinnerColor";

export interface SpinnerStyleTypes {
  defaultProps: {
    color: color;
    class: string;
  };
  valid: {
    colors: color[];
  };
  styles: {
    base: object;
    colors: typeof spinnerColor;
  };
}

export const spinner: SpinnerStyleTypes = {
  defaultProps: {
    color: "blue",
    class: "",
  },
  valid: {
    colors: [...propTypesColor],
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
