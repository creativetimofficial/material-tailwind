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
  const mergedProps = mergeProps(() => theme().badge.defaultProps, props);

  const [badgeProps, rest] = splitProps(mergedProps, [
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
  const styles = createMemo(() => {
    const { valid, styles } = theme().badge;
    const { base, placements, colors } = styles;

    const badgeInitialClasses = objectsToString(base.badge.initial);
    const badgeWithBorderClasses = objectsToString(base.badge.withBorder);
    const badgeWithContentClasses = objectsToString(base.badge.withContent);
    const color = findMatch(valid.colors, badgeProps.color, "red");

    const placement = findMatch(valid.placements, badgeProps.placement, "top-end");
    const overlap = findMatch(valid.overlaps, badgeProps.overlap, "square");
    const badgeColorClasses = objectsToString(colors[color]);

    const badgePlacementClasses = objectsToString(placements[placement][overlap]);

    const badgeClasses = twMerge(
      classnames(badgeInitialClasses, badgePlacementClasses, badgeColorClasses, {
        [badgeWithBorderClasses]: badgeProps.withBorder,
        [badgeWithContentClasses]: !!badgeProps.content,
      }),
      badgeProps.class,
    );

    const badgeContainerClasses = twMerge(
      classnames(objectsToString(base.container), badgeProps.containerProps?.class),
    );
    return { badgeClasses, badgeContainerClasses };
  });
  // 4. return
  return (
    <div
      {...badgeProps.containerProps}
      ref={badgeProps.containerRef}
      class={styles().badgeContainerClasses}
    >
      {badgeProps.children}

      <Show when={!badgeProps.invisible}>
        <span {...rest} class={styles().badgeClasses}>
          {badgeProps.content}
        </span>
      </Show>
    </div>
  );
};

export default Badge;
