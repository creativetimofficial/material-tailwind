import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface InputProps {
  variant?: "standard" | "outlined" | "static";
  size?: "md" | "lg";
  color?: colors;
  label?: string;
  error?: boolean;
  success?: boolean;
  icon?: ReactNode;
  labelProps?: object;
  className?: string;
}

declare function Input(props: InputProps): JSX.Element;

export { Input, InputProps };
export default Input;