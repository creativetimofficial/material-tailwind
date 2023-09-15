import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Card, CardHeader, CardBody and CardFooter components.
 */

// typescript types
export type variant = "filled" | "gradient";
export type color = "transparent" | "white" | colors;
export type shadow = boolean;
export type floated = boolean;
export type divider = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesVariant: any = ["filled", "gradient"];
export const propTypesColor: any = ["transparent", "white", ...propTypesColors];
export const propTypesShadow: any = PropTypes.bool;
export const propTypesFloated: any = PropTypes.bool;
export const propTypesDivider: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
