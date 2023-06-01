// generic types
import type { UseFloatingResult } from "solid-floating-ui";
import type { animation, dismissType, offsetType, placements } from "../generic";
import type { Accessor, JSXElement, Setter } from "solid-js";

/**
 * This file contains the types and prop-types for Menu and Menu, MenuCore, MenuHandler, MenuList, MenuItem and MenuContext components.
 */

// typescript types
export type open = boolean;
export type handler = Setter<boolean>;
export type placement = placements;
export type offset = offsetType;
export interface dismiss extends dismissType {
  itemPress?: boolean;
}
export type animate = animation;
export type lockScroll = boolean;
export type disabled = boolean;
export type className = string;
export type children = JSXElement;

export type treeRefType = {
  id: string;
  ref: HTMLButtonElement;
};
export type ParentContext = (() => undefined) | Accessor<contextValue | null>;
export type contextValue = {
  open: Accessor<boolean>;
  handler: handler;
  parentID: string;
  setReference: Setter<HTMLElement | undefined>;
  setFloating: Setter<HTMLElement | undefined>;
  // setInternalOpen: handler;
  reference: Accessor<HTMLElement | undefined>;
  // floating: (node: HTMLElement) => void;
  position?: UseFloatingResult;
  parentRef: Accessor<HTMLElement | undefined>;
  // parentActiveItem: Accessor<string> | (() => string);
  // setParentActiveItem: Setter<string> | (() => void);
  tree: Accessor<treeRefType[]>;
  addToTree: (el: treeRefType) => treeRefType[];
  // parentTree: Accessor<treeRefType[]>;
  // addToParentTree: (el: treeRefType) => treeRefType[] | undefined;
  menuHandlerId: Accessor<string | undefined>;
  setMenuHandlerId: Setter<string | undefined>;
  removeFromTree: (id: string) => treeRefType[] | undefined;
  // removeFromParentTree: (id: string) => treeRefType[] | undefined;
  // parentHandler: handler | (() => undefined);
  // parentMenuHandlerId: Accessor<string | undefined>;
  // childRef: HTMLUListElement;
  // getReferenceProps: (userProps?: any) => any;
  // getFloatingProps: (userProps?: any) => any;
  // getItemProps: (userProps?: any) => any;
  // appliedAnimation: animate;
  // lockScroll: boolean;
  // context: FloatingContext<ReferenceType>;
  // tree: FloatingTreeType<ReferenceType>;
  allowHover: boolean;
  // internalAllowHover: boolean;
  activeItem: Accessor<string>;
  setActiveItem: Setter<string>;
  nested: boolean;
  parentContext: ParentContext;
};
