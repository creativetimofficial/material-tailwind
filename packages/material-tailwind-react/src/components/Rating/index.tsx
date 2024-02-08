import React from "react";
import PropTypes from "prop-types";

// utils
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import findMatch from "../../utils/findMatch";
import objectsToString from "../../utils/objectsToString";

// context
import { useTheme } from "../../context/theme";

// types
import type {
  count,
  value,
  ratedIcon,
  unratedIcon,
  color,
  className,
  onChange,
  readonly as readonlyType,
} from "../../types/components/rating";
import {
  propTypesCount,
  propTypesValue,
  propTypesRatedIcon,
  propTypesUnratedIcon,
  propTypesColor,
  propTypesClassName,
  propTypesOnChange,
  propTypesReadonly,
} from "../../types/components/rating";

export interface RatingProps extends Omit<React.ComponentProps<"div">, "onChange"> {
  count?: count;
  value?: value;
  ratedIcon?: ratedIcon;
  unratedIcon?: unratedIcon;
  ratedColor?: color;
  unratedColor?: color;
  className?: className;
  onChange?: onChange;
  readonly?: readonlyType;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      count,
      value,
      ratedIcon,
      unratedIcon,
      ratedColor,
      unratedColor,
      className,
      onChange,
      readonly,
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { rating } = useTheme();
    const { valid, defaultProps, styles } = rating;
    const { base, colors } = styles;

    // 2. set default props
    count = count ?? defaultProps.count;
    value = value ?? defaultProps.value;
    ratedIcon = ratedIcon ?? defaultProps.ratedIcon;
    ratedIcon = ratedIcon ?? defaultProps.ratedIcon;
    unratedIcon = unratedIcon ?? defaultProps.unratedIcon;
    ratedColor = ratedColor ?? defaultProps.ratedColor;
    unratedColor = unratedColor ?? defaultProps.unratedColor;
    onChange = onChange ?? defaultProps.onChange;
    readonly = readonly ?? defaultProps.readonly;
    className = twMerge(defaultProps.className || "", className);

    const [ratingValue, setRatingValue] = React.useState(() => [
      ...Array(value).fill("rated"),
      ...Array(count - value).fill("un_rated"),
    ]);
    const [ratingOnHover, setRatingOnHover] = React.useState(() => [
      ...Array(count).fill("un_rated"),
    ]);
    const [isHover, setIsHover] = React.useState(false);

    // 3. set styles
    const ratedColorClasses = objectsToString(
      colors[findMatch(valid.colors, ratedColor, "yellow")],
    );
    const unratedColorClasses = objectsToString(
      colors[findMatch(valid.colors, unratedColor, "blue-gray")],
    );
    const ratingClasses = twMerge(classnames(objectsToString(base.rating), className));
    const ratingIconClasses = objectsToString(base.icon);

    // 4. setting up the rating icons
    const ratedIconInstance = ratedIcon as React.ReactElement;
    const unratedIconInstance = unratedIcon as React.ReactElement;

    const customRatedIcon =
      React.isValidElement(ratedIcon) &&
      React.cloneElement(ratedIconInstance, {
        className: twMerge(
          classnames(ratingIconClasses, ratedColorClasses, ratedIconInstance?.props?.className),
        ),
      });

    const customUnratedIcon =
      React.isValidElement(ratedIcon) &&
      React.cloneElement(unratedIconInstance, {
        className: twMerge(
          classnames(ratingIconClasses, unratedColorClasses, unratedIconInstance?.props?.className),
        ),
      });

    const ratedIconEl =
      !React.isValidElement(ratedIcon) &&
      React.createElement(ratedIcon as React.ElementType, {
        className: twMerge(classnames(ratingIconClasses, ratedColorClasses)),
      });

    const unratedIconEl =
      !React.isValidElement(ratedIcon) &&
      React.createElement(unratedIcon as React.ElementType, {
        className: twMerge(classnames(ratingIconClasses, unratedColorClasses)),
      });

    const renderRating = (data) =>
      data.map((el, index) => {
        return React.createElement(
          "span",
          {
            key: index,
            onClick: () => {
              if (readonly) return;

              const nextRating = ratingValue.map((el, i) => (i <= index ? "rated" : "un_rated"));

              setRatingValue(nextRating);
              onChange &&
                typeof onChange === "function" &&
                onChange(nextRating.filter((el) => el === "rated").length);
            },
            onMouseEnter: () => {
              if (readonly) return;

              const nextRating = ratingOnHover.map((el, i) => (i <= index ? "rated" : "un_rated"));

              setIsHover(true);
              setRatingOnHover(nextRating);
            },
            onMouseLeave: () => !readonly && setIsHover(false),
          },
          React.isValidElement(el === "rated" ? ratedIcon : unratedIcon)
            ? el === "rated"
              ? customRatedIcon
              : customUnratedIcon
            : el === "rated"
            ? ratedIconEl
            : unratedIconEl,
        );
      });

    // 5. return
    return (
      <div {...rest} ref={ref} className={ratingClasses}>
        {isHover ? renderRating(ratingOnHover) : renderRating(ratingValue)}
      </div>
    );
  },
);

Rating.propTypes = {
  count: propTypesCount,
  value: propTypesValue,
  ratedIcon: propTypesRatedIcon,
  unratedIcon: propTypesUnratedIcon,
  ratedColor: PropTypes.oneOf(propTypesColor),
  unratedColor: PropTypes.oneOf(propTypesColor),
  className: propTypesClassName,
  onChange: propTypesOnChange,
  readonly: propTypesReadonly,
};

Rating.displayName = "MaterialTailwind.Rating";

export default Rating;
