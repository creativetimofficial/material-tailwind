import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface RadioProps {
  color?: colors;
  label?: string,
  icon?: ReactNode,
  ripple?: boolean,
  className?: string,
  containerProps?: object,
  labelProps?: object,
}

declare function Radio(props: RadioProps): JSX.Element;

export { Radio, RadioProps };
export default Radio;