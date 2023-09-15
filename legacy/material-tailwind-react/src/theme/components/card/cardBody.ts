// types
import type { className } from "../../../types/components/card";

export interface CardBodyStylesType {
  defaultProps?: {
    className?: className;
  };
  styles?: {
    base?: object;
  };
}

export const cardBody: CardBodyStylesType = {
  defaultProps: {
    className: "",
  },
  styles: {
    base: {
      p: "p-6",
    },
  },
};

export default cardBody;
