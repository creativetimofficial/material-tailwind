// generic types
import type { JSXElement } from "solid-js";
import type { animation, colors } from "../generic";
import { propTypesColors } from "../generic";

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
export type children = JSXElement;
export type open = boolean;
export type animate = animation;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient"] as const;
export const propTypesColor = ["transparent", "white", ...propTypesColors] as const;
