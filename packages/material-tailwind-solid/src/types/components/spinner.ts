// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Spinner component.
 */

// typescript types
export type color = (typeof propTypesColor)[number];

// javascript prop-types
export const propTypesColor = ["white", ...propTypesColors] as const;
