import type { ReactNode } from "react";
import PropTypes from "prop-types";

// @floating-ui types
import type {
  Placement,
  Strategy,
  FloatingContext,
  ReferenceType,
  FloatingTreeType,
} from "@floating-ui/react";

// generic types
import type { dismissType, animation, offsetType } from "../generic";
import {
  propTypesOffsetType,
  propTypesAnimation,
  propTypesPlacements,
} from "../generic";

/**
 * This file contains the types and prop-types for Menu and Menu, MenuCore, MenuHandler, MenuList, MenuItem and MenuContext components.
 */

// typescript types
export type open = boolean;
export type handler = React.Dispatch<React.SetStateAction<any>>;
export type placement = Placement;
export type offset = offsetType;
export interface dismiss extends dismissType {
  itemPress?: boolean;
}
export type animate = animation;
export type lockScroll = boolean;
export type disabled = boolean;
export type className = string;
export type children = ReactNode;
export type contextValue = {
  open: open;
  handler: handler;
  setInternalOpen: handler;
  strategy: Strategy;
  x: number;
  y: number;
  reference: (instance: HTMLButtonElement) => void;
  floating: (node: HTMLElement) => void;
  listItemsRef: React.MutableRefObject<any[]>;
  getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
  getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  appliedAnimation: animate;
  lockScroll: boolean;
  context: FloatingContext<ReferenceType>;
  tree: FloatingTreeType<ReferenceType>;
  allowHover: boolean;
  internalAllowHover: boolean;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  nested: boolean;
};

// javascript prop-types
export const propTypesOpen = PropTypes.bool;
export const propTypesHandler = PropTypes.func;
export const propTypesPlacement = propTypesPlacements;
export const propTypesOffset = propTypesOffsetType;
export const propTypesDismiss = PropTypes.shape({
  itemPress: PropTypes.bool,
  enabled: PropTypes.bool,
  escapeKey: PropTypes.bool,
  referencePress: PropTypes.bool,
  referencePressEvent: PropTypes.oneOf([
    "pointerdown",
    "mousedown",
    "click",
  ] satisfies dismiss["referencePressEvent"][]),
  outsidePress: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  outsidePressEvent: PropTypes.oneOf([
    "pointerdown",
    "mousedown",
    "click",
  ] satisfies dismiss["outsidePressEvent"][]),
  ancestorScroll: PropTypes.bool,
  bubbles: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      escapeKey: PropTypes.bool,
      outsidePress: PropTypes.bool,
    }),
  ]),
});
export const propTypesAnimate = propTypesAnimation;
export const propTypesLockScroll = PropTypes.bool;
export const propTypesDisabled = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesContextValue = PropTypes.shape({
  open: PropTypes.bool.isRequired,
  handler: PropTypes.func.isRequired,
  setInternalOpen: PropTypes.func.isRequired,
  strategy: PropTypes.oneOf(["fixed", "absolute"] satisfies contextValue["strategy"][]).isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  reference: PropTypes.func.isRequired,
  floating: PropTypes.func.isRequired,
  listItemsRef: PropTypes.instanceOf(Object).isRequired,
  getReferenceProps: PropTypes.func.isRequired,
  getFloatingProps: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
  appliedAnimation: propTypesAnimate.isRequired,
  lockScroll: PropTypes.bool.isRequired,
  context: PropTypes.instanceOf(Object).isRequired,
  tree: PropTypes.any.isRequired,
  allowHover: PropTypes.bool.isRequired,
  activeIndex: PropTypes.number.isRequired,
  setActiveIndex: PropTypes.func.isRequired,
  nested: PropTypes.bool.isRequired,
});
