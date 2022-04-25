import { ReactNode } from "react";

// generic types
import type { colors, animate } from "../../types/generic";

interface ChipProps {
  variant?: "filled" | "gradient";
  color?: colors;
  icon?: ReactNode;
  show?: boolean;
  dismissible?: {
    action?: ReactNode;
    onClose: () => void;
  };
  animate?: animate;
  className?: string;
  value: string | number;
}

declare function Chip(props: ChipProps): JSX.Element;

export { Chip, ChipProps };
export default Chip;