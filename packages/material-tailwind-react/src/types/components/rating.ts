import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
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
export type color = "white" | colors;
export type className = string;
export type onChange = (value: number) => void;
export type readonly = boolean;

// javascript prop-types
export const propTypesCount: any = PropTypes.number;
export const propTypesValue: any = PropTypes.number;
export const propTypesRatedIcon: any = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.instanceOf(Object),
]);
export const propTypesUnratedIcon: any = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.instanceOf(Object),
]);
export const propTypesColor: any = ["white", ...propTypesColors];
export const propTypesOnChange: any = PropTypes.func;
export const propTypesClassName: any = PropTypes.string;
export const propTypesReadonly: any = PropTypes.bool;
