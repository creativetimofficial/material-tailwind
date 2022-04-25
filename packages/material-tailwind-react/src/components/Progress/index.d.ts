import { ReactNode } from "react";

// generic types
import type { colors, animate } from "../../types/generic";

interface ProgressProps {
  variant?: "filled" | "gradient";
  color?: colors;
  value: number;
  label?: string | boolean;
  className?: string,
  barProps?: object,
}

declare function Progress(props: ProgressProps): JSX.Element;

export { Progress, ProgressProps };
export default Progress;