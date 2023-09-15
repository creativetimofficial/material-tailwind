import type { ReactNode, ElementType } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Typography component.
 */

// typescript types
export type variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
export type color = "inherit" | "current" | "black" | "white" | colors;
export type asType = ElementType;
export type textGradient = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesVariant: any = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "lead",
  "paragraph",
  "small",
];
export const propTypesColor: any = ["inherit", "current", "black", "white", ...propTypesColors];
export const propTypesAs: any = PropTypes.elementType;
export const propTypesTextGradient: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
