import React from "react";

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
} from "../../../types/components/rating";
import { propTypesColor } from "../../../types/components/rating";
import ratingColors from "./ratingColors";

export interface RatingStyleTypes {
  defaultProps?: {
    count?: count;
    value?: value;
    ratedIcon?: ratedIcon;
    unratedIcon?: unratedIcon;
    ratedColor?: color;
    unratedColor?: color;
    className?: className;
    onChange?: onChange;
    readonly?: readonlyType;
  };
  valid?: {
    colors?: string[];
  };
  styles?: {
    base?: {
      rating?: object;
      icon?: object;
    };
    colors?: typeof ratingColors;
  };
}

export const rating: RatingStyleTypes = {
  defaultProps: {
    count: 5,
    value: 0,
    ratedIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ),
    unratedIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
    ratedColor: "yellow",
    unratedColor: "blue-gray",
    className: undefined,
    onChange: undefined,
    readonly: false,
  },
  valid: {
    colors: propTypesColor,
  },
  styles: {
    base: {
      rating: {
        display: "inline-flex",
        alignItems: "items-center",
      },
      icon: {
        width: "w-5",
        height: "h-5",
        color: "text-inherit",
        cursor: "cursor-pointer",
      },
    },
    colors: ratingColors,
  },
};

export default rating;
