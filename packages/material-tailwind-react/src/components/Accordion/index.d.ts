import { ReactNode } from "react";

// generic types
import type { animate } from "../../types/generic";

interface AccordionHeaderProps {
  className?: string;
  children: ReactNode
}

declare function AccordionHeader(props: AccordionHeaderProps): JSX.Element;

interface AccordionBodyProps {
  className?: string;
  children: ReactNode;
}

declare function AccordionBody(props: AccordionBodyProps): JSX.Element;

interface AccordionProps {
  open: boolean;
  icon?: ReactNode;
  animate?: animate;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

declare function Accordion(props: AccordionProps): JSX.Element;

export {
  Accordion,
  AccordionHeader,
  AccordionBody,
  AccordionProps,
  AccordionHeaderProps,
  AccordionBodyProps
}

export default Accordion;