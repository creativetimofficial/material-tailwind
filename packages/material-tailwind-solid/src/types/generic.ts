import PropTypes from "prop-types";
import type { AnimatePresenceProps } from "framer-motion";
import type { VariantDefinition } from "@motionone/solid/dist/types/types";

export const color = [
  "blue-gray",
  "gray",
  "brown",
  "deep-orange",
  "orange",
  "amber",
  "yellow",
  "lime",
  "light-green",
  "green",
  "teal",
  "cyan",
  "light-blue",
  "blue",
  "indigo",
  "deep-purple",
  "purple",
  "pink",
  "red",
] as const;
// typescript types
export type colors = (typeof color)[number];

export type animation = {
  initial?: false | VariantDefinition | undefined;
  mount?: VariantDefinition | undefined;
  unmount?: VariantDefinition | undefined;
};

export type dismissType = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePointerDown?: boolean;
  outsidePointerDown?: boolean;
  ancestorScroll?: boolean;
  bubbles?: boolean;
};

export type offsetType =
  | number
  | {
      mainAxis?: number;
      crossAxis?: number;
      alignmentAxis?: number | null;
    };

export interface NewAnimatePresenceProps extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

// javascript prop-types
export const propTypesColors = [
  "blue-gray",
  "gray",
  "brown",
  "deep-orange",
  "orange",
  "amber",
  "yellow",
  "lime",
  "light-green",
  "green",
  "teal",
  "cyan",
  "light-blue",
  "blue",
  "indigo",
  "deep-purple",
  "purple",
  "pink",
  "red",
] as const;

export const propTypesAnimation = PropTypes.shape({
  mount: PropTypes.instanceOf(Object),
  unmount: PropTypes.instanceOf(Object),
});

export const propTypesDismissType = PropTypes.shape({
  enabled: PropTypes.bool,
  escapeKey: PropTypes.bool,
  referencePointerDown: PropTypes.bool,
  outsidePointerDown: PropTypes.bool,
  ancestorScroll: PropTypes.bool,
  bubbles: PropTypes.bool,
});

export const propTypesOffsetType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    mainAxis: PropTypes.number,
    crossAxis: PropTypes.number,
    alignmentAxis: PropTypes.number,
  }),
]);

export const propTypesPlacements: string[] = [
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-start",
  "bottom",
  "bottom-end",
  "left-start",
  "left",
  "left-end",
];
