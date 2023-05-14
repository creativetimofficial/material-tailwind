import type { JSX } from "solid-js";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Checkbox, Radio and Switch components.
 */

// typescript types
export type color = colors;
export type label = JSX.Element;
export type icon = JSX.Element;
export type ripple = boolean;
export type disabled = boolean;
export type objectType = {
  [key: string]: any;
};
// javascript prop-types
export const propTypesColor = propTypesColors;
