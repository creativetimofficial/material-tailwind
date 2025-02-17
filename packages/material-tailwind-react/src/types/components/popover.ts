import type { ReactNode } from "react";
import PropTypes from "prop-types";

// @floating-ui types
import type { FloatingContext, Placement, ReferenceType, Strategy } from "@floating-ui/react";

// generic types
import type { dismissType, animation, offsetType } from "../generic";
import {
  propTypesOffsetType,
  propTypesDismissType,
  propTypesAnimation,
  propTypesPlacements,
} from "../generic";

/**
 * This file contains the types and prop-types for Popover, PopoverHandler, PopoverContent, PopoverContext and Tooltip components.
 */

// typescript types
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type placement = Placement;
export type offset = offsetType;
export type dismiss = dismissType;
export type animate = animation;
export type content = ReactNode;
export type contextValue = {
  open: open;
  strategy: Strategy;
  x?: number;
  y?: number;
  context: FloatingContext<ReferenceType>;
  reference: (node: HTMLElement) => void;
  floating: (node: HTMLElement) => void;
  getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  appliedAnimation: animate;
  labelId: string;
  descriptionId: string;
};
export type interactive = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesOpen = PropTypes.bool;
export const propTypesHandler = PropTypes.func;
export const propTypesPlacement = propTypesPlacements;
export const propTypesOffset = propTypesOffsetType;
export const propTypesDismiss = propTypesDismissType;
export const propTypesAnimate = propTypesAnimation;
export const propTypesContent = PropTypes.node;
export const propTypesInteractive = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesContextValue = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  strategy: PropTypes.oneOf(["fixed", "absolute"] satisfies Strategy[]).isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  context: PropTypes.instanceOf(Object).isRequired,
  reference: PropTypes.func.isRequired,
  floating: PropTypes.func.isRequired,
  getReferenceProps: PropTypes.func.isRequired,
  getFloatingProps: PropTypes.func.isRequired,
  appliedAnimation: propTypesAnimate.isRequired,
  labelId: PropTypes.string.isRequired,
  descriptionId: PropTypes.string.isRequired,
}).isRequired;
