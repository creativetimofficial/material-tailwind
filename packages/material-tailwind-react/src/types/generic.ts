import PropTypes from "prop-types";
import type { AnimatePresenceProps } from "framer-motion";

// typescript types
export type colors =
  | "blue-grey"
  | "grey"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";

export type animation = {
  mount?: Object;
  unmount?: Object;
};

export type dismiss = {
  enabled?: boolean;
  escapeKey?: boolean;
  referencePointerDown?: boolean;
  outsidePointerDown?: boolean;
  ancestorScroll?: boolean;
  bubbles?: boolean;
};

export type offset =
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
export const propTypesColors: string[] = [
  "blue-grey",
  "grey",
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
];

export const propTypesAnimation = PropTypes.shape({
  mount: PropTypes.instanceOf(Object),
  unmount: PropTypes.instanceOf(Object),
});
