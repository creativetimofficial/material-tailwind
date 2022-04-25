import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface SwitchProps {
  color?: colors;
  label?: string,
  ripple?: boolean,
  className?: string,
  containerProps?: object,
  circleProps?: object,
  labelProps?: object,
}

declare function Switch(props: SwitchProps): JSX.Element;

export { Switch, SwitchProps };
export default Switch;