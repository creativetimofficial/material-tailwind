import { createMemo, mergeProps, splitProps } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";

// utils
import classnames from "classnames";
import Ripple from "material-ripple-effects";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { color, fullWidth, ripple, size, variant } from "../../types/components/button";
import { useButtonGroupContext } from "../ButtonGroup";
import { create } from "domain";
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
export type ButtonComponent = ParentComponent<
  ButtonProps & JSX.ButtonHTMLAttributes<HTMLButtonElement>
>;
export const Button: ButtonComponent = (props) => {
  // 1. init
  const theme = useTheme();
  const groupContext = useButtonGroupContext();
  // 2. set default props
  const mergedProps = mergeProps(
    () => theme().button.defaultProps,
    () => groupContext(),
    props,
  );

  const [buttonProps, rest] = splitProps(mergedProps, [
    "variant",
    "size",
    "color",
    "fullWidth",
    "ripple",
    "class",
    "onMouseDown",
  ]);

  // 3. set ripple effect instance
  const rippleEffect = createMemo(() => buttonProps.ripple !== undefined && new Ripple());

  // 4. set styles
  const styles = createMemo(() => {
    const button = theme().button;
    const { valid, styles } = button;
    const { base, variants, sizes } = styles;
    const buttonBase = objectsToString(base.initial);

    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, buttonProps.variant, "filled")][
        findMatch(valid.colors, buttonProps.color, "blue")
      ],
    );

    const buttonSize = objectsToString(sizes[findMatch(valid.sizes, buttonProps.size, "md")]);

    const root = twMerge(
      classnames(buttonBase, buttonSize, buttonVariant, {
        [objectsToString(base.fullWidth)]: buttonProps.fullWidth,
      }),
      buttonProps.class,
    );

    return root;
  });
  // 5. return
  return (
    <button
      {...rest}
      class={styles()}
      type={props.type || "button"}
      onMouseDown={(e) => {
        const onMouseDown = buttonProps.onMouseDown;

        if (buttonProps.ripple) {
          rippleEffect().create(
            e,
            buttonProps.variant === "filled" || buttonProps.variant === "gradient"
              ? "light"
              : "dark",
          );
        }

        return typeof onMouseDown === "function" && onMouseDown(e);
      }}
      onMouseUp={(e) => {
        const onMouseUp = props.onMouseUp;
        e.currentTarget.blur();
        return typeof onMouseUp === "function" && onMouseUp(e);
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
