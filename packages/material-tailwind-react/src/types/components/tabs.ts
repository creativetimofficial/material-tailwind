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
export const propTypesId = PropTypes.string;
export const propTypesValue = PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired;
export const propTypesAnimate = propTypesAnimation;
export const propTypesDisabled = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesOrientation = PropTypes.oneOf([
  "horizontal",
  "vertical",
] satisfies orientation[]);
export const propTypesIndicator = PropTypes.instanceOf(Object);
export const propTypesChildren = PropTypes.node.isRequired;
