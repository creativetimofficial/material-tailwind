import type { JSX } from "solid-js";

// generic types
import type { colors } from "../generic";

/**
 * This file contains the types and prop-types for Slider component.
 */

// typescript types
export type color = colors;
export type size = "sm" | "md" | "lg";

export type trackClassName = string;
export type thumbClassName = string;
export type barClassName = string;
export type defaultValue = string | number;
export type value = string | number;
export type onInput = JSX.ChangeEventHandler<HTMLInputElement, InputEvent>;
export type min = number | string;
export type max = number | string;
export type step = number | string;
export type inputRef = HTMLInputElement;
export type inputProps = JSX.HTMLAttributes<HTMLInputElement>;

// javascript prop-types

export const propTypesSize = ["sm", "md", "lg"] as const;
