import { ReactNode, Dispatch, SetStateAction } from "react";

// @floating-ui types
import { Placement } from "@floating-ui/react-dom-interactions"

// generic types
import type { animate, offset, dismiss } from "../../types/generic";

interface PopoverProps {
  open: boolean;
  handler: Dispatch<SetStateAction<any>>;
  node: ReactNode;
  placement?: Placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate; 
  className?: string;
  children: ReactNode;
}

declare function Popover(props: PopoverProps): JSX.Element;

export { Popover };
export default Popover;