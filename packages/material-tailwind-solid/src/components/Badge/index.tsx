import { Show, createEffect, createMemo, mergeProps, splitProps } from "solid-js";
import type { JSX, ParentComponent } from "solid-js";
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
  // (
  //   {
  //     color,
  //     invisible,
  //     withBorder,
  //     overlap,
  //     placement,
  //     className,
  //     content,
  //     children,
  //     containerProps,
  //     containerRef,
  //     ...rest
  //   },
  //   ref,
  // ) => {
  // 1. init
  const theme = useTheme();
  // const { valid, defaultProps, styles } = theme().badge;
  // const { base, placements, colors } = styles;

  // 2. set default props
  // color = color ?? defaultProps.color;
  // invisible = invisible ?? defaultProps.invisible;
  // withBorder = withBorder ?? defaultProps.withBorder;
  // overlap = overlap ?? defaultProps.overlap;
  // placement = placement ?? defaultProps.placement;
  // className = classnames(className, defaultProps.className) ?? defaultProps.className;

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
  const mergedProps = mergeProps(
    () => theme().badge.defaultProps,
    () => badgeProps,
  );

  // const containerProps =
  //   mergeProps(()=>props.containerProps, ()=>defaultProps.containerProps || {}) ?? defaultProps.containerProps;

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
    //containerProps contains ref
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

// Badge.propTypes = {
//   color: propTypesColor,
//   invisible: propTypesInvisible,
//   withBorder: propTypesWithBorder,
//   overlap: propTypesOverlap,
//   className: propTypesClassName,
//   content: propTypesContent,
//   children: propTypesChildren,
//   placement: propTypesPlacement,
//   containerProps: propTypesContainerProps,
//   containerRef: propTypesContainerRef,
// };

// Badge.displayName = "MaterialTailwind.Badge";

export default Badge;
