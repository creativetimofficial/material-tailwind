import type { Placement } from "@floating-ui/dom";

// generic types
import type { UseFloatingResult } from "solid-floating-ui";
import type { Accessor, JSXElement, Setter } from "solid-js";
import type { animation, dismissType, offsetType } from "../generic";

/**
 * This file contains the types and prop-types for Popover, PopoverHandler, PopoverContent, PopoverContext and Tooltip components.
 */

// typescript types
export type open = Accessor<boolean>;
export type handler = Setter<boolean>;
export type placement = Placement;
export type offset = offsetType;
export type dismiss = dismissType;
export type animate = animation;
export type content = JSXElement;
export type interactive = boolean;
export type children = JSXElement;

export type contextValue = {
  open: Accessor<boolean>;
  handler: handler;
  position?: UseFloatingResult;
  reference: Accessor<HTMLElement | undefined>;
  floating: Accessor<HTMLElement | undefined>;
  setReference: Setter<HTMLElement | undefined>;
  setFloating: Setter<HTMLElement | undefined>;
  appliedAnimation: animate;
  labelId: string;
  descriptionId: string;
};
