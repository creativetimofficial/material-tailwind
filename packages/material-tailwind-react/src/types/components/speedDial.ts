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
export const propTypesOpen: any = PropTypes.bool;
export const propTypesHanlder: any = PropTypes.func;
export const propTypesPlacement: any = PropTypes.oneOf(propTypesPlacements);
export const propTypesOffset: any = propTypesOffsetType;
export const propTypesDismiss: any = propTypesDismissType;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesClassName: any = PropTypes.string;
