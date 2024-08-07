import type { ComponentProps, ReactElement, ReactNode } from "react";
import PropTypes from "prop-types";

// @floating-ui types
import type { ContextData } from "@floating-ui/react";

// generic types
import type { dismissType, animation, offsetType } from "../generic";
import {
  propTypesColors,
  propTypesOffsetType,
  propTypesDismissType,
  propTypesAnimation,
} from "../generic";
import type React from "react";

/**
 * This file contains the types and prop-types for Select, SelectOption and SelectContext components.
 */

// typescript types
export type variant = typeof propTypesVariant[number];
export type size = typeof propTypesSize[number];
export type color = typeof propTypesColor[number];
export type label = string;
export type error = boolean;
export type success = boolean;
export type arrow = ReactNode;
export type value = string;
export type onChange = (value?: string) => void;
export type selected = (element?: ReactElement, index?: number) => React.ReactNode;
export type offset = offsetType;
export type dismiss = dismissType;
export type animate = animation;
export type autoHeight = boolean;
export type lockScroll = boolean;
export type labelProps = Omit<ComponentProps<"label">, "ref" | "children">;
export type menuProps = {
  [key: string]: any;
};
export type index = number;
export type disabled = boolean;
export type className = string;
export type name = string;
export type children = ReactNode;
export type containerProps = React.ComponentProps<"div">;
export type contextValue = {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  activeIndex?: number | null;
  setActiveIndex: (index: number | null) => void;
  listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
  setOpen: (open: boolean) => void;
  onChange: (value: string) => void;
  getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
  dataRef: ContextData;
};

// javascript prop-types
export const propTypesVariant = ["standard", "outlined", "static"] as const;
export const propTypesSize = ["md", "lg"] as const;
export const propTypesColor = propTypesColors;
export const propTypesLabel = PropTypes.string;
export const propTypesError = PropTypes.bool;
export const propTypesSuccess = PropTypes.bool;
export const propTypesArrow = PropTypes.node;
export const propTypesValue = PropTypes.string;
export const propTypesOnChange = PropTypes.func;
export const propTypesSelected = PropTypes.func;
export const propTypesOffset = propTypesOffsetType;
export const propTypesDismiss = propTypesDismissType;
export const propTypesAnimate = propTypesAnimation;
export const propTypesAutoHeight = PropTypes.bool;
export const propTypesLockScroll = PropTypes.bool;
export const propTypesLabelProps = PropTypes.instanceOf(Object);
export const propTypesMenuProps = PropTypes.instanceOf(Object);
export const propTypesIndex = PropTypes.number;
export const propTypesDisabled = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesContainerProps = PropTypes.instanceOf(Object);
export const propTypesContextValue = PropTypes.shape({
  selectedIndex: PropTypes.number.isRequired,
  setSelectedIndex: PropTypes.func.isRequired,
  activeIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.instanceOf(null)]),
  setActiveIndex: PropTypes.func.isRequired,
  listRef: PropTypes.instanceOf(Object).isRequired,
  setOpen: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  getItemProps: PropTypes.func.isRequired,
  dataRef: PropTypes.instanceOf(Object).isRequired,
}).isRequired;
