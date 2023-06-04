// generic types
import { propTypesColors } from "../generic";
import type { JSXElement } from "solid-js";
/**
 * This file contains the types and prop-types for Rating component.
 */

// typescript types
type iconType = JSXElement;

export type count = number;
export type value = number;
export type ratedIcon = iconType;
export type unratedIcon = iconType;
export type color = (typeof propTypesColor)[number];
export type className = string;
export type onChange = (value: number) => void;
export type readonly = boolean;

export const propTypesColor = ["white", ...propTypesColors] as const;
