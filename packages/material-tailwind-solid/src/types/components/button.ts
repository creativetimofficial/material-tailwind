// generic types
import PropTypes from "prop-types";
import { propTypesColors } from "../generic";
/**
 * This file contains the types and prop-types for Button and IconButton component.
 */

// typescript types
export type variant = (typeof propTypesVariant)[number];
export type size = "sm" | "md" | "lg";
export type color = "white" | (typeof propTypesColor)[number];
export type fullWidth = boolean;
export type ripple = boolean;

// javascript prop-types
export const propTypesVariant = ["filled", "outlined", "gradient", "text"] as const;
export const propTypesSize = ["sm", "md", "lg"] as const;
export const propTypesColor = ["white", ...propTypesColors] as const;
export const propTypesFullWidth = PropTypes.bool;
export const propTypesRipple = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
