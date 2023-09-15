import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Checkbox, Radio and Switch components.
 */

// typescript types
export type color = colors;
export type label = ReactNode;
export type icon = ReactNode;
export type ripple = boolean;
export type className = string;
export type disabled = boolean;
export type objectType = {
  [key: string]: any;
};
// javascript prop-types
export const propTypesColor: any = propTypesColors;
export const propTypesLabel: any = PropTypes.node;
export const propTypesIcon: any = PropTypes.node;
export const propTypesRipple: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesDisabled: any = PropTypes.bool;
export const propTypesObject: any = PropTypes.instanceOf(Object);
