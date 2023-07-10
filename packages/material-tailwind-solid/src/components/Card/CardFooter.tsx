import { mergeProps, createMemo } from "solid-js";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { divider } from "../../types/components/card";
import type { ParentComponent, JSX } from "solid-js";

export interface CardFooterProps {
  divider?: divider;
  children?: JSX.Element;
}

export const CardFooter: ParentComponent<JSX.HTMLAttributes<HTMLDivElement> & CardFooterProps> = (
  props,
) => {
  // 1. init
  const theme = useTheme();

  const mergedProps = mergeProps(() => theme().cardFooter.defaultProps, props);

  // 3. set styles
  const cardFooterClasses = createMemo(() =>
    twMerge(
      classnames(objectsToString(theme().cardFooter.styles.base.initial), {
        [objectsToString(theme().cardFooter.styles.base.divider)]: mergedProps.divider,
      }),
      mergedProps.class,
    ),
  );

  // 4. return
  return (
    <div {...mergedProps} class={cardFooterClasses()}>
      {props.children}
    </div>
  );
};

export default CardFooter;
