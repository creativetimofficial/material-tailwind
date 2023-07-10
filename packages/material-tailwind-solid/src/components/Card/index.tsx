// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// card components
import type { CardHeaderProps } from "./CardHeader";
import { CardHeader } from "./CardHeader";
import { CardBody } from "./CardBody";
import type { CardFooterProps } from "./CardFooter";
import { CardFooter } from "./CardFooter";

// types
import type { variant, color, shadow } from "../../types/components/card";
import type { ParentComponent, JSX } from "solid-js";
import { mergeProps, createMemo } from "solid-js";

export interface CardProps {
  variant?: variant;
  color?: color;
  shadow?: shadow;
}

const Card: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & CardProps> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().card.defaultProps, props);

  // 3. set styles
  const classes = createMemo(() => {
    const card = theme().card;
    const { styles, valid } = card;
    const { base, variants } = styles;

    const cardRoot = objectsToString(base.initial);
    const cardVariant = objectsToString(
      variants[findMatch(valid.variants, mergedProps.variant, "filled")][
        findMatch(valid.colors, mergedProps.color, "white")
      ],
    );

    return twMerge(
      classnames(cardRoot, cardVariant, {
        [objectsToString(base.shadow)]: mergedProps.shadow,
      }),
      mergedProps.class,
    );
  });

  // 4. return
  return (
    <div {...mergedProps} class={classes()}>
      {props.children}
    </div>
  );
};

export type { CardHeaderProps, CardFooterProps };
export { Card, CardHeader, CardBody, CardFooter };
export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
