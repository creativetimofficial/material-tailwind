import { createMemo, mergeProps, splitProps } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";

// utils
import Ripple from "material-ripple-effects";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { variant, size, color, fullWidth, ripple } from "../../types/components/button";
// import {
//   propTypesVariant,
//   propTypesSize,
//   propTypesColor,
//   propTypesFullWidth,
//   propTypesRipple,
//   propTypesClassName,
//   propTypesChildren,
// } from "../../types/components/button";

export interface ButtonProps {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
}

export const Button: ParentComponent<ButtonProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().button.defaultProps, props);
  const [defaultProps, rest] = splitProps(mergedProps, [
    "variant",
    "size",
    "color",
    "fullWidth",
    "ripple",
  ]);

  // 3. set ripple effect instance
  const rippleEffect = createMemo(() => defaultProps.ripple !== undefined && new Ripple());

  // 4. set styles
  const buttonBase = objectsToString(theme().button.styles.base.initial);

  const buttonVariant = createMemo(() => {
    const fColor = findMatch(theme().button.valid.colors, defaultProps.color, "blue");

    const fVariant = findMatch(theme().button.valid.variants, defaultProps.variant, "filled");
    const variants = theme().button.styles.variants;
    console.log({ fColor, themeColor: theme().button.defaultProps.color, props });
    return objectsToString(variants[fVariant!][fColor!]);
  });

  const buttonSize = createMemo(() =>
    objectsToString(
      theme().button.styles.sizes[findMatch(theme().button.valid.sizes, props.size!, "md")],
    ),
  );

  const classes = createMemo(() =>
    twMerge(
      classnames(buttonBase, buttonSize(), buttonVariant(), {
        [objectsToString(theme().button.styles.base.fullWidth)]: defaultProps.fullWidth,
      }),
      props.class,
    ),
  );

  // 5. return
  return (
    <button
      {...rest}
      class={classes()}
      type={props.type || "button"}
      onMouseDown={(e) => {
        const onMouseDown = props.onMouseDown;

        if (defaultProps.ripple) {
          rippleEffect().create(
            e,
            defaultProps.variant === "filled" || defaultProps.variant === "gradient"
              ? "light"
              : "dark",
          );
        }

        return typeof onMouseDown === "function" && onMouseDown(e);
      }}
    >
      {props.children}
    </button>
  );
};

// Button.propTypes = {
//   variant: PropTypes.oneOf(propTypesVariant),
//   size: PropTypes.oneOf(propTypesSize),
//   color: PropTypes.oneOf(propTypesColor),
//   fullWidth: propTypesFullWidth,
//   ripple: propTypesRipple,
//   className: propTypesClassName,
//   children: propTypesChildren,
// };

// Button.displayName = "MaterialTailwind.Button";

export default Button;
