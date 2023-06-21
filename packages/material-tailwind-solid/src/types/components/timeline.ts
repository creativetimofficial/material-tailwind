// generic types
import type { JSXElement } from "solid-js";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Timeline components.
 */

// typescript types
export type className = string;
export type children = JSXElement;
export type color = (typeof propTypeColor)[number];
export type variant = (typeof propTypeVariant)[number];

export const propTypeColor = ["white", ...propTypesColors] as const;
export const propTypeVariant = ["filled", "outlined", "ghost", "gradient"] as const;
