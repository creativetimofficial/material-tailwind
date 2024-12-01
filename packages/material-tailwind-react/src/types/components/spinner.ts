import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Spinner component.
 */

// typescript types
export type color = colors;
export type className = string;

// javascript prop-types
export const propTypesColor: any = ["white", ...propTypesColors];
export const propTypesClassName: any = PropTypes.string;
