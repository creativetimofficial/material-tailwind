import type { JSXElement, ValidComponent } from "solid-js";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Typography component.
 */

// typescript types
export type variant = (typeof propTypesVariant)[number];
export type color = (typeof propTypesColor)[number];
export type asType = ValidComponent;
export type textGradient = boolean;
export type className = string;
export type children = JSXElement;

// javascript prop-types
export const propTypesVariant = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "lead",
  "paragraph",
  "small",
] as const;
export const propTypesColor = ["inherit", "current", "black", "white", ...propTypesColors] as const;
