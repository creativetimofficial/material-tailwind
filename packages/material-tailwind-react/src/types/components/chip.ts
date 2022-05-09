import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors, animation } from "../generic";
import { propTypesColors, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Chip component.
 */

// typescript types
export type variant = "filled" | "gradient";
export type color = colors;
export type icon = ReactNode;
export type show = boolean;
export type dismissible = {
  action?: ReactNode;
  onClose: () => void;
};
export type animate = animation;
export type className = string;
export type value = string | number;

// javascript prop-types
export const propTypesVariant: any = ["filled", "gradient"];
export const propTypesColor: any = propTypesColors;
export const propTypesIcon: any = PropTypes.node;
export const propTypesShow: any = PropTypes.bool;
export const propTypesDismissible: any = PropTypes.shape({
  action: PropTypes.node,
  onClose: PropTypes.func.isRequired,
});
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesClassName: any = PropTypes.string;
export const propTypesValue: any = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]).isRequired;
