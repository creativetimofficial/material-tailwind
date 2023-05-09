import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Avatar component.
 */

// typescript types
export type variant = "circular" | "rounded" | "square";
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type className = string;
export type withBorder = boolean;
export type color = colors;

// javascript prop-types
export const propTypesVariant: any = ["circular", "rounded", "square"];
export const propTypesSize: any = ["xs", "sm", "md", "lg", "xl", "xxl"];
export const propTypesClassName: any = PropTypes.string;
export const propTypesWithBorder: any = PropTypes.bool;
export const propTypesColor: any = ["white", ...propTypesColors];
