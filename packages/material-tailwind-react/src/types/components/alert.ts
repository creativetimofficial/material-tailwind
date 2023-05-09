import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { colors, animation } from "../generic";
import { propTypesColors, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Alert component.
 */

// typescript types
export type variant = "filled" | "gradient" | "outlined" | "ghost";
export type color = colors;
export type icon = ReactNode;
export type open = boolean;
export type onClose = () => void;
export type action = ReactNode;
export type animate = animation;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesVariant: any = ["filled", "gradient", "outlined", "ghost"];
export const propTypesColor: any = propTypesColors;
export const propTypesIcon: any = PropTypes.node;
export const propTypesOpen: any = PropTypes.bool;
export const propTypesOnClose: any = PropTypes.func;
export const propTypesAction: any = PropTypes.node;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
