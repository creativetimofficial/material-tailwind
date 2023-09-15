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
export type size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type dismiss = dismissType;
export type animate = animation;
export type divider = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesOpen: any = PropTypes.bool.isRequired;
export const propTypesHandler: any = PropTypes.func;
export const propTypesSize: any = ["xs", "sm", "md", "lg", "xl", "xxl"];
export const propTypesDismiss: any = propTypesDismissType;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesDivider: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
