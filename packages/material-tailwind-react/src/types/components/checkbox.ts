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
export type label = string;
export type icon = ReactNode;
export type ripple = boolean;
export type className = string;
export type containerProps = {
  [key: string]: any;
};
export type labelProps = {
  [key: string]: any;
};
export type circleProps = {
  [key: string]: any;
};

// javascript prop-types
export const propTypesColor: any = propTypesColors;
export const propTypesLabel: any = PropTypes.string;
export const propTypesIcon: any = PropTypes.node;
export const propTypesRipple: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesContainerProps: any = PropTypes.instanceOf(Object);
export const propTypesLabelProps: any = PropTypes.instanceOf(Object);
export const propTypesCircleProps: any = PropTypes.instanceOf(Object);
