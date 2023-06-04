// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type { Component, JSX } from "solid-js";
import { For, Show, createMemo, createSignal, mergeProps, splitProps } from "solid-js";
import type {
  color,
  count,
  onChange,
  ratedIcon,
  readonly as readonlyType,
  unratedIcon,
  value,
} from "../../types/components/rating";

export interface RatingProps extends Omit<React.ComponentProps<"div">, "onChange"> {
  count?: count;
  value?: value;
  ratedIcon?: ratedIcon;
  unratedIcon?: unratedIcon;
  ratedColor?: color;
  unratedColor?: color;
  class?: string;
  onChange?: onChange;
  readonly?: readonlyType;
}

export const Rating: Component<JSX.HTMLAttributes<HTMLDivElement> & RatingProps> = (props) => {
  // 1. init
  const [isHover, setIsHover] = createSignal(false);
  const [value, setValue] = createSignal(0);
  const [hoverValue, setHoverValue] = createSignal(0);

  const theme = useTheme();

  // 2. set default props
  const mergedProps = mergeProps(() => theme().rating.defaultProps, props);
  const [ratingProps, rest] = splitProps(mergedProps, [
    "count",
    "value",
    "ratedIcon",
    "unratedIcon",
    "ratedColor",
    "unratedColor",
    "class",
    "onChange",
    "readonly",
  ]);

  // 3. set styles
  const cProps = createMemo(() => {
    const { valid, styles } = theme().rating;
    const { base, colors } = styles;
    const ratedColorClasses = objectsToString(
      colors[findMatch(valid.colors, ratingProps.ratedColor, "yellow")],
    );
    const unratedColorClasses = objectsToString(
      colors[findMatch(valid.colors, ratingProps.unratedColor, "blue-gray")],
    );
    const ratingClasses = twMerge(classnames(objectsToString(base.rating), ratingProps.class));
    const ratingIconClasses = objectsToString(base.icon);
    const array = Array.from({ length: ratingProps.count });
    return {
      ratedColorClasses,
      unratedColorClasses,
      ratingClasses,
      ratingIconClasses,
      array,
    };
  });

  // 5. return
  return (
    <div {...rest} class={cProps().ratingClasses}>
      <For each={cProps().array}>
        {(_, index) => {
          const isActive = createMemo(
            () => (!isHover() && value() > index()) || (isHover() && hoverValue() > index()),
          );

          return (
            <span
              class={twMerge(
                classnames(cProps().ratingIconClasses, {
                  [cProps().unratedColorClasses]: !isActive(),
                  [cProps().ratedColorClasses]: isActive(),
                }),
              )}
              onClick={() => {
                if (ratingProps.readonly) return;
                setValue(index() + 1);
                ratingProps.onChange &&
                  typeof ratingProps.onChange === "function" &&
                  ratingProps.onChange(value());
              }}
              onMouseEnter={() => {
                if (ratingProps.readonly) return;
                setIsHover(true);
                setHoverValue(index() + 1);
              }}
              onMouseLeave={() => !ratingProps.readonly && setIsHover(false)}
            >
              <Show when={isActive()} fallback={<>{ratingProps.unratedIcon} </>}>
                {ratingProps.ratedIcon}
              </Show>
            </span>
          );
        }}
      </For>
    </div>
  );
};

export default Rating;
