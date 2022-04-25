import { ReactNode, Dispatch, SetStateAction } from "react";

// @floating-ui types
import { Placement } from "@floating-ui/react-dom-interactions"

// generic types
import type { animate, offset, dismiss } from "../../types/generic";

interface TooltipProps {
  open: boolean;
  handler: Dispatch<SetStateAction<any>>;
  content: ReactNode | string;
  placement?: Placement;
  offset?: offset;
  dismiss?: dismiss;
  animate?: animate; 
  className?: string;
  children: ReactNode;
}

declare function Tooltip(props: TooltipProps): JSX.Element;

export { Tooltip };
export default Tooltip;