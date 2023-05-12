// types
import { DeepRequired } from "ts-essentials";
import type { divider } from "../../../types/components/card";

export interface CardFooterStylesType {
  defaultProps?: {
    class?: string;
    divider?: divider;
  };
  styles?: {
    base?: {
      initial?: object;
      divider?: object;
    };
  };
}
export type CardFooterType = DeepRequired<CardFooterStylesType>;
export const cardFooter: CardFooterType = {
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
