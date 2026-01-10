import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Button and IconButton component.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type size = typeof propTypesSize[number];
export type color = typeof propTypesColor[number];
export type fullWidth = boolean;
export type ripple = boolean;
export type className = string;
export type children = ReactNode;
export type loading = boolean;

// javascript prop-types
export const propTypesVariant = ["filled", "outlined", "gradient", "text"] as const;
export const propTypesSize = ["sm", "md", "lg"] as const;
export const propTypesColor = ["white", "black", ...propTypesColors] as const;
export const propTypesFullWidth = PropTypes.bool;
export const propTypesRipple = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesLoading = PropTypes.bool;
