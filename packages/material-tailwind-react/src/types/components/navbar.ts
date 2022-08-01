import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors, animation } from "../generic";
import { propTypesColors, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Navbar component.
 */

// typescript types
export type variant = "filled" | "gradient";
export type color = "transparent" | "white" | colors;
export type shadow = boolean;
export type blurred = boolean;
export type fullWidth = boolean;
export type className = string;
export type children = ReactNode;
export type open = boolean;
export type animate = animation;

// javascript prop-types
export const propTypesVariant: any = ["filled", "gradient"];
export const propTypesColor: any = ["transparent", "white", ...propTypesColors];
export const propTypesShadow: any = PropTypes.bool;
export const propTypesBlurred: any = PropTypes.bool;
export const propTypesFullWidth: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesOpen: any = PropTypes.bool.isRequired;
export const propTypesAnimate: any = propTypesAnimation;
