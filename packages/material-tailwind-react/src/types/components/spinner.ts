import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Spinner component.
 */

// typescript types
// export type color = colors; // old version miss "white"
export type color = typeof propTypesColor[number];
export type className = string;

// javascript prop-types
export const propTypesColor = ["white", ...propTypesColors] as const;
export const propTypesClassName = PropTypes.string;
