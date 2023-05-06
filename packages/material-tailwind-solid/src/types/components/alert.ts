import type { JSX } from "solid-js";
// generic types
import type { colors, animation } from "../generic";
// import { propTypesColors, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Alert component.
 */
export const variants = ["filled", "gradient"] as const;

// typescript types
export type variant = (typeof variants)[number];
export type color = colors;
export type icon = JSX.Element;
export type show = boolean;
export type dismissible = {
  action?: JSX.Element;
  onClose: () => void;
};
export type animate = animation;

// javascript prop-types
// export const propTypesVariant: any = ["filled", "gradient"];
// export const propTypesColor: any = propTypesColors;
// export const propTypesIcon: any = PropTypes.node;
// export const propTypesShow: any = PropTypes.bool;
// export const propTypesDismissible: any = PropTypes.shape({
//   action: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// });
// export const propTypesAnimate: any = propTypesAnimation;
// export const propTypesClassName: any = PropTypes.string;
// export const propTypesChildren: any = PropTypes.node.isRequired;
