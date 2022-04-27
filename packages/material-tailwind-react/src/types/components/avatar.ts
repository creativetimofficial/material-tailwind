import PropTypes from "prop-types";

/**
 * This file contains the types and prop-types for Avatar component.
 */

// typescript types
export type variant = "rounded" | "circular";
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type className = string;

// javascript prop-types
export const propTypesVariant: any = ["rounded", "circular"];
export const propTypesSize: any = ["xs", "sm", "md", "lg", "xl", "xxl"];
export const propTypesClassName: any = PropTypes.string;
