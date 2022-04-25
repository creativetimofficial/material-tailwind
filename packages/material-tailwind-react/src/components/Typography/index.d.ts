import { ElementType, ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface AlertProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
  color?: "inherit" | "current" | "black" | "white" | colors;
  as?: ElementType;
  textGradient?: boolean;
  className?: string;
  children: ReactNode;
}

declare function Alert(props: AlertProps): JSX.Element;

export { Alert, AlertProps };
export default Alert;