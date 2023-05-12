// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Card, CardHeader, CardBody and CardFooter components.
 */

// typescript types
export type variant = "filled" | "gradient";
export type color = "transparent" | "white" | colors;
export type shadow = boolean;
export type floated = boolean;
export type divider = boolean;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient"] as const;
export const propTypesColor = ["transparent", "white", ...propTypesColors] as const;
// export const propTypesShadow= PropTypes.bool;
// export const propTypesFloated= PropTypes.bool;
// export const propTypesDivider= PropTypes.bool;
// export const propTypesClassName= PropTypes.string;
// export const propTypesChildren= PropTypes.node.isRequired;
