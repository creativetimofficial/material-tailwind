import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Progress component.
 */

// typescript types
export type variant = "filled" | "gradient";
export type color = colors;
export type size = "sm" | "md" | "lg";
export type value = number;
export type label = string | boolean;
export type barProps = {
  [key: string]: any;
};
export type className = string;

// javascript prop-types
export const propTypesVariant: any = ["filled", "gradient"];
export const propTypesColor: any = propTypesColors;
export const propTypesSize: any = ["sm", "md", "lg"];
export const propTypesValue: any = PropTypes.number;
export const propTypesLabel: any = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);
export const propTypesBarProps: any = PropTypes.instanceOf(Object);
export const propTypesClassName: any = PropTypes.string;
