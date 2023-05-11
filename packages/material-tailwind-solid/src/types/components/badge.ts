import type { JSX } from "solid-js";
import PropTypes from "prop-types";

// generic types
import type { colors } from "../generic";
import { propTypesColors } from "../generic";

/**
 * This file contains the types and prop-types for Badge component.
 */

// typescript types
export type color = "white" | colors;
export type invisible = boolean;
export type withBorder = boolean;
export type overlap = "circular" | "square";
export type placement = "top-start" | "top-end" | "bottom-start" | "bottom-end";
export type content = JSX.Element;
export type containerProps = JSX.HTMLAttributes<HTMLDivElement>;
export type containerRef = HTMLDivElement;

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
