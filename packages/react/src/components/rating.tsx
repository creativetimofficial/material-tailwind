"use client";

import * as React from "react";

// @utils
import { twMerge } from "tailwind-merge";

// @hooks
import { useTheme } from "@context";

// @theme
import { ratingTheme } from "@theme";

// @types
import type { BaseProps, SharedProps } from "@types";

export type RatingProps<T extends React.ElementType = "div"> = BaseProps<
  T,
  {
    color?: SharedProps["color"];
    ratedIcon?: React.ReactNode;
    unratedIcon?: React.ReactNode;
    count?: number;
    value?: number;
    readonly?: boolean;
    onValueChange?: (value: number) => void;
  }
>;

/**
 * @remarks
 * [Documentation](http://www.material-tailwind.com/docs/react/rating) •
 * [Props Definition](https://www.material-tailwind.com/docs/react/rating#rating-props) •
 * [Theming Guide](https://www.material-tailwind.com/docs/react/rating#rating-theme)
 */
function RatingRoot<T extends React.ElementType = "div">(
  {
    as,
    color,
    ratedIcon,
    unratedIcon,
    count,
    value,
    onValueChange,
    className,
    readonly,
    ...props
  }: RatingProps,
  ref: React.Ref<Element>,
) {
  const Component = as ?? ("div" as any);
  const contextTheme = useTheme();
  const theme = contextTheme?.rating ?? ratingTheme;
  const defaultProps = theme?.defaultProps;

  ratedIcon ??= (defaultProps?.ratedIcon as RatingProps["ratedIcon"]) ?? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
  unratedIcon ??= (defaultProps?.unratedIcon as RatingProps["unratedIcon"]) ?? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
  color ??= (defaultProps?.color as RatingProps["color"]) ?? "primary";
  count ??= (defaultProps?.count as RatingProps["count"]) ?? 5;
  value ??= 0;
  readonly ??= (defaultProps?.readonly as RatingProps["readonly"]) ?? false;

  const [ratingValue, setRatingValue] = React.useState<string[]>(() => [
    ...Array(value).fill("rated"),
    ...Array((count as any) - (value as any)).fill("un_rated"),
  ]);

  const [ratingOnHover, setRatingOnHover] = React.useState<string[]>(() => [
    ...Array(count).fill("un_rated"),
  ]);

  const [isHover, setIsHover] = React.useState(false);

  const baseStyles = twMerge(theme.baseStyle, theme.color[color], className);

  const iconStyle = twMerge(theme.icon);

  const renderRating = (data: string[]) =>
    data.map((el: string, idx: number) => {
      const isRated = el === "rated";
      const elementToRender = isRated ? ratedIcon : unratedIcon;

      return React.isValidElement(elementToRender)
        ? React.cloneElement(elementToRender as React.ReactElement, {
            ...(elementToRender as any)?.props,
            key: idx,
            onClick: (event: MouseEvent) => {
              if (readonly) return;

              const nextRating = ratingValue.map((_, i) =>
                i <= idx ? "rated" : "un_rated",
              );

              setRatingValue(nextRating);

              onValueChange &&
                typeof onValueChange === "function" &&
                onValueChange(nextRating.filter((el) => el === "rated").length);

              (elementToRender?.props as any)?.onClick &&
                (elementToRender?.props as any)?.onClick(event);
            },
            onMouseEnter: (event: MouseEvent) => {
              if (readonly) return;

              const nextRating = ratingOnHover.map((_, i) =>
                i <= idx ? "rated" : "un_rated",
              );

              setIsHover(true);
              setRatingOnHover(nextRating);

              (elementToRender?.props as any)?.onMouseEnter &&
                (elementToRender?.props as any)?.onMouseEnter(event);
            },
            onMouseLeave: (event: MouseEvent) => {
              if (!readonly) {
                setIsHover(false);
              }

              (elementToRender?.props as any)?.onMouseLeave &&
                (elementToRender?.props as any)?.onMouseLeave(event);
            },
            "data-slot": "icon",
            className: twMerge(
              iconStyle,
              (elementToRender?.props as any)?.className,
            ),
          })
        : React.createElement(elementToRender as React.ElementType, {
            key: idx,
            onClick: () => {
              if (readonly) return;

              const nextRating = ratingValue.map((_, i) =>
                i <= idx ? "rated" : "un_rated",
              );

              setRatingValue(nextRating);

              onValueChange &&
                typeof onValueChange === "function" &&
                onValueChange(nextRating.filter((el) => el === "rated").length);
            },
            onMouseEnter: () => {
              if (readonly) return;

              const nextRating = ratingOnHover.map((_, i) =>
                i <= idx ? "rated" : "un_rated",
              );

              setIsHover(true);
              setRatingOnHover(nextRating);
            },
            onMouseLeave: () => {
              if (!readonly) {
                setIsHover(false);
              }
            },
            className: iconStyle,
          });
    });

  return (
    <Component {...props} ref={ref} className={baseStyles}>
      {isHover ? renderRating(ratingOnHover) : renderRating(ratingValue)}
    </Component>
  );
}

RatingRoot.displayName = "MaterialTailwind.Rating";

export const Rating = React.forwardRef(RatingRoot) as <
  T extends React.ElementType = "div",
>(
  props: RatingProps<T> & { ref?: React.Ref<Element> },
) => JSX.Element;

export default Rating;
