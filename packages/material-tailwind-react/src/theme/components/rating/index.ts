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
import { StarIcon as RatedIcon } from "@heroicons/react/24/solid";
import { StarIcon as UnratedIcon } from "@heroicons/react/24/outline";

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
    ratedIcon: RatedIcon,
    unratedIcon: UnratedIcon,
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
