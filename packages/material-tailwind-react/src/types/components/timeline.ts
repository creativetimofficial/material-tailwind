import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Timeline components.
 */

// typescript types
export type className = string;
export type children = ReactNode;
export type color = "white" | colors;
export type variant = "filled" | "outlined" | "ghost" | "gradient";

// javascript prop-types
export const propTypeClassName: any = PropTypes.string;
export const propTypeChildren: any = PropTypes.node;
export const propTypeColor: any = ["white", ...propTypesColors];
export const propTypeVariant: any = ["filled", "outlined", "ghost", "gradient"];
