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
} from "../../types/components/rating";
import {
  propTypesCount,
  propTypesValue,
  propTypesRatedIcon,
  propTypesUnratedIcon,
  propTypesColor,
  propTypesClassName,
  propTypesOnChange,
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
      ...rest
    },
    ref,
  ) => {
    // 1. init
    const { rating } = useTheme();
    const { valid, defaultProps, styles } = rating;
    const { base, colors } = styles;
    const [ratingValue, setRatingValue] = React.useState(() => [
      ...Array(value).fill("rated"),
      ...Array(count - value).fill("un_rated"),
    ]);
    const [ratingOnHover, setRatingOnHover] = React.useState(() => [
      ...Array(count).fill("un_rated"),
    ]);
    const [isHover, setIsHover] = React.useState(false);

    // 2. set default props
    count = count ?? defaultProps.count;
    value = value ?? defaultProps.value;
    ratedIcon = ratedIcon ?? defaultProps.ratedIcon;
    ratedIcon = ratedIcon ?? defaultProps.ratedIcon;
    unratedIcon = unratedIcon ?? defaultProps.unratedIcon;
    ratedColor = ratedColor ?? defaultProps.ratedColor;
    unratedColor = unratedColor ?? defaultProps.unratedColor;
    className = className ?? defaultProps.className;
    onChange = onChange ?? defaultProps.onChange;

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
    const customRatedIcon = React.cloneElement(ratedIconInstance as React.ReactElement, {
      className: twMerge(
        classnames(ratingIconClasses, ratedColorClasses, ratedIconInstance?.props?.className),
      ),
    });
    const customUnratedIcon = React.cloneElement(unratedIconInstance as React.ReactElement, {
      className: twMerge(
        classnames(ratingIconClasses, unratedColorClasses, unratedIconInstance?.props?.className),
      ),
    });

    const renderRating = (data) =>
      data.map((el, index) => {
        return React.createElement(
          "span",
          {
            key: index,
            onClick: () => {
              const nextRating = ratingValue.map((el, i) => (i <= index ? "rated" : "un_rated"));

              setRatingValue(nextRating);
              onChange(nextRating.filter((el) => el === "rated").length);
            },
            onMouseEnter: () => {
              const nextRating = ratingOnHover.map((el, i) => (i <= index ? "rated" : "un_rated"));

              setIsHover(true);
              setRatingOnHover(nextRating);
            },
            onMouseLeave: () => setIsHover(false),
          },
          React.isValidElement(el === "rated" ? ratedIcon : unratedIcon)
            ? React.cloneElement(el === "rated" ? customRatedIcon : customUnratedIcon)
            : React.createElement((el === "rated" ? ratedIcon : unratedIcon) as React.ElementType, {
                className: twMerge(
                  classnames(ratingIconClasses, {
                    [ratedColorClasses]: el === "rated",
                    [unratedColorClasses]: el === "un_rated",
                  }),
                ),
              }),
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
};

Rating.displayName = "MaterialTailwind.Rating";

export default Rating;
