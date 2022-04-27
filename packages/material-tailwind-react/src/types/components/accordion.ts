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
export const propTypesOpen: any = PropTypes.bool.isRequired;
export const propTypesIcon: any = PropTypes.node;
export const propTypesAnimate: any = propTypesAnimation;
export const propTypesDisabled: any = PropTypes.bool;
export const propTypesClassName: any = PropTypes.string;
export const propTypesValue: any = PropTypes.instanceOf(Object).isRequired;
export const propTypesChildren: any = PropTypes.node.isRequired;
