import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface IconButtonProps {
  variant?: "filled" | "outlined" | "gradient" | "text";
  size?: "sm" | "md" | "lg";
  color?: colors,
  ripple?: boolean,
  className?: string,
  children: ReactNode,
}

declare function IconButton(props: IconButtonProps): JSX.Element;

export { IconButton, IconButtonProps };
export default IconButton;