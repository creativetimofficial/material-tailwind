import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Badge component.
 */

// typescript types
export type color = typeof propTypesColor[number];
export type invisible = boolean;
export type withBorder = boolean;
export type overlap = typeof propTypesOverlap[number];
export type placement = typeof propTypesPlacement[number];
export type className = string;
export type content = ReactNode;
export type children = ReactNode;
export type containerProps = React.HTMLAttributes<HTMLDivElement>;
export type containerRef = React.Ref<HTMLDivElement>;

// javascript prop-types
export const propTypesColor = ["white", ...propTypesColors] as const;
export const propTypesInvisible = PropTypes.bool;
export const propTypesWithBorder = PropTypes.bool;
export const propTypesOverlap = ["circular", "square"] as const;
export const propTypesPlacement = ["top-start", "top-end", "bottom-start", "bottom-end"] as const;
export const propTypesClassName = PropTypes.string;
export const propTypesContent = PropTypes.node;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesContainerProps = PropTypes.instanceOf(Object);
export const propTypesContainerRef = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.shape({ current: PropTypes.any }),
]);
