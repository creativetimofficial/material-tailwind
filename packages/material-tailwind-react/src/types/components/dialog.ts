import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { dismissType, animation } from "../generic";
import { propTypesDismissType, propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Dialog, DialogHeader, DialogBody and DialogFooter components.
 */

// typescript types
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type size = typeof propTypesSize[number];
export type dismiss = dismissType;
export type animate = animation;
export type divider = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesOpen = PropTypes.bool.isRequired;
export const propTypesHandler = PropTypes.func;
export const propTypesSize = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;
export const propTypesDismiss = propTypesDismissType;
export const propTypesAnimate = propTypesAnimation;
export const propTypesDivider = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
