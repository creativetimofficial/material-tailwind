import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Checkbox, Radio and Switch components.
 */

// typescript types
export type color = typeof propTypesColor[number];
export type label = ReactNode;
export type icon = ReactNode;
export type ripple = boolean;
export type className = string;
export type disabled = boolean;
export type objectType = {
  [key: string]: any;
};
// javascript prop-types
export const propTypesColor = propTypesColors;
export const propTypesLabel = PropTypes.node;
export const propTypesIcon = PropTypes.node;
export const propTypesRipple = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesDisabled = PropTypes.bool;
export const propTypesObject = PropTypes.instanceOf(Object);
