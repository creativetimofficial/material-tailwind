import type { ComponentProps } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Progress component.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type color = typeof propTypesColor[number];
export type size = typeof propTypesSize[number];
export type value = number;
export type label = string | boolean;
export type barProps = Omit<ComponentProps<"div">, "ref" | "children">;
export type className = string;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient"] as const;
export const propTypesColor = propTypesColors;
export const propTypesSize = ["sm", "md", "lg"] as const;
export const propTypesValue = PropTypes.number;
export const propTypesLabel = PropTypes.oneOfType([PropTypes.string, PropTypes.bool]);
export const propTypesBarProps = PropTypes.instanceOf(Object);
export const propTypesClassName = PropTypes.string;
