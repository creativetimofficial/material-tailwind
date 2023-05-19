// types
import type { animate } from "../../../types/components/collapse";

export interface CollapseStylesType {
  defaultProps?: {
    animate?: animate;
  };
  styles: {
    base: object;
  };
}

export const collapse: CollapseStylesType = {
  defaultProps: {
    animate: {
      unmount: {},
      mount: {},
    },
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
