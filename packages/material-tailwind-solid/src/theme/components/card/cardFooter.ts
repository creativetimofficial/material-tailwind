// types
import type { divider } from "../../../types/components/card";

export interface CardFooterStylesType {
  defaultProps: {
    class: string;
    divider: divider;
  };
  styles: {
    base: {
      initial: object;
      divider: object;
    };
  };
}

export const cardFooter: CardFooterStylesType = {
  defaultProps: {
    class: "",
    divider: false,
  },
  styles: {
    base: {
      initial: {
        p: "p-6",
      },
      divider: {
        borderWidth: "border-t",
        borderColor: "border-blue-gray-50",
      },
    },
  },
};

export default cardFooter;
