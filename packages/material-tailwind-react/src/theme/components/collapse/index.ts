// types
import type { className, animate } from "../../../types/components/collapse";

export interface CollapseStylesType {
  defaultProps?: {
    animate?: animate;
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const collapse: CollapseStylesType = {
  defaultProps: {
    animate: {
      unmount: {},
      mount: {},
    },
    className: "",
  },
  styles: {
    base: {
      display: "block",
      width: "w-full",
      basis: "basis-full",
      overflow: "overflow-hidden",
    },
  },
};

export default collapse;
