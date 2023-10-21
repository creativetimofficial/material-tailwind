import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { animation } from "../generic";
import { propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Tabs and TabsHeader, TabsBody, Tab, TabPanel, and TabsContext components.
 */

// typescript types
export type id = string;
export type value = string | number;
export type animate = animation;
export type disabled = boolean;
export type className = string;
export type isInitial = boolean;
export type orientation = "horizontal" | "vertical";
export type indicatorProps = {
  [key: string]: any;
};
export type children = ReactNode;

// javascript prop-types
export const propTypesId: any = PropTypes.string;
export const propTypesValue: any = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]).isRequired;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesDisabled: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesOrientation: any = PropTypes.oneOf(["horizontal", "vertical"]);
export const propTypesIndicator: any = PropTypes.instanceOf(Object);
export const propTypesChildren: any = PropTypes.node.isRequired;
