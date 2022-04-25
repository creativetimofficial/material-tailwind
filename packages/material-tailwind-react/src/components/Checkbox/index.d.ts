import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface CheckboxProps {
  color?: colors;
  label?: string,
  icon?: ReactNode,
  ripple?: boolean,
  className?: string,
  containerProps?: object,
  labelProps?: object,
}

declare function Checkbox(props: CheckboxProps): JSX.Element;

export { Checkbox, CheckboxProps };
export default Checkbox;