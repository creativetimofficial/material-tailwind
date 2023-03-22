// types
import {
  color,
  invisible,
  withBorder,
  overlap,
  content,
  placement,
  className,
  containerProps,
  propTypesPlacement,
} from "../../../types/components/badge";
import { propTypesColor, propTypesOverlap } from "../../../types/components/badge";
import badgeColors from "./badgeColors";

export interface BadgeStyleTypes {
  defaultProps?: {
    color?: color;
    invisible?: invisible;
    placement?: placement;
    withBorder?: withBorder;
    overlap?: overlap;
    content?: content;
    className?: className;
    containerProps?: containerProps;
  };
  valid?: {
    colors?: string[];
    overlaps?: string[];
    placements?: string[];
  };
  styles?: {
    base?: {
      container?: object;
      badge?: {
        initial?: object;
        withBorder?: object;
        withContent?: object;
      };
    };
    placements?: {
      "top-start"?: {
        square?: object;
        circular?: object;
      };
      "top-end"?: {
        square?: object;
        circular?: object;
      };
      "bottom-start"?: {
        square?: object;
        circular?: object;
      };
      "bottom-end"?: {
        square?: object;
        circular?: object;
      };
    };
    colors?: typeof badgeColors;
  };
}

export const badge: BadgeStyleTypes = {
  defaultProps: {
    color: "red",
    invisible: false,
    withBorder: false,
    overlap: "square",
    content: undefined,
    placement: "top-end",
    className: undefined,
    containerProps: undefined,
  },
  valid: {
    colors: propTypesColor,
    overlaps: propTypesOverlap,
    placements: propTypesPlacement,
  },
  styles: {
    base: {
      container: {
        position: "relative",
        display: "inline-flex",
      },
      badge: {
        initial: {
          position: "absolute",
          minWidth: "min-w-[12px]",
          minHeight: "min-h-[12px]",
          borderRadius: "rounded-full",
          paddingY: "py-1",
          paddingX: "px-1",
          fontSize: "text-xs",
          fontWeight: "font-medium",
          content: "content-['']",
          lineHeight: "leading-none",
          display: "grid",
          placeItems: "place-items-center",
        },
        withBorder: {
          borderWidth: "border-2",
          borderColor: "border-white",
        },
        withContent: {
          minWidth: "min-w-[24px]",
          minHeight: "min-h-[24px]",
        },
      },
    },
    placements: {
      "top-start": {
        square: {
          top: "top-[4%]",
          left: "left-[2%]",
          translateX: "-translate-x-2/4",
          translateY: "-translate-y-2/4",
        },
        circular: {
          top: "top-[14%]",
          left: "left-[14%]",
          translateX: "-translate-x-2/4",
          translateY: "-translate-y-2/4",
        },
      },
      "top-end": {
        square: {
          top: "top-[4%]",
          right: "right-[2%]",
          translateX: "translate-x-2/4",
          translateY: "-translate-y-2/4",
        },
        circular: {
          top: "top-[14%]",
          right: "right-[14%]",
          translateX: "translate-x-2/4",
          translateY: "-translate-y-2/4",
        },
      },
      "bottom-start": {
        square: {
          bottom: "bottom-[4%]",
          left: "left-[2%]",
          translateX: "-translate-x-2/4",
          translateY: "translate-y-2/4",
        },
        circular: {
          bottom: "bottom-[14%]",
          left: "left-[14%]",
          translateX: "-translate-x-2/4",
          translateY: "translate-y-2/4",
        },
      },
      "bottom-end": {
        square: {
          bottom: "bottom-[4%]",
          right: "right-[2%]",
          translateX: "translate-x-2/4",
          translateY: "translate-y-2/4",
        },
        circular: {
          bottom: "bottom-[14%]",
          right: "right-[14%]",
          translateX: "translate-x-2/4",
          translateY: "translate-y-2/4",
        },
      },
    },
    colors: badgeColors,
  },
};

export default badge;
