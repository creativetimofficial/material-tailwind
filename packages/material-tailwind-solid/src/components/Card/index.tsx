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
    const cardRoot = objectsToString(theme().card.styles.base.initial);
    const color = findMatch(theme().card.valid.colors, mergedProps.color, "white");
    const variant = findMatch(theme().card.valid.variants, mergedProps.variant, "filled");
    const variants = theme().card.styles.variants;
    const cardVariant = objectsToString(variants[variant][color]);

    return twMerge(
      classnames(cardRoot, cardVariant, {
        [objectsToString(theme().card.styles.base.shadow)]: mergedProps.shadow,
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

// Card.propTypes = {
//   variant: PropTypes.oneOf(propTypesVariant),
//   color: PropTypes.oneOf(propTypesColor),
//   shadow: propTypesShadow,
//   className: propTypesClassName,
//   children: propTypesChildren,
// };

// Card.displayName = "MaterialTailwind.Card";

export type { CardHeaderProps, CardFooterProps };
export { Card, CardHeader, CardBody, CardFooter };
export default Object.assign(Card, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
