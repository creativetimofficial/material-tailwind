import type { ReactNode } from "react";
import PropTypes from "prop-types";

// generic types
import type { animation } from "../generic";
import { propTypesAnimation } from "../generic";

/**
 * This file contains the types and prop-types for Accordion, AccordionHeader, AccordionBody and AccordionContext components.
 */

// typescript types
export type open = boolean;
export type icon = ReactNode;
export type animate = animation;
export type disabled = boolean;
export type className = string;
export type children = ReactNode;

// javascript prop-types
export const propTypesOpen = PropTypes.bool.isRequired;
export const propTypesIcon = PropTypes.node;
export const propTypesAnimate = propTypesAnimation;
export const propTypesDisabled = PropTypes.bool;
export const propTypesClassName = PropTypes.string;
export const propTypesValue = PropTypes.instanceOf(Object).isRequired;
export const propTypesChildren = PropTypes.node.isRequired;
