import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Timeline components.
 */

// typescript types
export type className = string;
export type children = ReactNode;
export type color = typeof propTypeColor[number];
export type variant = typeof propTypeVariant[number];

// javascript prop-types
export const propTypeClassName = PropTypes.string;
export const propTypeChildren = PropTypes.node;
export const propTypeColor = ["white", ...propTypesColors] as const;
export const propTypeVariant = ["filled", "outlined", "ghost", "gradient"] as const;
