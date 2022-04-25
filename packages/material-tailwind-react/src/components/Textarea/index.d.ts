import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface TextareaProps {
  variant?: "standard" | "outlined" | "static";
  size?: "md" | "lg";
  color?: colors;
  label?: string;
  error?: boolean;
  success?: boolean;
  resize?: boolean;
  labelProps?: object;
  className?: string;
}

declare function Textarea(props: TextareaProps): JSX.Element;

export { Textarea, TextareaProps };
export default Textarea;