import type { JSX } from "solid-js";

// generic types
import type { animation, colors } from "../generic";

/**
 * This file contains the types and prop-types for Chip component.
 */

// typescript types
export type variant = "filled" | "gradient" | "outlined" | "ghost";
export type size = "sm" | "md" | "lg";
export type color = colors;
export type icon = JSX.Element;
export type open = boolean;
export type onClose = () => void;
export type action = JSX.Element;
export type dismissible = {
  action?: JSX.Element;
  onClose: () => void;
};
export type animate = animation;
export type className = string;
export type value = JSX.Element;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient", "outlined", "ghost"] as const;
export const propTypesSize = ["sm", "md", "lg"] as const;
