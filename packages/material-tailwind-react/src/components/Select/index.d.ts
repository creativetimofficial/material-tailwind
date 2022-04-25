import { ReactNode } from "react";

// downshift.js types
import { UseSelectStateChange } from "downshift"

// generic types
import type { colors } from "../../types/generic";

interface SelectOptionProps {
  disabled?: boolean;
  value?: string | number;
  children: ReactNode;
}

declare function SelectOption(props: SelectOptionProps): JSX.Element;

interface SelectProps {
  variant?: "standard" | "outlined" | "static";
  size?: "md" | "lg";
  color?: colors;
  label?: string;
  error?: boolean;
  success?: boolean;
  arrow?: ReactNode;
  value?: ReactNode;
  open?: boolean;
  onChange?: (changes: UseSelectStateChange<any>) => void,
  labelProps?: object;
  menuProps?: object;
  className?: string;
  children: ReactNode;
}

declare function Select(props: SelectProps): JSX.Element;

export { Select, SelectOption, SelectProps, SelectOptionProps };
export default Select;