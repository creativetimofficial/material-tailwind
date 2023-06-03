// @floating-ui types
import type { Placement } from "@floating-ui/react";

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
  // parentID: string;
  // tree: Accessor<treeRefType[]>;
  // addToTree: (el: treeRefType) => treeRefType[];
  // menuHandlerId: Accessor<string | undefined>;
  // setMenuHandlerId: Setter<string | undefined>;
  // removeFromTree: (id: string) => treeRefType[] | undefined;
  // allowHover: boolean;
  // activeItem: Accessor<string>;
  // setActiveItem: Setter<string>;
  // nested: boolean;
  // parentContext: ParentContext;
};

// javascript prop-types
// export const propTypesOpen: any = PropTypes.bool;
// export const propTypesHandler: any = PropTypes.func;
// export const propTypesPlacement: any = propTypesPlacements;
// export const propTypesOffset: any = propTypesOffsetType;
// export const propTypesDismiss: any = propTypesDismissType;
// export const propTypesAnimate: any = propTypesAnimation;
// export const propTypesContent: any = PropTypes.node;
// export const propTypesInteractive: any = PropTypes.bool;
// export const propTypesClassName: any = PropTypes.string;
// export const propTypesChildren: any = PropTypes.node.isRequired;
// export const propTypesContextValue: any = PropTypes.shape({
//   open: PropTypes.bool.isRequired,
//   strategy: PropTypes.oneOf(["fixed", "absolute"]).isRequired,
//   x: PropTypes.number,
//   y: PropTypes.number,
//   context: PropTypes.instanceOf(Object).isRequired,
//   reference: PropTypes.func.isRequired,
//   floating: PropTypes.func.isRequired,
//   getReferenceProps: PropTypes.func.isRequired,
//   getFloatingProps: PropTypes.func.isRequired,
//   appliedAnimation: propTypesAnimate.isRequired,
//   labelId: PropTypes.string.isRequired,
//   descriptionId: PropTypes.string.isRequired,
// }).isRequired;
