// generic types
import type { JSX } from "solid-js";
import type { colors } from "../generic";

/**
 * This file contains the types and prop-types for Progress component.
 */

// typescript types
export type variant = (typeof propTypesVariant)[number];
export type color = colors;
export type size = (typeof propTypesSize)[number];
export type value = number;
export type label = string | boolean;
export type barProps = JSX.HTMLAttributes<HTMLDivElement>;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient"] as const;
export const propTypesSize = ["sm", "md", "lg"] as const;
