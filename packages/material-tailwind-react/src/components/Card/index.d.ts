import { ReactNode } from "react";

// generic types
import type { colors } from "../../types/generic";

interface CardHeaderProps {
  variant?: "filled" | "gradient";
  color?: "transparent" | "white" | colors;
  shadow?: boolean;
  floated?: boolean;
  className?: string;
  children: ReactNode;
}

declare function CardHeader(props: CardHeaderProps): JSX.Element;

interface CardBodyProps {
  className?: string;
  children: ReactNode;
}

declare function CardBody(props: CardBodyProps): JSX.Element;

interface CardFooterProps {
  divider?: boolean;
  className?: string;
  children: ReactNode;
}

declare function CardFooter(props: CardFooterProps): JSX.Element;

interface CardProps {
  variant?: "filled" | "gradient";
  color?: "transparent" | "white" | colors;
  shadow?: boolean;
  className?: string;
  children: ReactNode;
}

declare function Card(props: CardProps): JSX.Element;

export {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps
}

export default Card;