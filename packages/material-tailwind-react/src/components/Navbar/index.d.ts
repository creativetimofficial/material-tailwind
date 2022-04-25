import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface NavbarProps {
  variant?: "filled" | "gradient";
  color?: "transparent" | "white" | colors;
  shadow?: boolean;
  blurred?: boolean;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

declare function Navbar(props: NavbarProps): JSX.Element;

export { Navbar, NavbarProps };
export default Navbar;