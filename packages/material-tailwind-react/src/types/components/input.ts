import type { ComponentProps, ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Input and Textarea components.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type size = typeof propTypesSize[number];
export type color = typeof propTypesColor[number];
export type label = string;
export type error = boolean;
export type success = boolean;
export type icon = ReactNode;
export type resize = boolean;
export type labelProps = Omit<ComponentProps<"label">, "ref" | "children">;
export type containerProps = Omit<ComponentProps<"div">, "ref" | "children">;
export type shrink = boolean;
export type className = string;

// javascript prop-types
export const propTypesVariant = ["standard", "outlined", "static"] as const;
export const propTypesSize = ["md", "lg"] as const;
export const propTypesColor = ["black", "white", ...propTypesColors] as const;
export const propTypesLabel = PropTypes.string;
export const propTypesError = PropTypes.bool;
export const propTypesSuccess = PropTypes.bool;
export const propTypesIcon = PropTypes.node;
export const propTypesResize = PropTypes.bool;
export const propTypesLabelProps = PropTypes.instanceOf(Object);
export const propTypesContainerProps = PropTypes.instanceOf(Object);
export const propTypesShrink = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
