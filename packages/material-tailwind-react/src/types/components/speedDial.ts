import PropTypes from "prop-types";
import type { Placement } from "@floating-ui/dom";

// generic types
import type { offsetType, dismissType, animation } from "../generic";
import {
  propTypesPlacements,
  propTypesOffsetType,
  propTypesDismissType,
  propTypesAnimation,
} from "../generic";

/**
 * This file contains the types and prop-types for SpeedDial, SpeedDialHandler and SpeedDialContent component.
 */

// typescript types
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<boolean>>;
export type placement = Placement;
export type offset = offsetType;
export type dismiss = dismissType;
export type children = React.ReactNode;
export type animate = animation;
export type className = string;

// javascript prop-types
export const propTypesOpen = PropTypes.bool;
export const propTypesHanlder = PropTypes.func;
export const propTypesPlacement = PropTypes.oneOf(propTypesPlacements);
export const propTypesOffset = propTypesOffsetType;
export const propTypesDismiss = propTypesDismissType;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesAnimate = propTypesAnimation;
export const propTypesClassName = PropTypes.string;
