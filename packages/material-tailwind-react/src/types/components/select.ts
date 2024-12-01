import type { ReactElement, ReactNode } from "react";
import PropTypes from "prop-types";

// @floating-ui types
import type { ContextData } from "@floating-ui/react";

// generic types
import type { colors, dismissType, animation, offsetType } from "../generic";
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
export type variant = "standard" | "outlined" | "static";
export type size = "md" | "lg";
export type color = colors;
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
export type labelProps = {
  [key: string]: any;
};
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
export const propTypesVariant: any = ["standard", "outlined", "static"];
export const propTypesSize: any = ["md", "lg"];
export const propTypesColor: any = propTypesColors;
export const propTypesLabel: any = PropTypes.string;
export const propTypesError: any = PropTypes.bool;
export const propTypesSuccess: any = PropTypes.bool;
export const propTypesArrow: any = PropTypes.node;
export const propTypesValue: any = PropTypes.string;
export const propTypesOnChange: any = PropTypes.func;
export const propTypesSelected: any = PropTypes.func;
export const propTypesOffset: any = propTypesOffsetType;
export const propTypesDismiss: any = propTypesDismissType;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesAutoHeight: any = PropTypes.bool;
export const propTypesLockScroll: any = PropTypes.bool;
export const propTypesLabelProps: any = PropTypes.instanceOf(Object);
export const propTypesMenuProps: any = PropTypes.instanceOf(Object);
export const propTypesIndex: any = PropTypes.number;
export const propTypesDisabled: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesName: any = PropTypes.string;
export const propTypesChildren: any = PropTypes.node.isRequired;
export const propTypesContainerProps: any = PropTypes.instanceOf(Object);
export const propTypesContextValue: any = PropTypes.shape({
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
