import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { animation } from "../generic";
import { propTypesColors, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Chip component.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type size = typeof propTypesSize[number];
export type color = typeof propTypesColor[number];
export type icon = ReactNode;
export type open = boolean;
export type onClose = () => void;
export type action = ReactNode;
export type dismissible = {
  action?: ReactNode;
  onClose: () => void;
};
export type animate = animation;
export type className = string;
export type value = ReactNode;

// javascript prop-types
export const propTypesVariant = ["filled", "gradient", "outlined", "ghost"] as const;
export const propTypesSize = ["sm", "md", "lg"] as const;
export const propTypesColor = propTypesColors;
export const propTypesIcon = PropTypes.node;
export const propTypesOpen = PropTypes.bool;
export const propTypesOnClose = PropTypes.func;
export const propTypesAction = PropTypes.node;
export const propTypesAnimate = propTypesAnimation;
export const propTypesClassName = PropTypes.string;
export const propTypesValue = PropTypes.node.isRequired;
