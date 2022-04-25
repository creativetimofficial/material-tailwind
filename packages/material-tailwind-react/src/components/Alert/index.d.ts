import { ReactNode } from "react";

// generic types
import type { colors, animate } from "../../types/generic";

interface AlertProps {
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
  children: ReactNode;
}

declare function Alert(props: AlertProps): JSX.Element;

export { Alert, AlertProps };
export default Alert;