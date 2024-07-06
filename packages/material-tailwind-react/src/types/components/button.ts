import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Button and IconButton component.
 */

// typescript types
export type variant = "filled" | "outlined" | "gradient" | "text";
export type size = "sm" | "md" | "lg";
export type color = "white" | "black" | colors;
export type fullWidth = boolean;
export type ripple = boolean;
export type className = string;
export type children = ReactNode;
export type loading = boolean;

// javascript prop-types
export const propTypesVariant: any = ["filled", "outlined", "gradient", "text"];
export const propTypesSize: any = ["sm", "md", "lg"];
export const propTypesColor: any = ["white", "black", ...propTypesColors];
export const propTypesFullWidth: any = PropTypes.bool;
export const propTypesRipple: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesLoading: any = PropTypes.bool;
