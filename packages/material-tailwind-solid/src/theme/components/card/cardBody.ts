// types
import type { DeepRequired } from "ts-essentials";

export interface CardBodyStylesType {
  defaultProps?: {
    class?: string;
  };
  styles?: {
    base?: object;
  };
}
export type CardBodyProps = DeepRequired<CardBodyStylesType>;
export const cardBody: CardBodyProps = {
  defaultProps: {
    class: "",
  },
  styles: {
    base: {
      p: "p-6",
    },
  },
};

export default cardBody;
