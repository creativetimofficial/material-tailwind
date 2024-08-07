import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Card, CardHeader, CardBody and CardFooter components.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type color = typeof propTypesColor[number];
export type shadow = boolean;
export type floated = boolean;
export type divider = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient"] as const;
export const propTypesColor = ["transparent", "white", ...propTypesColors] as const;
export const propTypesShadow = PropTypes.bool;
export const propTypesFloated = PropTypes.bool;
export const propTypesDivider = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
