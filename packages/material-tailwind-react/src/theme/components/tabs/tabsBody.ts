// types
import type { className, animate } from "../../../types/components/tabs";

export interface TabsBodyStylesType {
  defaultProps?: {
    animate?: animate;
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const tabsBody: TabsBodyStylesType = {
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
      position: "relative",
      bg: "bg-transparent",
      overflow: "overflow-hidden",
    },
  },
};

export default tabsBody;
