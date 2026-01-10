import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { animation } from "../generic";
import { propTypesColors, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Navbar component.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type color = typeof propTypesColor[number];
export type shadow = boolean;
export type blurred = boolean;
export type fullWidth = boolean;
export type className = string;
export type children = ReactNode;
export type open = boolean;
export type animate = animation;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient"] as const;
export const propTypesColor = ["transparent", "white", ...propTypesColors] as const;
export const propTypesShadow = PropTypes.bool;
export const propTypesBlurred = PropTypes.bool;
export const propTypesFullWidth = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesOpen = PropTypes.bool.isRequired;
export const propTypesAnimate = propTypesAnimation;
