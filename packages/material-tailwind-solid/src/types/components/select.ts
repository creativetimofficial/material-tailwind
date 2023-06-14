// generic types
import type { UseFloatingResult } from "solid-floating-ui";
import type { colors, dismissType, animation, offsetType } from "../generic";
import type { JSXElement, JSX, Accessor, Setter } from "solid-js";

/**
 * This file contains the types and prop-types for Select, SelectOption and SelectContext components.
 */

// typescript types
export type variant = (typeof propTypesVariant)[number];
export type size = (typeof propTypesSize)[number];
export type color = colors;
export type label = string;
export type error = boolean;
export type success = boolean;
export type arrow = Node;
export type value = string;
export type onChange = (value?: string) => void;
export type selected = (element?: HTMLLIElement | null, value?: string) => JSXElement;
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
export type index = string;
export type disabled = boolean;
export type name = string;

export type containerProps = JSX.HTMLAttributes<HTMLDivElement>;
export type contextValue = {
  selectedIndex: Accessor<HTMLLIElement | null>;
  setSelectedIndex: Setter<HTMLLIElement | null>;
  activeIndex: Accessor<HTMLLIElement | null>;
  prevActiveIndex: Accessor<HTMLLIElement | null>;
  setActiveIndex: (index: HTMLLIElement | null) => void;
  listRef: HTMLLIElement[];
  setOpen: Setter<boolean>;
  onChange?: (value: string) => void;
  position: UseFloatingResult;
  // getItemProps: (userProps?: JSX.HTMLAttributes<HTMLElement>) => any;
  // context: contextValue;
};

// javascript prop-types
export const propTypesVariant = ["standard", "outlined", "static"] as const;
export const propTypesSize = ["md", "lg"] as const;
