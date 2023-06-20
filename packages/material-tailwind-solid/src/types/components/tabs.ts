// generic types
import type { JSXElement } from "solid-js";
import type { animation } from "../generic";

/**
 * This file contains the types and prop-types for Tabs and TabsHeader, TabsBody, Tab, TabPanel, and TabsContext components.
 */

// typescript types
export type id = string;
export type value = string | number;
export type animate = animation;
export type disabled = boolean;
export type isInitial = boolean;
export type orientation = "horizontal" | "vertical";
export type indicatorProps =
  | {
      [key: string]: any;
    }
  | undefined;
export type children = JSXElement;
