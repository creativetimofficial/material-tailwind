// types
import type { DeepRequired } from "ts-essentials";

export interface CardBodyStylesType {
  defaultProps: {
    class: string;
  };
  styles: {
    base: Record<string, string>;
  };
}

export const cardBody: CardBodyStylesType = {
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
