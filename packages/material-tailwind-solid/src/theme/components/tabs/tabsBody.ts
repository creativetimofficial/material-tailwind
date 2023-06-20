// types
import type { animate } from "../../../types/components/tabs";

export interface TabsBodyStylesType {
  defaultProps: {
    animate: animate;
    class: string;
  };
  styles: {
    base: Record<string, string>;
  };
}

export const tabsBody: TabsBodyStylesType = {
  defaultProps: {
    animate: {
      unmount: {},
      mount: {},
    },
    class: "",
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
