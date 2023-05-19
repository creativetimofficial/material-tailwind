// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { variant, color, shadow, floated } from "../../types/components/card";
import type { ParentComponent, JSX} from "solid-js";
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
    const cardHeaderRoot = objectsToString(theme().cardHeader.styles.base.initial);

    const fColor = findMatch(theme().cardHeader.valid.colors, mergedProps.color, "white");
    const fVariant = findMatch(theme().cardHeader.valid.variants, mergedProps.variant, "filled");
    const variants = theme().cardHeader.styles.variants;
    const cardHeaderVariant = objectsToString(variants[fVariant][fColor]);

    return twMerge(
      classnames(
        cardHeaderRoot,
        cardHeaderVariant,
        { [objectsToString(theme().cardHeader.styles.base.shadow)]: mergedProps.shadow },
        { [objectsToString(theme().cardHeader.styles.base.floated)]: mergedProps.floated },
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

// CardHeader.propTypes = {
//   variant: PropTypes.oneOf(propTypesVariant),
//   color: PropTypes.oneOf(propTypesColor),
//   shadow: propTypesShadow,
//   floated: propTypesFloated,
//   className: propTypesClassName,
//   children: propTypesChildren,
// };

// CardHeader.displayName = "MaterialTailwind.CardHeader";

export default CardHeader;
