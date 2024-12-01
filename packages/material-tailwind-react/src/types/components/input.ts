import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Input and Textarea components.
 */

// typescript types
export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = "black" | "white" | colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type icon = ReactNode;
export type resize = boolean;
export type labelProps = {
  [key: string]: any;
};
export type containerProps = {
  [key: string]: any;
};
export type shrink = boolean;
export type className = string;

// javascript prop-types
export const propTypesVariant: any = ["standard", "outlined", "static"];
export const propTypesSize: any = ["md", "lg"];
export const propTypesColor: any = ["black", "white", ...propTypesColors];
export const propTypesLabel: any = PropTypes.string;
export const propTypesError: any = PropTypes.bool;
export const propTypesSuccess: any = PropTypes.bool;
export const propTypesIcon: any = PropTypes.node;
export const propTypesResize: any = PropTypes.bool;
export const propTypesLabelProps: any = PropTypes.instanceOf(Object);
export const propTypesContainerProps: any = PropTypes.instanceOf(Object);
export const propTypesShrink: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
