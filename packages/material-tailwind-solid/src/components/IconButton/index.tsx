// utils
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { JSX, ParentComponent } from "solid-js";
import { createMemo, mergeProps } from "solid-js";
import type { color, ripple, size, variant } from "../../types/components/button";

export interface IconButtonProps {
  variant?: variant;
  size?: size;
  color?: color;
  ripple?: ripple;
  fullWidth?: boolean;
}

export const IconButton: ParentComponent<
  JSX.ButtonHTMLAttributes<HTMLButtonElement> & IconButtonProps
> = (props) => {
  // 1. init
  const theme = useTheme();

  const mergedProps = mergeProps(() => theme().iconButton.defaultProps, props);
  const rippleEffect = new Ripple();

  const cProps = createMemo(() => {
    const { valid, styles } = theme().iconButton;
    const { base, variants, sizes } = styles;
    // eslint-disable-next-line solid/reactivity
    const { variant, size, color, ripple, fullWidth, ...rest } = mergedProps;

    // 4. set styles
    const buttonBase = objectsToString(base);
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "blue")
      ],
    );

    const buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(classnames(buttonBase, buttonSize, buttonVariant), mergedProps.class);
    return { classes, rippleEffect, rest, ripple, fullWidth };
  });
  // 5. return
  return (
    <button
      {...cProps().rest}
      class={cProps().classes}
      type={cProps().rest.type || "button"}
      onMouseDown={(e) => {
        const onMouseDown = cProps().rest?.onMouseDown;

        if (mergedProps.ripple) {
          rippleEffect.create(
            e,
            (mergedProps.variant === "filled" || mergedProps.variant === "gradient") &&
              mergedProps.color !== "white"
              ? "light"
              : "dark",
          );
        }

        return typeof onMouseDown === "function" && onMouseDown(e);
      }}
    >
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        {mergedProps.children}
      </span>
    </button>
  );
};

export default IconButton;
