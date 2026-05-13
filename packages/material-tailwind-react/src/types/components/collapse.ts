import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { animation } from "../generic";
import { propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Collapse component.
 */

// typescript types
export type className = string;
export type children = ReactNode;
export type open = boolean;
export type animate = animation;

// javascript prop-types
export const propTypesClassName = PropTypes.string;
export const propTypesChildren = PropTypes.node.isRequired;
export const propTypesOpen = PropTypes.bool.isRequired;
export const propTypesAnimate = propTypesAnimation;
