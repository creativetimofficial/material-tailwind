// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Accessor, JSX, ParentComponent } from "solid-js";
import { createContext, createMemo, mergeProps, splitProps, useContext } from "solid-js";
import type { color, fullWidth, ripple, size, variant } from "../../types/components/button";

export interface ButtonGroupProps {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  ripple?: ripple;
  class?: string;
}

/**
 * Context
 */
export const ButtonGroupContext = createContext<Accessor<ButtonGroupProps | undefined>>(
  () => undefined,
);
export const useButtonGroupContext = () => useContext(ButtonGroupContext);

/**
 * ButtonGroupComponent
 */
export const ButtonGroup: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & ButtonGroupProps> = (
  props,
) => {
  // ({ variant, size, color, fullWidth, ripple, class, children, ...rest }, ref) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().buttonGroup.defaultProps, props);
  const [buttonGroupProps, rest] = splitProps(
    mergedProps,

    ["variant", "size", "color", "fullWidth", "ripple"],
  );

  // 4. set styles
  const classes = createMemo(() => {
    return twMerge(
      classnames(objectsToString(theme().buttonGroup.styles.base.initial), {
        [objectsToString(theme().buttonGroup.styles.base.fullWidth)]: mergedProps.fullWidth,
        "divide-x": mergedProps.variant !== "outlined",
        [objectsToString(
          theme().buttonGroup.styles.dividerColor[
            findMatch(theme().buttonGroup.valid.colors, mergedProps.color, "blue")
          ],
        )]: mergedProps.variant !== "outlined",
      }),
      mergedProps.class,
    );
  });

  // 5. return
  return (
    <div
      {...rest}
      class={twMerge(
        classnames(
          classes(),
          "[&>*:not(:last-child)]:rounded-r-none",
          "[&>*:not(:last-child)]:border-r-0",
          "[&>*:not(:first-child)]:rounded-l-none",
        ),
      )}
    >
      <ButtonGroupContext.Provider value={() => buttonGroupProps}>
        {props.children}
      </ButtonGroupContext.Provider>
    </div>
  );
};

export default ButtonGroup;
