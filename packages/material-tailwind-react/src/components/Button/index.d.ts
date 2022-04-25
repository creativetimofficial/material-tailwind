import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface ButtonProps {
  variant?: "filled" | "outlined" | "gradient" | "text";
  size?: "sm" | "md" | "lg";
  color?: colors,
  fullWidth?: boolean,
  ripple?: boolean,
  className?: string,
  children: ReactNode,
}

declare function Button(props: ButtonProps): JSX.Element;

export { Button, ButtonProps };
export default Button;