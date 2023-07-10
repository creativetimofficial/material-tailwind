// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { variant, color, shadow, floated } from "../../types/components/card";
import type { ParentComponent, JSX } from "solid-js";
import { mergeProps, createMemo } from "solid-js";

export interface CardHeaderProps {
  variant?: variant;
  color?: color;
  shadow?: shadow;
  floated?: floated;
}

export const CardHeader: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & CardHeaderProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();
  // 2. Set default values
  const mergedProps = mergeProps(() => theme().cardHeader.defaultProps, props);

  // 3. set styles
  const classes = createMemo(() => {
    const cardHeader = theme().cardHeader;
    const { styles, valid } = cardHeader;
    const { base, variants } = styles;
    const cardHeaderRoot = objectsToString(base.initial);

    const cardHeaderVariant = objectsToString(
      variants[findMatch(valid.variants, mergedProps.variant, "filled")][
        findMatch(valid.colors, mergedProps.color, "white")
      ],
    );

    return twMerge(
      classnames(
        cardHeaderRoot,
        cardHeaderVariant,
        { [objectsToString(base.shadow)]: mergedProps.shadow },
        { [objectsToString(base.floated)]: mergedProps.floated },
      ),
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

export default CardHeader;
