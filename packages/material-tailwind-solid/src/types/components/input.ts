// generic types
import type { JSXElement } from "solid-js";
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Input and Textarea components.
 */

// typescript types
export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = "black" | "white" | colors;
export type label = string;
export type helperText = string;
export type error = boolean;
export type success = boolean;
export type icon = JSXElement;
export type resize = boolean;
export type labelProps = {
  [key: string]: any;
};
export type containerProps = {
  [key: string]: any;
};
export type shrink = boolean;

// javascript prop-types
export const propTypesVariant = ["standard", "outlined", "static"] as const;
export const propTypesSize = ["md", "lg"] as const;
export const propTypesColor = ["black", "white", ...propTypesColors] as const;
