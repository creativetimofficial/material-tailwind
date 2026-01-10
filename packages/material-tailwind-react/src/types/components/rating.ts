import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Rating component.
 */

// typescript types
type iconType = ReactNode | React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;

export type count = number;
export type value = number;
export type ratedIcon = iconType;
export type unratedIcon = iconType;
export type color = typeof propTypesColor[number];
export type className = string;
export type onChange = (value: number) => void;
export type readonly = boolean;

// javascript prop-types
export const propTypesCount = PropTypes.number;
export const propTypesValue = PropTypes.number;
export const propTypesRatedIcon = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.instanceOf(Object),
]);
export const propTypesUnratedIcon = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.instanceOf(Object),
]);
export const propTypesColor = ["white", ...propTypesColors] as const;
export const propTypesOnChange = PropTypes.func;
export const propTypesClassName = PropTypes.string;
export const propTypesReadonly = PropTypes.bool;
