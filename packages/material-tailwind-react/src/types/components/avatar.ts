import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Avatar component.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type size = typeof propTypesSize[number];
export type className = string;
export type withBorder = boolean;
export type color = typeof propTypesColor[number];

// javascript prop-types
export const propTypesVariant = ["circular", "rounded", "square"] as const;
export const propTypesSize = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
export const propTypesClassName = PropTypes.string;
export const propTypesWithBorder = PropTypes.bool;
export const propTypesColor = ["white", ...propTypesColors] as const;
