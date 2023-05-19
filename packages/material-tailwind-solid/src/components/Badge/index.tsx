import type { JSX, ParentComponent } from "solid-js";
import { Show, createMemo, mergeProps, splitProps } from "solid-js";
// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  color,
  containerProps,
  containerRef,
  content,
  invisible,
  overlap,
  placement,
  withBorder,
} from "../../types/components/badge";

export interface BadgeProps {
  color?: color;
  invisible?: invisible;
  withBorder?: withBorder;
  overlap?: overlap;
  content?: content;
  placement?: placement;
  containerProps?: containerProps;
  containerRef?: containerRef;
}

export const Badge: ParentComponent<BadgeProps & JSX.HTMLAttributes<HTMLSpanElement>> = (props) => {
  // 1. init
  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(
    () => theme().badge.defaultProps,
    () => badgeProps,
  );

  const [badgeProps, rest] = splitProps(props, [
    "color",
    "invisible",
    "withBorder",
    "overlap",
    "placement",
    "content",
    "containerProps",
    "containerRef",
    "children",
    "class",
  ]);

  // 3. set styles
  const badgeClasses = createMemo(() => {
    const base = theme().badge.styles.base;
    const badgeInitialClasses = objectsToString(base.badge.initial);
    const badgeWithBorderClasses = objectsToString(base.badge.withBorder);
    const badgeWithContentClasses = objectsToString(base.badge.withContent);
    const color = findMatch(theme().badge.valid.colors, mergedProps.color, "red");

    const placement = findMatch(theme().badge.valid.placements, mergedProps.placement, "top-end");
    const overlap = findMatch(theme().badge.valid.overlaps, mergedProps.overlap, "square");
    const badgeColorClasses = objectsToString(theme().badge.styles.colors[color]);

    const badgePlacementClasses = objectsToString(
      theme().badge.styles.placements[placement][overlap],
    );

    return twMerge(
      classnames(badgeInitialClasses, badgePlacementClasses, badgeColorClasses, {
        [badgeWithBorderClasses]: badgeProps.withBorder,
        [badgeWithContentClasses]: !!badgeProps.content,
      }),
      mergedProps.class,
    );
  });

  const badgeContainerClasses = createMemo(() =>
    twMerge(
      classnames(
        objectsToString(theme().badge.styles.base.container),
        mergedProps.containerProps?.class,
      ),
    ),
  );

  // 4. return
  return (
    <div
      {...mergedProps.containerProps}
      ref={mergedProps.containerRef}
      class={badgeContainerClasses()}
    >
      {badgeProps.children}

      <Show when={!badgeProps.invisible}>
        <span {...rest} class={badgeClasses()}>
          {badgeProps.content}
        </span>
      </Show>
    </div>
  );
};

export default Badge;
